<template>
  <div id="app">
    <div v-show="this.$route.name !== '404'">
      <HbHeader></HbHeader>
        <transition name='home' mode="">
          <router-view style="padding-bottom:220px;overflow-x: auto;margin: 0 auto;"></router-view>
        </transition>
      <HbFooter></HbFooter>
    </div>

    <div v-show="this.$route.name === '404'">
      <Notfound></Notfound>
    </div>
  </div>
</template>

<script>
import HbHeader from '@/components/header'
import HbFooter from '@/components/footer'
import Notfound from '@/components/notfound'
export default {
  name: 'app',
  components: {HbHeader, HbFooter, Notfound},
  data() {
    return{

    }
  },
  mounted: {
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
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
