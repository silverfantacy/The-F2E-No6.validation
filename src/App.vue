<template>
  <div id="app">
    <HeaderBar/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style lang="scss" src="./assets/style/main.scss">
</style>
