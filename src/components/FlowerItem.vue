<template>
  <div class="flower-item-container">
    <div class="media-container">
      <img :src="src" :alt="name" />
    </div>

    <div class="infos-container">
      <h3 class="title">{{ name }}</h3>
      <p class="category">{{ category }}</p>

      <div class="flowering-container">
        <div class="flowering">
          <span
            v-for="(month, index) in MONTHS"
            :key="month"
            :class="{
              active: isActive(month),
              selected: searchMonths.includes(index)
            }"
            class="flowering-month"
          >
            {{ month.slice(0, 1) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MONTHS } from '../constants'

export default {
  name: 'FlowerItem',
  props: {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    months: {
      type: Array,
      required: true,
      validator: array => array.every(item => typeof item === 'number')
    },
    searchMonths: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      src: require(`../assets/flowers/${this.picture}`),
      MONTHS
    }
  },
  methods: {
    isActive(month) {
      return this.months.includes(MONTHS.indexOf(month))
    }
  }
}
</script>

<style lang="scss">
.flower-item-container {
  display: flex;
  flex-direction: column;
  background: var(--color-light);
  border-radius: 10px;
  overflow: hidden;

  .media-container {
    width: 100%;
    height: 190px;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 80ms ease-in-out;

      &:hover {
        transform: scale(110%);
      }
    }
  }

  .infos-container {
    padding: var(--spacing-s) var(--spacing-m);

    h3 {
      margin-top: var(--spacing-xs);
      margin-bottom: var(--spacing-s);
    }

    p {
      margin: var(--spacing-s) 0;
    }

    .flowering-container {
      display: flex;
      justify-content: center;
      margin-top: var(--spacing-m);

      .flowering {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(6, 24px);
        grid-auto-rows: 24px;
        gap: 1px;

        .flowering-month {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-text);

          &:not(.active) {
            opacity: 0.2;
          }

          &.active.selected {
            background: var(--color-text);
            color: var(--color-text-light);
          }
        }
      }
    }
  }
}
</style>
