<template>
  <div class="HomeList">
      <h1 class="title">热销推荐</h1>
      <ul class="item-wrapper">
          <router-link :to="{name: 'Details',params:{id:item.id}}" tag="li" v-for="item in recommendList" :key="item.id" class="HomeList-item">
              <div class="item-img">
                  <img :src="item.imgUrl" />
              </div>
              <div class="item-content">
                  <h2>{{item.title}}</h2>
                  <p>{{item.desc}}</p>
                  <div class="btn">查看详情</div>
              </div>
          </router-link>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    recommendList: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
h1.title{
    height: px2rem(60px);
    line-height: px2rem(60px);
    font-weight: normal;
    background: #eee;
    font-size: 0.6rem;
    text-indent:0.3rem;
    margin-bottom: 0.3rem;
}
.item-wrapper{
    padding:0  0.4rem;
}
.HomeList-item{
    display: flex;
    border-bottom: px2rem(1px) solid #eeeeee;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
    overflow: hidden;
    .item-img{
        width: px2rem(132px);
        height: px2rem(132px);
        flex-basis: px2rem(132px);
        margin-right: 0.3rem;
        flex-shrink:0;
        img{
            width: 100%;
            height: 100%;
            @include radius(0.2rem);
        }
    }
    .item-content{
        flex: 1;
        min-width: 0;
        h2{
            font-size: 0.6rem;
            font-weight: normal;
            line-height: 2em;
            @extend %ellipsis;
        }
        p{
            font-size: 0.5rem;
            color: #a2a1a1;
             line-height: 2em;
                         @extend %ellipsis;
                         width: 100%;
        }
        .btn{
            font-size: 0.5rem;
            color:#fff;
            background: $color;
            display: inline-block;
            padding: 0.2rem;
            @include radius(0.2rem);
        }
    }

}
</style>
