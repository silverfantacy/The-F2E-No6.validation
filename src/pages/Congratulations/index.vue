<script>
import ProgressBar from '@/components/ProgressBar'
export default {
  name: 'congratulations',
  components: {
    ProgressBar
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: '/create_account' })
    }, 5000)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
