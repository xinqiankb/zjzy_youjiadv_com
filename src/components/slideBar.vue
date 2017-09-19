<template>
	<div class="hb-sliderbar" id="hb-sliderbar">
		<div class="slidebox">
		  <div class="fatherPath"><span>协会信息</span></div>
			<ul>
				<li class="list-item" :style="menuActivited === 1 ? 'background-color: #0c53ab;color:#fff': ''">sdfsdf</li>
				<li class="list-item">dddddsdfsdf</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
@import './../assets/css/_common.scss';
#hb-sliderbar{
  display: inline-block;
  width: 200px;
  margin-right: 20px;
  vertical-align: top;
  padding-bottom: 250px;
  background-color: #f7f7f9;
  .slidebox{
  	width: 100%;
  	.fatherPath{
  		
  		font-size: 16px;
  		text-align: center;
  		& span{
  			padding: 20px 40px;
  			display: inline-block;
  		  border-bottom: 2px solid #fff;
  		}
  	}
  	& ul{
  		display: inline-block;
  		width: 100%;
  		margin-top: 20px;
  		& li{
        list-style: none;
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #333;
        font-size: 14px;
  		}
  	}
  }
}
</style>
<script>
export default{
	name: 'hb-sliderbar',
	data() {
		return {
      menuActivited: 1
		}
	}
}
</script>