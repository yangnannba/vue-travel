<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <CityList :hotCities="hotCities" :cities="cities" :letter="letter"></CityList>
    <Alphabet :cities="cities" @letterchange="letterchange"></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import Alphabet from './components/Alphabet'
export default {
  name: 'city',
  data: function () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    letterchange: function (letter) {
      this.letter = letter
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  mounted: function () {
    this.$http.get('./static/api/city.json').then((res) => {
      if (res.data.ret && res.data.data) {
        this.hotCities = res.data.data.hotCities;
        this.cities = res.data.data.cities;
      }
    })
  }
}
</script>

<style>

</style>
