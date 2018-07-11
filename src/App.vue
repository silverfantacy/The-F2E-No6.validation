<template>
  <div id="app">
    <HeaderBar/>
    <transition name="fade" mode="out-in" appear>
      <router-view :key="$route.fullPath" />
    </transition>
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
