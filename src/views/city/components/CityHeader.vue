<template>
  <div class="CityHeader">
    <i class="iconfont icon-zuojiantou" @click="backgoto"></i>城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    backgoto: function () {
      this.$router.push({path: '/home'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.CityHeader{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(70px);
    background: #00bad3;
    color: #fff;
    text-align: center;
    font-size: 0.6rem;
    line-height: px2rem(70px);
        i{
            color: #fff;
            width: px2rem(50px);
            line-height: px2rem(70px);
            text-align: center;
            font-size: 0.8rem;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 0;
        }
}
</style>
