<template>
  <div class="HomeHeader">
    <div class="fanhui"><i class="iconfont icon-zuojiantou"></i></div>
    <div class="myinput"><i class="iconfont icon-BAI-fangdajing"></i><input type="text" placeholder="请输入城市" /></div>
    <div class="dizhi" @click="gotoCity">{{$store.state.city}} <i class="iconfont icon-xiajiantou"></i></div>

  </div>
</template>

<script>
export default {
  name: 'HomeHheader',
  data () {
    return {
    }
  },
  methods: {
    gotoCity: function () {
      this.$router.push({path: '/city'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.HomeHeader{

  width: 100%;
  height: px2rem(70px);
  background: #00bad3;
  display: flex;
  .fanhui{
    i{
      color: #fff;
      width: px2rem(50px);
      line-height: px2rem(70px);
      text-align: center;
      font-size: 0.8rem;
      display: inline-block;
    }

  }
  .myinput{
    flex:1;
    padding: 0.25rem;
    position: relative;
    i{
      position: absolute;
      font-size: 0.8rem;
      top: 0.4rem;
      left: 0.4rem;
      color: #d1d1d1;
    }

    input{
      width: 100%;
      height: 100%;
      @include radius(0.2rem);
      font-size: 0.6rem;
      text-indent: 2em;

    }
  }
  .dizhi{
    color: #fff;
    line-height: px2rem(70px);
    min-width: 0;
    padding-right:0.2rem;
    i{
  font-size: 0.6rem;
    }
  }
}
</style>
