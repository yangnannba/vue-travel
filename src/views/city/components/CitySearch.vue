<template>
<div>
  <div class="CitySearch">
    <input type="text" placeholder="请输入城市名或拼音" v-model="keyword" />
  </div>
  <div class="search-list" ref="search" v-show="keyword">
    <ul>
      <li v-for="item in searchlist" :key="item.id" @click="changcity(item.name)">{{item.name}}</li>
      <li v-if="!searchlist.length">没有相符数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data: function () {
    return {
      keyword: ''
    }
  },
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    searchlist: function () {
      if (!this.keyword) {
        return [];
      }
      const result = [];
      for (let i in this.cities) {
        this.cities[i].forEach(item => {
          if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
            result.push(item)
          }
        })
      }
      return result;
    }
  },
  methods: {
    changcity: function (city) {
      this.$store.commit('changcity', city);
      this.$router.push('/home');
    },
    betterscroll: function () {
      this.scroll = new BScroll(this.$refs.search, {
        click: true
      });
    }
  },
  mounted: function () {
    this.betterscroll();
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.CitySearch{

    background: $color;
    padding: 0.2rem;
    input{
        width: 100%;
        height: px2rem(50px);
        line-height:  px2rem(50px);
        text-align: center;
        padding: 0 0.2rem;
        font-size: 0.5rem;
        @extend %borderbox;
        color: #555;
    }
}
.search-list{
  overflow: hidden;
  position: fixed;
  top: 3.4rem;
  right: 0;
  bottom:0;
  left: 0;
  background: #eee;
  z-index: 1;
  li{
    line-height: 2.4em;
    font-size: 0.6rem;
    background: #fff;
    border-bottom: px2rem(1px) solid #cdcdcd;
    text-indent: 0.4rem;
  }
}
</style>
