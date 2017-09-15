<template>
	<div class="hb-header" id="hb-header">
		this is a header
	</div>
</template>

<style lang="scss">
@import './../assets/css/_common.scss';
	#hb-header{
    @include Topfixed(0,0);
    height: 250px;
    width: 100%
	}
</style>
<script>
export default{
	name:'hb-header',
	data() {
		return {
			
		}
	}
}
</script>