<template>
  <div class="DetailsHeader">
      <div class="back" @click='backgoto' v-if="show"><i class="iconfont icon-zuojiantou"></i></div>
      <div class="header" v-else :style="styleopacity"><i class="iconfont icon-zuojiantou" @click='backgoto'></i>详情介绍</div>

  </div>
</template>

<script>

export default {
  name: 'DetailsHeader',
  data () {
    return {
      show: true,
      styleopacity: {
        opacity: 0
      }
    }
  },
  methods: {
    backgoto: function () {
      this.$router.push({path: '/home'})
    },
    handleScroll: function () {
      // let top=document.documentElement.scrollTop;
      // 特别注意，scrollTop中的每一对 () 都是来自网络的一种取法。已兼容安卓浏览器和UA为苹果的浏览器
      const top = (window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop) || (document.body.scrollTop + document.documentElement.scrollTop) || (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.styleopacity = {
          opacity: opacity
        }
        this.show = false
      } else {
        this.show = true
      }
      console.log(11)
    }

  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.DetailsHeader{
    .back{
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        background: rgba(0,0,0,0.8);
        line-height: 1.4rem;
        @include radius(50%);
        i{
            color: #fff;
            text-align: center;
            display: block;
            font-size: 0.8rem;
        }
    }
    .header{
        position: fixed;
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
}
</style>
