<template>
  <div class="home">
<home-header></home-header>
<HomeSwiper :swiperList="swiperList"></HomeSwiper>
<HomeNav :iconList="iconList"></HomeNav>
<HomeList :recommendList="recommendList"></HomeList>
<WeekendList :weekendList="weekendList"></WeekendList>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeNav from './components/HomeNav'
import HomeList from './components/HomeList'
import WeekendList from './components/WeekendList'
export default {
  name: 'home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastcity: ''
    }
  },
  methods: {
    gethomeinfo: function () {
      this.$http.get('./static/api/index.json?' + this.$store.state.city).then((res) => {
        this.swiperList = res.data.data.swiperList;
        this.iconList = res.data.data.iconList;
        this.recommendList = res.data.data.recommendList;
        this.weekendList = res.data.data.weekendList;
      })
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeList,
    WeekendList
  },
  mounted: function () {
    this.lastcity = this.$store.state.city
    this.gethomeinfo();
  },
  activated: function () {
    if (this.lastcity !== this.$store.state.city) {
      this.lastcity = this.$store.state.city;
      this.gethomeinfo();
    }
  }
}
</script>

<style scoped>

</style>
