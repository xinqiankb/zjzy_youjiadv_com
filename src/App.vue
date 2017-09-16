<template>
  <div id="app">
    <HbHeader></HbHeader>
      <transition name='home' mode="">
        <router-view style="padding-bottom:120px;padding-top:250px"></router-view>
      </transition>
    <HbFooter></HbFooter>
  </div>
</template>

<script>
import HbHeader from '@/components/header'
import HbFooter from '@/components/footer'
export default {
  name: 'app',
  components: {HbHeader, HbFooter},
  data() {
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.home-enter-active, .home-leave-active {
    transition: opacity .3s
}
.home-enter, .home-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
</style>
