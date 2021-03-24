<template>
  <slb-button @click="test">311</slb-button>
  <slb-box></slb-box>
</template>

<script>

export default {
  name: 'App',
  setup() {
    const test = () => {
      console.log('213');
    }
    return {
      test
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
