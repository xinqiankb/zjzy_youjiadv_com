<template>
	<div class="hb-home" id="hb-home">
	  <div class="block-line">
	  	<div class="zy-news">
	  		<div class="blocktitle">
	  			<span class="titleline"></span>整形资讯<span></span>
	  		</div>
	  		<p class="blockdesc">整形资讯</p>
	  		<div class="newsblock">
	  			<router-link :to="{path: '/list/ss', params: {id: ''}}">
	  				<article class="first" :style="'background:url(' + img + ') no-repeat center center;background-size:cover'">
	  					<p class="articlename"><span>234</span></p>
	  				</article>
	  			</router-link>
	  			<router-link :to="{path: '/list/ss', params: {id: ''}}">
	  				<article class="second" :style="'background:url(' + img1 + ') no-repeat center center;background-size:cover'">
	  					<p class="articlename"><span>234</span></p>
	  				</article>
	  			</router-link>	  			
	  			<router-link :to="{path: '/list/ss', params: {id: ''}}">
	  				<article class="third" :style="'background:url(' + img2 + ') no-repeat center center;background-size:100%'">
	  					<p class="articlename"><span>234</span></p>
	  				</article>
	  			</router-link>
	  		</div>
	  	</div>
	  	<div class="hot-news">
	  		<div class="blocktitle">
	  			<span class="titleline"></span>新闻发布<span></span>
	  		</div>
	  		<p class="desc">新闻发布</p>
	  	</div>
	  </div>
	</div>
</template>

<style lang="scss">
@import './../../assets/css/_common.scss';
	#hb-home{
		font-size: 0;
   .zy-news{
     display: inline-block;
     width: 710px;
     vertical-align: top;
     .newsblock{
     	  & article{
     	  	position: relative;
     	  	display: inline-block;
     	  }
     	  .first{
     	  	width: 350px;
     	  	height: 230px;
     	  }     	  
     	  .second{
     	  	width: 180px;
     	  	height: 230px;
     	  	// float: left
     	  }     	  
     	  .third{
     	  	width: 180px;
     	  	height: 230px;
     	  	// float: left
     	  }
     	  .articlename{
     	  	@include Bottompoab(0,0);
     	  	width: 100%;
     	  	background-color: rgba(0,0,0,0.2);
     	  	padding: 5px 0;
     	  	font-size: 14px;
     	  	color: #fff;
     	  	text-align: center;
     	  }
     }
   }
   .hot-news{
     width: calc(100% - 780px);
     display: inline-block;
     margin-left: 70px;
     vertical-align: top;
   }

   // public part
   .blocktitle{
   		display: inline-flex;
   		align-items: center;
   		font-size: 20px;
   }   
   .blockdesc{
   		display: flex;
   		align-items: center;
   		font-size: 14px;
   }
   .titleline{
   	display: inline-block;
   	width: 30px;
   	height: 3px;
   	background-color: #333;
   	margin-right: 5px;
   }
	}
</style>
<script>
import img from '@/assets/image/home/images/001_08.jpg'
import img1 from '@/assets/image/home/images/001_10.jpg'
import img2 from '@/assets/image/home/images/001_05.jpg'
export default{
	name:'home',
	data() {
		return {
			img: img,
			img1: img1,
			img2: img2
		}
	}
}
</script>