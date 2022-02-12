<template>
  <div class="flower-listing-container">
    <div class="filters-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Nom de la fleur"
        class="input search"
      />

      <Treeselect
        v-model="searchMonth"
        :multiple="true"
        :options="treeselectOptions"
        sort-value-by="LEVEL"
        value-consists-of="LEAF_PRIORITY"
        placeholder="Saisons"
      />
    </div>

    <h4 class="results-count">{{ flowersFiltered.length }} résultat(s)</h4>

    <div class="flowers">
      <FlowerItem
        v-for="flower in flowersFiltered"
        :key="flower.name"
        :search-months="searchMonths"
        v-bind="flower"
      />
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'

import FlowerItem from './FlowerItem'

import { SEASONS } from '../constants'

export default {
  name: 'FlowersListing',
  components: { FlowerItem, Treeselect },
  data() {
    return {
      flowers: this.$_getFlowersData(),
      searchQuery: '',
      searchMonths: [],
      treeselectOptions: Object.entries(SEASONS).map(
        ([season, { label, months }]) => ({
          id: season,
          label,
          children: months.map(month => ({
            id: month,
            label: this.$_getMonthFromNumber(month)
          }))
        })
      )
    }
  },
  computed: {
    flowersFiltered() {
      if (this.searchMonths.length) {
        return this.flowers.filter(flower =>
          flower.months.some(month => this.searchMonths.includes(month))
        )
      }

      if (this.searchQuery) {
        return this.flowers.filter(flower =>
          flower.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }

      return this.flowers
    }
  }
}
</script>

<style lang="scss">
.flower-listing-container {
  > .filters-container {
    display: flex;
    margin: 0 auto;
    max-width: 500px;

    > * {
      margin: 0 var(--spacing-m);
    }

    .input.search {
      background: var(--color-light);
      padding-left: var(--spacing-s);
      color: var(--color-text);
      border: solid 1px var(--color-text-light);
      border-radius: 4px;
      font-size: 0.9rem;
      outline: none;
    }
  }

  .results-count {
    text-align: center;
    margin-bottom: var(--spacing-l);
    margin-top: var(--spacing-m);
  }

  > .flowers {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc(min(240px, 100%)), 1fr)
    );
    gap: var(--spacing-m);
  }
}
</style>
