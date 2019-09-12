<template>
  <div class="WeekendList">
<h1 class="title">周末去哪儿</h1>
<ul class="item-wrapper">
    <li v-for="item in weekendList" :key="item.id" class="weekendList-item">
              <img class="myimg" :src="item.imgUrl" />
              <div class="item-content">
                  <h2>{{item.title}}</h2>
                  <p>{{item.desc}}</p>
              </div>
    </li>
</ul>

  </div>
</template>

<script>

export default {
  name: 'WeekendList',
  props: {
    weekendList: Array
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
.weekendList-item{
    @include boxshodow(0.1rem 0.1rem 0.2rem rgba(0,0,0,0.2));
    margin-bottom: 0.5rem;
    @include radius(0.2rem);
    .myimg{
       @include radius(0.2rem 0.2rem 0 0);
    }
    .item-content{
        padding: 0.4rem;
        h2{
            font-size: 0.6rem;
        }
        p{
            font-size: 0.5rem;
            color: #a2a1a1;

        }
    }
}
</style>
