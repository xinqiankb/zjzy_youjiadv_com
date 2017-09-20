<template>
	<div class="hb-headrtips" id="hb-headrtips">
     <div class="nowplace">当前位置：<span class="placedetail">{{nowplacefirst}} <span v-show="nowplacesecond !== ''">&nbsp;></span>&nbsp;{{nowplacesecond}}</span></div>
	</div>
</template>
<style lang="scss">
@import './../assets/css/_common.scss';
#hb-headrtips{
  .nowplace{
    line-height: 50px;
    height: 50px;
    font-size: 14px;
    .placedetail{
      font-size: 14px;
    }
  }
}
</style>
<script>
import { mapState } from 'vuex'
export default{
	name: 'hb-headrtips',
	data() {
		return {
		}
	},
  computed: {
    ...mapState({
      // 当前位置
      nowplacefirst: state => state.nowplacefirst,
      nowplacesecond: state => state.nowplacesecond
    })
  }
}
</script>