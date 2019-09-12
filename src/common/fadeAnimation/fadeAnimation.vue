<template>
  <div class="fadeAnimation">
    <transition name="fade">
        <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fadeAnimation',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-active,.fade-leave-active{
    transition: all .3s;
}
</style>
