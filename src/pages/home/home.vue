<template>
	<div class="hb-home" id="hb-home">
	<!-- 轮播 -->
		<div class="swipe">
			<div class="swipe-item">
				<div class="img">
					<img style="width:100%" src="./../../assets/image/home/images/001_02.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="container">
		  <div class="block-line">
		  	<div class="zy-news">
		  		<div class="blocktitle">
		  			<span class="titleline"></span>整形资讯<span></span>
		  		</div>
		  		<div class="readmore">
		  		  <router-link :to="{path: '/list/ss', params: {id: ''}}">more></router-link>
		  		</div>
		  		<p class="blockdesc">整形资讯</p>
		  		<div class="newsblock">
		  		  <div class="up">
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
			  				<article class="third" :style="'background:url(' + img2 + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>234</span></p>
			  				</article>
			  			</router-link>		  			
		  		  </div>
		  		  <div class="down">
			  			<router-link :to="{path: '/list/ss', params: {id: ''}}">
			  				<article class="fourth" :style="'background:url(' + img3 + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>234</span></p>
			  				</article>
			  			</router-link>		  			
			  			<router-link :to="{path: '/list/ss', params: {id: ''}}">
			  				<article class="fifth" :style="'background:url(' + img4 + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>234</span></p>
			  				</article>
			  			</router-link>
		  		  </div>
		  		</div>
		  	</div>
		  	<div class="hot-news">
		  		<div class="blocktitle">
		  			<span class="titleline"></span>新闻发布<span></span>
		  		</div>
		  		<p class="blockdesc">新闻发布</p>
		  		<div class="recommandpic" :style="'background:url(' + img4 + ') no-repeat center center;background-size:cover'">
		  		  <div class="tips">
		  		  	01
		  		  </div>
		  			<p class="articlename">
		  				sddasdasd
		  			</p>
		  		</div>
		  		<div class="newslist">
		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>
		  		</div>
		  	</div>
		  </div>
    
		  <div class="block-line">
		  	<div class="service">
		  		<div class="blocktitle">
		  			<span class="titleline"></span>整形资讯<span></span>
		  		</div>
		  		<p class="blockdesc">
		  		SERVICE HALL
		  		</p>
		  		<div class="servicebox">
		  		  <div class="line1">
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon3.png" alt="">
			  				<p class="servicedesc">服务指南</p>
			  			</div>		  			
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon1.png" alt="">
			  				<p class="servicedesc">产品查询</p>
			  			</div>		  			
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon5.png" alt="">
			  				<p class="servicedesc">学术交流</p>
			  			</div>		  			
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon8.png" alt="">
			  				<p class="servicedesc">产品查询</p>
			  			</div>		  			
		  		  </div>
		  			<div class="line2">
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon4.png" alt="">
			  				<p class="servicedesc">产品查询</p>
			  			</div>		  			
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon7.png" alt="">
			  				<p class="servicedesc">产品查询</p>
			  			</div>		  			
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon6.png" alt="">
			  				<p class="servicedesc">产品查询</p>
			  			</div>		  			
			  			<div class="serviceEntry">
			  				<img src="./../../assets/image/home/images/icon2.png" alt="">
			  				<p class="servicedesc">产品查询</p>
			  			</div>
		  			</div>
		  		</div>
		  	</div>

		  	<!-- 通知 -->
		  	<div class="impnotice">
		  		<div class="blocktitle">
		  			<span class="titleline"></span>整形资讯<span></span>
		  		</div>
		  		<p class="blockdesc">
		  		IMPORTANT NOTICE
		  		</p>
		  		<div class="content">
		  			<div class="left">
		  				<div class="desc">
		  					<div class="con">
		  						<i class="tips">01</i>
		  						<div class="title">2017年微创医学美容大会征文通知</div>
		  						<p class="description">
		  							测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
		  						</p>
		  					</div>
		  				</div>
		  				<div class="img" :style="'background:url(' + img1 + ') no-repeat center center;background-size:cover'"></div>
		  			</div>

		  			<div class="right">
		  				<div class="img" :style="'background:url(' + img3 + ') no-repeat center center;background-size:cover'"></div>
		  				<div class="desc">
		  					<div class="con">
		  						<i class="tips">02</i>
		  						<p class="description">
		  							测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
		  						</p>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div class="readmore">
		  		  <router-link :to="{path: '/list/ss', params: {id: ''}}">more></router-link>
		  		</div>
		  	</div>

		  </div>

		  <!-- 会员风采 -->
		  <div class="block-line">
			  	<div class="memberlist">
			  	  <div class="left">
				  		<div class="blocktitle">
				  			<span class="titleline"></span>会员风采<span></span>
				  		</div>
				  		<p class="blockdesc">
				  		MEMBER STYLE
				  		</p>
				  		<div class="main">
		            <div class="list">
		            	<img src="./../../assets/image/home/images/001_19.jpg" alt="">
		            </div>            
		            <div class="list">
		            	<img src="./../../assets/image/home/images/001_19.jpg" alt="">
		            </div>            
		            <div class="list">
		            	<img src="./../../assets/image/home/images/001_19.jpg" alt="">
		            </div>            
		            <div class="list">
		            	<img src="./../../assets/image/home/images/001_19.jpg" alt="">
		            </div>		            
		            <div class="list">
		            	<img src="./../../assets/image/home/images/001_19.jpg" alt="">
		            </div>
				  		</div>
			  	  </div>
	          
	          <div class="center">
				  		<div class="blocktitle">
				  			<span class="titleline"></span>继续教育<span></span>
				  		</div>
				  		<p class="blockdesc">
				  		CONTINUING EDUCATION
				  		</p>  
					  		<div class="recommandpic" :style="'background:url(' + img4 + ') no-repeat center center;background-size:cover'">
					  		  <div class="tips">
					  		  	01
					  		  </div>
					  			<p class="articlename">
					  				sddasdasd
					  			</p>
					  		</div>
					  		<div class="newslist">
					  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>		  			<p><span class="id">02</span><span class="title">ceshiceshdfgdfgdfgdfgdfgdfgdfgdfgfdgdfgiceshi</span><span class="createtime">2017-09-18 14:00</span></p>
					  		</div>        	
	          </div>
 
            <div class="right">
				  		<div class="blocktitle">
				  			<span class="titleline"></span>法律法规<span></span>
				  		</div>
				  		<p class="blockdesc">
				  		LAWS AND REGULATIONS
				  		</p> 

				  		<div class="regulalists">
                <ul class="list">
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                	<li>关于印发干细胞剂量质量控制及临床前研究的报告xxxxxxx</li>
                </ul>
				  		</div>
				  	</div>
			  	</div>
		  </div>

		  <!-- 专家栏 -->
		  <div class="block-line">
			  <div class="expertList">
					<div class="blocktitle">
					  <span class="titleline"></span>专家栏<span></span>
					</div>
					<p class="blockdesc">
					  EXPERT COLUMN
					</p> 
			  	<div class="main">
			  		<div class="page">
			  			<button class="pagebtn pre" :style="regularlistIndex === 0 ? 'background-color:#e7e7e7;':'background-color:#0c53ab'"><</button>
			  			<button class="pagebtn next">></button>
			  			<button class="pagebtn more">···</button>
			  		</div>

			  		<div class="list">
				  		<div class="list-group" style="width:100%;overflow-x:hidden">
				  			<div class="group-item" style="width:1708px">
					  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
					  			</div>					  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
					  			</div>					  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
					  			</div>			  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
					  			</div>			  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
					  			</div>			  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
					  			</div>			  			<div class="expert-item">
					  				<div class="img">
					  					<img src="./../../assets/image/home/images/001_27.jpg" alt="">
					  				</div>
					  				<div class="info">
					  					<div class="name"><span>ceshi</span><span class="knowmore">详情</span></div>
					  					<div class="ranks"><span>职称:</span>整形主任医师</div>
					  				</div>
				  			</div>
				  		</div>
			  			</div>
			  		</div>
			  	</div>
			  </div>
		  </div>

		  <!-- 友情链接 -->
		  <div class="block-line">
				<div class="blocktitle">
				  <span class="titleline"></span>友情链接<span></span>
				</div>
				<p class="blockdesc">
				  FRIENDSHIP LINK
				</p>  
		  	<div class="friendLink">
			  	<div class="main">
			  		<div class="page">
			  			<button class="pagebtn pre" :style="friendlistIndex === 0 ? 'background-color:#e7e7e7;':'background-color:#0c53ab'"><</button>
			  			<button class="pagebtn next">></button>
			  		</div>

			  		<div class="list">
			  		  <div class="list-group" style="width:100%;overflow-x:hidden">
			  		    <div class="group-item" style="width: 1955.8px">
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
					  			<div class="item-list"><img src="./../../assets/image/home/images/001_30.jpg" alt=""></div>
				  			</div>
				  		</div>
			  		</div>
			  	</div>		  		
		  	</div>
		  </div>
		</div>
	</div>
