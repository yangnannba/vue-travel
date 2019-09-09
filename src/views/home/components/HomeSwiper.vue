<template>
  <div class="HomeSwiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/6732b10fa1a3b08b883e4aebd2e37f44.jpg_750x200_83dd47e1.jpg" /></swiper-slide>
      <swiper-slide><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/acb2599f8574fcfdb12fdd0dfa71f038.jpg_750x200_4c05039f.jpg" /></swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
      
  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop : true
      }
    }
  }
}
</script>

<style scoped>

</style>
