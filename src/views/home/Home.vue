<template>
  <div class="home">
<home-header></home-header>
<HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'


export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
