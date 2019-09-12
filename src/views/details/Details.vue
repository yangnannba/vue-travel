<template>
  <div class="Details">
      <banner :details="details"></banner>
      <DetailsHeader></DetailsHeader>
      <categoryList :categoryList="details.categoryList" class="categoryList"></categoryList>
  </div>
</template>

<script>
import banner from './components/banner'
import DetailsHeader from './components/DetailsHeader'
import categoryList from './components/categoryList'

export default {
  name: 'Details',
  data () {
    return {
      details: {}
    }
  },
  components: {
    banner,
    DetailsHeader,
    categoryList
  },
  mounted: function () {
    this.$http.get('./static/api/details.json').then((res) => {
      this.details = res.data.data
    })
  }
}
</script>

<style scoped>
.categoryList{
  padding: 0 0.4rem;
}
</style>
