<template>
	<div class="hb-headrtips" id="hb-headrtips">
     <div class="nowplace">当前位置：<span class="placedetail">ceshi>ceshi>ceshi</span></div>
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
export default{
	name: 'hb-headrtips',
	data() {
		return {
		}
	}
}
</script>