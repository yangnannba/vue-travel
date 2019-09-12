<template>
  <div class="categoryList">
      <ul class="item-content">
          <li v-for="(item,index) in categoryList" :key="index" class="item">
              <div class="item-title"><i class="iconfont icon-xiangmu"></i> {{item.title}}</div>
              <categoryList1 v-if="item.children" :categoryList="item.children" class="item-children"></categoryList1>

          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'categoryList1',
  props: {
    categoryList: {
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

.item{

    .item-title{
        font-size: 0.6rem;
        line-height: px2rem(60px);
        border-bottom: px2rem(1px) solid #ccc;

        i{
            font-size:0.6rem;
            color: $color;
        }
    }
    .item-children{
        padding-left:0.4rem;
    }

}
</style>
