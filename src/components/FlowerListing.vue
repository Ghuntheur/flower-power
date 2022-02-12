<template>
  <div class="flower-listing-container">
    <FlowerItem v-for="flower in flowers" :key="flower.index" v-bind="flower" />
  </div>
</template>

<script>
import FlowerItem from './FlowerItem'

export default {
  name: 'FlowersListing',
  components: { FlowerItem },
  data() {
    return {
      flowers: this.$_getFlowersData()
    }
  }
}
</script>

<style lang="scss">
.flower-listing-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(min(240px, 100%)), 1fr));
  gap: var(--spacing-m);
}
</style>
