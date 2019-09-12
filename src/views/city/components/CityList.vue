<template>
  <div class="CityList" ref="citylist">
     <div>
      <div class="area">
          <h2 class="area-title">当前城市</h2>
          <ul>
              <li>{{this.$store.state.city}}</li>
          </ul>
      </div>
      <div class="area">
          <h2 class="area-title">热门城市</h2>
          <ul>
             <li v-for="item in hotCities" :key="item.id" @click="changcity(item.name)">{{item.name}}</li>
          </ul>
      </div>
      <div class="area-list" v-for="(item, key) in cities" :key="key" :ref="key">
          <h2 class="area-title">{{key}}</h2>
          <ul>
              <li v-for="inner in item" :key="inner.id" @click="changcity(inner.name)">{{inner.name}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: {
      type: Array,
      default: function () {
        return [];
      }
    },
    cities: {
      type: Object,
      default: function () {
        return {};
      }
    },
    letter: {
      type: String,
      default: 'A'
    }
  },
  methods: {
    changcity: function (city) {
      this.$store.commit('changcity', city);
      this.$router.push('/home');
    },
    betterscroll: function () {
      this.scroll = new BScroll(this.$refs.citylist, {
        click: true
      });
    }
  },
  watch: {
    letter: function () {
      if (this.letter) {
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  },
  mounted: function () {
    this.betterscroll();
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.area-title{
    font-size: 0.6rem;
    font-weight: normal;
    color:#626262;
    background: #efefef;
    height: px2rem(40px);
    line-height: px2rem(40px);
    border-bottom: px2rem(1px) solid #e4e4e4;
    text-indent:px2rem(16px);
}
.area{
    background: #fff;
    ul{
        display: flex;
        flex-wrap: wrap;
        padding: px2rem(16px) px2rem(54px) 0 px2rem(16px);

        li{
            width: px2rem(170px);
            line-height: px2rem(38px);
            height: px2rem(38px);
            text-align: center;
            border:px2rem(1px) solid #cdcdcd;
            box-sizing: border-box;
            border-radius:0.1rem;
            margin-bottom: px2rem(16px);
            margin-right: 0.4rem;
        }
    }
}
.area-list{
    ul{
        padding-right: px2rem(54px);
        li{
            border-bottom:px2rem(1px) solid #cdcdcd;
            box-sizing: border-box;
            height: px2rem(56px);
            line-height: px2rem(56px);
            text-indent: 0.4rem;
        }
    }
}
.CityList{
    position: fixed;
    top: 3.4rem;
    right: 0;
    bottom: 0;
    left:0;
    z-index: -1;
}
</style>
