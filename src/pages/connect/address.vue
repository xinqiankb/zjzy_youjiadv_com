<template>
	<div class="hb-address" id="hb-address">
	  <div class="minBox">	
		<div class="leftNavigation">leftNavigation</div>
		<div class="content">
			<div class="titel"><p>当前位置：联系我们 > 电话地图</p></div>
			<div class="contentBox">
				<div class="contentBox-box">
					<div class="textHearBox">
						<span></span>
						<p>服务热线：010-84280990</p>
					</div>
					<div class="textBox">
						<span></span>
						<p>邮箱：zizxxh@capa.org.cn</p>
					</div>
					<div class="textBox">
						<span></span>
						<p>地址：浙江省宁波市鄞州区南部商务区奥克斯大厦</p>
					</div>
					<!-- <map></map> -->
				</div>	
			</div>
		</div>
	   </div>	
	</div>
</template>

<style lang="scss" scoped>
    *{
		margin: 0;
		padding: 0;
	}
	#hb-address {
		width: 1000px;
        margin-top: 1rem;
	}
	.minBox {
		display: flex;
	}
	.leftNavigation {
           width: 10rem;
		   height: 21.5rem;
		   text-align: center;
		   background: #F6F6F8;
	}
	.content {
		margin-left: 1.6rem;
		width: 48.25rem;
		height: 55rem;
		  .titel {
		    font-size: 16px;
		    width: 100%;
		    height: 2.5rem;
	       }
		  .contentBox {
              height: 52.5rem;
		      width: 100%;
              background: #F6F6F8;
			  .contentBox-box {
				//   width: 100%;
				  height: 10rem;
				  margin: 0rem 5rem 0rem 5rem;
				  background: #F6F6F8;
				  .textHearBox {
                     padding-top: 3.25rem;
					 font-size: 16px;
					 color: black;
				  }
				  .textBox {
					  margin-top: 1rem;
					  font-size: 16px;
				  }
			  }

		   }
	}
	
</style>
<script>
// import map from '@/components/map.vue'
export default{
	// components: {
	// 	map
	// },
	name:'address',
	data() {
		return {
			
		}
	}
}
</script>