<template>
	<div class="hb-address" id="hb-address">
    <div class="backG" :style="'background-image: url(' + imgUrl + backSrc + ')'"></div>
	  <div class="minBox" style="width: 1200px;margin: 0 auto;">	
		<slideBar></slideBar>
		<div class="content">
			<headertips></headertips>
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
			      <div id="mapP" class="mapB"></div>
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
	.backG {
	width: 100%;
	height: 200px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-bottom: 25px;
}
	#hb-address {
		width: 1200px;
	}
  .anchorBL {
    display: none !important;
  }
  .BMap_cpyCtrl {
    display: none !important;
  }
  .Bmap_nopront {
    display: none !important;
  }
  .mapB {
     width: 100%;
     height: 20rem;
     overflow: hidden;
		 margin-top: 2rem;
  }
	.minBox {
		display: -webkit-box;
    margin-top: 2rem;
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
        display: flex;
        align-items: center;
	       }
		  .contentBox {
              height: 43rem;
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
import slideBar from '@/components/slideBar'
import headertips from '@/components/headertips'
// import map from '@/components/map.vue'
export default{
	// components: {
	// 	map
	// },
	name:'address',
	data() {
		return {
			backSrc: ''
		}
	},
  components: {
    slideBar,
    headertips
	},
	computed: {
    imgUrl() {
			return this.$config.config.imgUrl
		}
	},
  mounted() {
    // 百度地图API功能
            // 创建Map实例
            var map = new BMap.Map("mapP");
						var point = new BMap.Point(121.555572,29.815439);
						map.centerAndZoom(point,12);
						var marker = new BMap.Marker(point);
						map.addOverlay(marker);
						

						function myFun(result) {
							var cityName = result.name;
							map.setCenter(cityName);
						}
				 var myCity = new BMap.localCity();
				 myCity.get(myFun); 
				 this.getBackImg()
	},
	watch: {
		'$route.query.id': 'id'
	},
	methods: {
		getBackImg (){
			this.axios.get('/newslist', {
				params: {
					id: 106
				}
			})
				.then(res => {
					console.log(res)
					this.backSrc = res.data.catagory.bgimage
				})
				.catch(err => {
					console.log(err)
				})
		},
		id () {
        this.getBackImg()
		}
	}
}
  </script>