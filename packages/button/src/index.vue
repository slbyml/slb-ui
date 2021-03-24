<template>
  <button>
    <span v-if="$slots.default" @click="handleInnerClick"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'slbButton',
  emits: ['click'],
  setup (props, context) {
    const handleInnerClick = (evt) => {
      context.emit('click', evt)
    }
    return {
      handleInnerClick
    }
  }
}
</script>

<style lang="scss" scoped>

</style>