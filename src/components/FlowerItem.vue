<template>
  <div class="flower-item-container">
    <div class="media-container">
      <img :src="src" :alt="name" />
    </div>

    <div class="infos-container">
      <h3 class="title">{{ name }}</h3>
      <p class="category">{{ category }}</p>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      src: require(`../assets/flowers/${this.picture}`)
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

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
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
  }
}
</style>
