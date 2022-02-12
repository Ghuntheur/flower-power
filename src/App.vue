<template>
  <div id="app">
    <h1>Flowers power</h1>
    <FlowersListing />
  </div>
</template>

<script>
import FlowersListing from './components/FlowerListing'

export default {
  name: 'App',
  components: { FlowersListing }
}
</script>

<style lang="scss">
#app {
  padding: var(--spacing-xxl);

  > h1 {
    text-align: center;
  }
}
</style>
