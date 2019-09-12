<template>
  <div class="myswiper" @click="close">
    <div>
    <swiper :options="swiperOption" v-if="swiperImgs.length>0">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in swiperImgs" :key="index">
        <img :src="item" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myswiper',
  props: {
    swiperImgs: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true

      }
    }
  },
  methods: {
    close: function () {
      this.$emit('handlswiperClick');
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container{
  overflow: inherit;
}
.myswiper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  z-index: 999;
  img{
    width:100%;
  }
  .swiper-pagination{
    color: #fff;
    bottom: -4rem;
  }
}
</style>
