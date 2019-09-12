<template>
<div>
  <div class="banner" @click="handleBannerClick">
      <img class="bannerImg" :src="details.bannerImg" />
      <div class="banner-content">
          <p class="banner-desc">{{details.sightName}}</p>
          <div class="banner-length" v-if="details.gallaryImgs" ><i class="iconfont icon-tupian"></i> {{details.gallaryImgs.length}}</div>
      </div>
  </div>
  <fade-animation>
    <MySwiper :swiperImgs="details.gallaryImgs" @handlswiperClick="myclose" v-if="show"></MySwiper>
  </fade-animation>
 </div>
</template>

<script>
import MySwiper from '../../../common/myswiper/myswiper'
import fadeAnimation from '../../../common/fadeAnimation/fadeAnimation'
export default {
  name: 'banner',
  props: {
    details: {
      type: Object,
      default: function () {
        return {}
      }
    }

  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    myclose: function () {
      this.show = false;
    },
    handleBannerClick: function () {
      this.show = true;
    }

  },
  components: {
    MySwiper,
    fadeAnimation
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.banner{
    position: relative;
    .back{
        position: absolute;
        top: 1rem;
        left: 1rem;
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
    .banner-content{
        position: absolute;
        bottom:0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
        background: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
        .banner-desc{
            font-size: 0.5rem;
            line-height: 2em;
            text-indent: 0.4rem;
        }
        .banner-length{
            background: #000;
            color: #fff;
            padding: 0 1rem;
            font-size: 0.4rem;
            line-height: 1.8em;
            align-self:  flex-start;
            @include radius(1rem);
            i{
                font-size: 0.5rem;
                vertical-align: top;
            }
        }
    }
}
</style>
