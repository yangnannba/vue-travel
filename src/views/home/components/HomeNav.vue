<template>
  <div class="HomeNav">
    <swiper >
      <!-- slides -->
      <swiper-slide v-for="(page,index) in pages" :key="index" class="swiper-slide">
              <div v-for="item in page" class="item" :key="item.id">
                <img :src="item.imgUrl" />
                <p>{{item.desc}}</p>
              </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  props: {
    iconList: {
      type: Array,
      default: function () {
        return []
      }
    }

  },
  data () {
    return {
    }
  },
  computed: {
    pages: function () {
      let pages = [];
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages;
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.HomeNav{
    margin-top:0.4rem;
}
.swiper-slide{

  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .item{
    width: 25%;
    margin-bottom: 0.2rem;
    img{
      width: 50%;
      margin: 0 auto;
    }
    p{
      font-size: 0.5rem;
      line-height: 2em;
      @extend %ellipsis;
      padding: 0 0.4rem;
    }
  }
}
</style>
