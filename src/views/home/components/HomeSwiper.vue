<template>
  <div class="HomeSwiper">
    <swiper :options="swiperOption" v-if="swiperList.length>0">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      dafault: function () {
        return [];
      }
    }

  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true

      }
    }
  }
}
</script>

<style scoped>

</style>
