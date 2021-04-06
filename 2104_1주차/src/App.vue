<template>
  <div id="app">
    <youbin-list></youbin-list>
  </div>
</template>

<script>
import YoubinList from '@/components/YoubinList/index.vue'
  export default {
    components: { YoubinList },
    name: 'App',
  }
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
}
</style>
