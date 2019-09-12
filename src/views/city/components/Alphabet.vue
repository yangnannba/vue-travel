<template>
  <div class="Alphabet">
   <ul>
       <li
         v-for="item in keys"
         :key="item"
         @touchstart="touchstart"
         @touchmove.prevent="touchmove"
         @touchend="touchend"
         @click.self="handerletter"
       >
         {{item}}
       </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  data: function () {
    return {
      touch: false
    }
  },
  props: {
    cities: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    keys: function () {
      let keys = [];
      for (let i in this.cities) {
        keys.push(i)
      }
      return keys
    }
  },
  methods: {
    handerletter: function (e) {
      this.$emit('letterchange', e.target.innerText)
    },
    touchstart: function () {
      this.touch = true
    },
    touchmove: function (e) {
      if (this.touch) {
        let y = Math.floor((e.touches[0].clientY - 125) / 20.8);
        if (y >= 0 && y < this.keys.length) {
          this.$emit('letterchange', this.keys[y])
        }
      }
    },
    touchend: function () {
      this.touch = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../common/style/styles.scss';
.Alphabet{
    position: fixed;
    right: 0;
    top: 5rem;
    width: 1rem;
    text-align: center;
    line-height: 1.5em;
    color: $color;
}
</style>