</template>

<style lang="scss">
@import './../../assets/css/_common.scss';
	#hb-home{
		font-size: 0;
    
		.container{
				max-width:1200px;
				width:1200px;
				overflow-x: auto;
				margin: 0 auto;
				.block-line{
				  padding-top: 30px;
					padding-bottom: 39px;
					border-bottom: 2px solid #0c53ab;
				}
		   .zy-news{
		   	 position: relative;
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
		     	  .fourth{
		     	  	width: 180px;
		     	  	height: 176px;
		     	  	// float: left
		     	  }		     	  
		     	  .fifth{
		     	  	width: 530px;
		     	  	height: 176px;
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
		     	.articlename{
		     	  @include Bottompoab(0,0);
		     	  width: 100%;
		     	  background-color: rgba(0,0,0,0.2);
		     	  padding: 5px 0;
		     	  font-size: 14px;
		     	  color: #fff;
		     	  text-align: center;
		     	}
		     	.tips{
		     		position: absolute;
		     		left: 0;
		     		top: 0;
		     		width: 30px;
		     		height: 30px;
		     		line-height: 30px;
		     		text-align: center;
		     		color: #fff;
		     		background-color: #0c53ab;
		     	}
		     .recommandpic{
			     	position: relative;
			     	width: 100%;
			     	height: 150px;
			     	font-size: 14px;
		     }
		   }
		     .newslist{
		     	height: 256px;
		     	overflow: hidden;
		     	font-size: 14px;
		     	& p {
		     		height: 32px;
		     		// line-height: 32px;al
		     		width: 100%;
		     		display: flex;
		     		align-items: center;
		     		border-bottom: 1px dotted #888;
		     		box-sizing: border-box;
		     		cursor: pointer;
		     		span{
		     			display: inline-block;
		     		}
		     		.id{
		     			width: 20px;
		     			margin-right: 10px;
		     		}
		     		.id:nth-of-type(1){
		     			color: #0c53ab;
		     		}
		     		.title{
              width: calc(100% - 190px);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
		     		}
		     		.createtime{
		     			width: 150px;
		     			text-align: right;
		     		}
		     	}
		     }

		   .service{
		   	display: inline-block;
		   	font-size: 14px;
		   	width: 410px;
         .servicebox{
         	  width: 100%;
         	  margin-top: 40px;
         	  padding-bottom: 17px;
         	  .line1{
         	  	margin: 30px 0;
         	  }
         	  .line2{
         	  	margin-top: 50px;
         	  }
         	  .serviceEntry{
         	  	display: inline-block;
              width: 85px;
              margin: 0 5px;
              text-align: center;
              img{

              }
              .servicedesc{
              	height: 50px;
              	line-height: 50px;
              	text-align: center;
              }
         	  }
         }
		   }

		  .impnotice{
		   	display: inline-block;
		   	margin-left: 100px;
		   	width: 650px;
		   	float: right;
		   	position: relative;
		   	.content {
		   		width: 100%;
		   	  height: 330px;
		   	  .left{
		   	  	width: 440px;
		   	  	height: 100%;
		   	  	display: inline-block;
		   	  	vertical-align: top;
		   	  }
		   	  .right{
		   	  	width: 210px;
		   	  	height: 100%;
		   	  	display: inline-block;
		   	  }
		   	  .desc{
		   	  	height: 50%;
		   	  	width: 100%;
		   	  	background-color: #0c53ab;
		   	  	.con{
              padding: 15px;
              overflow: hidden;
              .tips{
              	display: inline-block;
              	font-size: 30px;
              	color: #fff;
              }
              .title{
              	color: #fff;
              	font-size: 14px;
              }
              .description{
              	width: 100%;
                font-size: 14px;
                color: #fff;
                word-break: break-all;
                line-height: 20px;
              }
		   	  	}
		   	  }
		   	  .img{
		   	  	width: 100%;
		   	  	height: 50%;
		   	  }
		   	}
		  }
     
		  .memberlist{
		  	.left{
	        display: inline-block;
	        width: 290px;
	        .main{
	        	width: 100%;
	        	.list{
	        		width: 100%;
	        		img{
	        			width: 100%;
	        		}
	        	}
	        }
		  	}
		  	.center{
		  		vertical-align: top;
		  		display: inline-block;
		  		margin-left: 100px;
		  		width: 410px;
		     	.articlename{
		     	  @include Bottompoab(0,0);
		     	  width: 100%;
		     	  background-color: rgba(0,0,0,0.2);
		     	  padding: 5px 0;
		     	  font-size: 14px;
		     	  color: #fff;
		     	  text-align: center;
		     	}
		     	.tips{
		     		position: absolute;
		     		left: 0;
		     		top: 0;
		     		width: 30px;
		     		height: 30px;
		     		line-height: 30px;
		     		text-align: center;
		     		color: #fff;
		     		background-color: #0c53ab;
		     	}
		     .recommandpic{
			     	position: relative;
			     	width: 100%;
			     	height: 154px;
			     	font-size: 14px;
		     }
		  	}
		  	.right{
		  		vertical-align: top;
		  		margin-left: 100px;
		  		display: inline-block;
		  		width: calc(100% - 900px);
		  		float: right;
		  		.regulalists{
		  			width: 100%;
		  			.list{
              display: block;
              & li{
              	display: block;
              	height: 41.5px;
              	line-height: 41.5px;
              	font-size: 14px;
              	color: #fff;
              	padding: 0 10px;
              	overflow: hidden;
              	text-overflow: ellipsis;
              	white-space: nowrap;
              	background-color: #bad6ec;
              	margin-bottom: 11px;
              }

              & li:nth-of-type(1){
              	margin-top: 0;
              }              
              & li:last-child{
              	margin-bottom: 0;
              }
		  			}
		  		}
		  	}
		  }

		  .expertList{
		  	.main{
			  	.page{
			  		text-align: right;
			  		margin-bottom: 18px;
		        .pagebtn{
		        	width: 32px;
		        	height: 32px;
		        	line-height: 32px;
		        	text-align: center;
		        	background-color: #0c53ab;
		        	color: #fff;
		        	font-size: 18px;
		        	margin-left: 10px;
		        	border-radius: 5px;
		        	cursor: pointer;
		        }
			  	}
			  	.list{
			  		font-size: 14px;
			  		width: 100%;
			  		.knowmore{
			  			font-size: 14px;
			  			color: #0c53ab;
			  			float: right;
			  			display: inline-block;
			  		}
			  		.expert-item{
			  			display: inline-block;
			  			margin: 0 20px;
			  			margin-bottom: 20px;
			  			width: 204px;
			  			box-shadow: 0px 0px 5px 5px #eee;
			  			cursor: pointer;
			  			.info{
			  				padding: 5px 8px;
			  				.ranks{
			  					margin-top: 5px;
			  				}
			  			}
			  			.img{
			  				width: 100%;
			  				& img{
			  					width: 100%;
			  				}
			  			}
			  		}
			  		.expert-item:first-child{
			  			margin-left: 0;
			  		}			  		
			  		.expert-item:last-child{
			  			margin-right: 0;
			  		}
			  	}
		  	}
		  }

		  .friendLink{
		  	.main{
			  	.page{
			  		text-align: right;
			  		margin-bottom: 18px;
		        .pagebtn{
		        	width: 32px;
		        	height: 32px;
		        	line-height: 32px;
		        	text-align: center;
		        	background-color: #0c53ab;
		        	color: #fff;
		        	font-size: 18px;
		        	margin-left: 10px;
		        	border-radius: 5px;
		        	cursor: pointer;
		        }
			  	}
		      .list{
		       .item-list{
		        display: inline-block;
		        width: 180.98px;
		        margin: 0 8px;
		        .img{
		        	width: 100%;
		        	& img{
		        		width: 100%;
		        	}
		        }
		      }
		      .item-list:first-child{
		       margin-left: 0;
		      }
		      .item-list:last-child{
		       margin-right: 0;
		      }
		     }
		  	}
		  }
		}
   //readmore
   .readmore{
   	  position: absolute;
   	  top: 10px;
   	  right: 0;
   	  width: 60px;
   	  height: 25px;
   	  line-height: 25px;
   	  font-size: 14px;
   	  border-radius: 5px;
   	  background-color: #0c53ab;
   	  text-align: center;
   	  cursor: pointer;
   	  display: inline-flex;
   	  align-items: center;
   	  justify-content: center;
   	  & > a{
   	  	color: #fff;
   	  }
   }
   // public part
   .blocktitle{
   		display: inline-flex;
   		align-items: center;
   		font-size: 18px;
   		margin-bottom: 2px;
   }   
   .blockdesc{
   		display: flex;
   		align-items: center;
   		font-size: 13px;
   		margin-bottom: 15px;
   		color: #e5e5e5;
   }
   .titleline{
   	display: inline-block;
   	width: 20px;
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
import img3 from '@/assets/image/home/images/001_11.jpg'
import img4 from '@/assets/image/home/images/001_15.jpg'
export default{
	name:'home',
	data() {
		return {
			img: img,
			img1: img1,
			img2: img2,
			img3: img3,
			img4: img4,
      regularlistIndex: 0, // 专家栏当前页数
      friendlistIndex: 0, // 友情链接当前页数
		}
	}
}
</script>