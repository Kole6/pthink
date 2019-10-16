<template>
  <div id="app">
    <router-view name="top" />
    <router-view />
    <router-view name="bottom" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/style/app';
</style>
