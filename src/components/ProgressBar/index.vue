<script>
export default {
  name: 'progressBar',
  computed: {
    progressLine() {
      // console.log(this.$route.path)
      switch (this.$route.path) {
        case '/create_account':
          return 'progressBar'
        case '/general_infomation':
          return 'progressBar-1'
        case '/update_profile_picture':
          return 'progressBar-2'
        case '/payment_method':
          return 'progressBar-3'
        case '/congratulations':
          return 'progressBar-3'
        default:
          return 'progressBar'
      }
      // let num = this.$route.path
      // return 'progressBar-' + num
    },
    progressCheck1() {
      if (this.$route.path !== '/create_account') {
        return 'progressPoint-check'
      } else {
        return 'progressPoint-focus'
      }
    },
    progressCheck2() {
      switch (this.$route.path) {
        case '/create_account':
          return 'progressPoint-normal'
        case '/general_infomation':
          return 'progressPoint-focus'
        default:
          return 'progressPoint-check'
      }
    },
    progressCheck3() {
      switch (this.$route.path) {
        case '/create_account':
          return 'progressPoint-normal'
        case '/general_infomation':
          return 'progressPoint-normal'
        case '/update_profile_picture':
          return 'progressPoint-focus'
        default:
          return 'progressPoint-check'
      }
    },
    progressCheck4() {
      switch (this.$route.path) {
        case '/create_account':
          return 'progressPoint-normal'
        case '/general_infomation':
          return 'progressPoint-normal'
        case '/update_profile_picture':
          return 'progressPoint-normal'
        case '/payment_method':
          return 'progressPoint-focus'
        default:
          return 'progressPoint-check'
      }
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
