<template>
	<div class="hb-home" id="hb-home">
	<!-- 轮播 -->
		<div class="swipe" style="width: 100%;min-width: 1200px;height:auto;" scoped="scoped">
		  <el-carousel class="swiperbox" style="">
		    <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
		      <div class="img" :style="'background:url(http://zx.youjiadv.com/'+ item.img+') no-repeat center center;background-size: cover;height:100%'"></div>
		    </el-carousel-item>
		  </el-carousel>
		</div>
		<div class="container">
		  <div class="block-line">
		  	<div class="zy-news">
		  		<div class="blocktitle">
		  			<span class="titleline"></span>{{PlasticInfo.name}}<span></span>
		  		</div>
		  		<div class="readmore">
		  		  <router-link :to="{path: '/list/' + PlasticInfo.id, params: {id: ''}}">more></router-link>
		  		</div>
		  		<p class="blockdesc">{{PlasticInfo.remark}}</p>
		  		<div class="newsblock">
		  		  <div class="up">
			  			<router-link :to="{path: '/detail/' , query: {id: NewsPlastic[0].id}}">
			  				<article class="first" :style="'background:url(http://zx.youjiadv.com/' + NewsPlastic[0].thumb + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>{{NewsPlastic[0].title}}</span></p>
			  				</article>
			  			</router-link>
			  			<router-link :to="{path: '/detail/', query: {id: NewsPlastic[1].id}}">
			  				<article class="second" :style="'background:url(http://zx.youjiadv.com/' + NewsPlastic[1].thumb + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>{{NewsPlastic[1].title}}</span></p>
			  				</article>
			  			</router-link>
			  			<router-link :to="{path: '/detail/' , query: {id: NewsPlastic[2].id}}">
			  				<article class="third" :style="'background:url(http://zx.youjiadv.com/' + NewsPlastic[2].thumb + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>{{NewsPlastic[2].title}}</span></p>
			  				</article>
			  			</router-link>
		  		  </div>
		  		  <div class="down">
			  			<router-link :to="{path: '/detail/' , query: {id: NewsPlastic[3].id}}">
			  				<article class="fourth" :style="'background:url(http://zx.youjiadv.com/' + NewsPlastic[3].thumb + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>{{NewsPlastic[3].title}}</span></p>
			  				</article>
			  			</router-link>
			  			<router-link :to="{path: '/detail/' , query: {id: NewsPlastic[4].id}}">
			  				<article class="fifth" :style="'background:url(http://zx.youjiadv.com/' + NewsPlastic[4].thumb + ') no-repeat center center;background-size:cover'">
			  					<p class="articlename"><span>{{NewsPlastic[4].title}}</span></p>
			  				</article>
			  			</router-link>
		  		  </div>
		  		</div>
		  	</div>
		  	<div class="hot-news">
		  		<div class="blocktitle">
		  			<span class="titleline"></span>{{NewsInfo.name}}<span></span>
		  		</div>
		  		<p class="blockdesc">{{NewsInfo.remark}}</p>
					<router-link :to="{ path: '/detail/' + NewsInfo.id , params: { id: ''}}">
			  		<div class="recommandpic" :style="'background-Image:url(http://zx.youjiadv.com/' + recommandNews.thumb + ');background-repeat: no-repeat;background-postion: center center;background-size:100%;'">
			  		  <div class="tips">
			  		  	01
			  		  </div>
			  			<p class="articlename">
			  				{{recommandNews.title}}
			  			</p>
			  		</div>
					</router-link>
		  		<div class="newslist">
		  			<router-link v-for="(item,index) in NewsList" :key="index" :to="{path: '/detail/' + item.id}"><p ><span class="id">{{item.ids}}</span><span class="title">{{item.title}}</span><span class="createtime">{{item.create_at}}</span></p></router-link>
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
		  			<span class="titleline"></span>{{ImportantInfo.name}}<span></span>
		  		</div>
		  		<p class="blockdesc">
		  		{{ImportantInfo.remark}}
		  		</p>
		  		<div class="content">
						<router-link :to="{ path: '/detail/' + ImportantList[0].id, params: { id: ''}}">
			  			<div class="left">
			  				<div class="desc">
			  					<div class="con">
			  						<i class="tips">01</i>
			  						<div class="title">{{ImportantList[0].title}}</div>
			  						<p class="description">
			  							{{ImportantList[0].remark}}
			  						</p>
			  					</div>
			  				</div>
			  				<div class="img" :style="'background:url(http://zx.youjiadv.com/' + ImportantList[0].thumb + ') no-repeat center center;background-size:contain'"></div>
			  			</div>
						</router-link>

						<router-link :to="{ path: '/detail/' + ImportantList[1].id , params: { id: ''}}">
			  			<div class="right">
			  				<div class="img" :style="'background:url(http://zx.youjiadv.com/' + ImportantList[1].thumb + ') no-repeat center center;background-size:cover'"></div>
			  				<div class="desc">
			  					<div class="con">
			  						<i class="tips">02</i>
			  						<p class="description">
			  							{{ImportantList[1].remark}}
			  						</p>
			  					</div>
			  				</div>
			  			</div>
						</router-link>
		  		</div>
		  		<div class="readmore">
		  		  <router-link :to="{path: '/list/' + ImportantInfo.id, params: {id: ''}}">more></router-link>
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
		            <div class="list" v-for="(item,index) in MemberList" :key="index">
		            	<img :src="'http://zx.youjiadv.com/'+item.img" alt="">
		            </div>
				  		</div>
			  	  </div>

	          <div class="center">
				  		<div class="blocktitle">
				  			<span class="titleline"></span>{{EducationInfo.name}}<span></span>
				  		</div>
				  		<p class="blockdesc">
				  		{{EducationInfo.remark}}
				  		</p>
				  		<router-link :to="{path: '/detail/' + recommandEducation.id}">
					  		<div class="recommandpic" :style="'background:url(http://zx.youjiadv.com/' + recommandEducation.thumb + ') no-repeat center center;background-size:cover'">
					  		  <div class="tips">
					  		  	01
					  		  </div>
					  			<p class="articlename">
					  				{{recommandEducation.remark}}
					  			</p>
					  		</div>
					  	</router-link>
					  		<div class="newslist">
					  		<router-link v-for="(item,index) in EducationList" :to="{path: '/detail/' + item.id, params: {id: ''}}" :key="index">
					  			  <p><span class="id">{{item.ids}}</span><span class="title">{{item.title}}</span><span class="createtime">{{item.create_at}}</span></p>
					  		</router-link>
					  		</div>
	          </div>

            <div class="right">
				  		<div class="blocktitle">
				  			<span class="titleline"></span>{{RegularInfo.name}}<span></span>
				  		</div>
				  		<p class="blockdesc">
				  		{{RegularInfo.remark}}
				  		</p>

				  		<div class="regulalists">
                <ul class="list">
                	<router-link class="itemlist" v-for="(item,index) in RegularList" :to="{path: '/detail/' + item.id}" :key="index"><li>{{item.title}}</li></router-link>
                </ul>
				  		</div>
				  	</div>
			  	</div>
		  </div>

		  <!-- 专家栏 -->
		  <div class="block-line">
			  <div class="expertList">
					<div class="blocktitle">
					  <span class="titleline"></span>{{ExpertInfo.name}}<span></span>
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
				  			<div class="group-item" :style="'width:' + ((this.ExpertList.length * 244) + 40) + 'px'">
				  			  <router-link class="items" v-for="(item,index) in ExpertList" :to="{path: '/detail/' + item.id}" :key="index">
						  			<div class="expert-item">
						  				<div class="img">
						  					<img :src="'http://zx.youjiadv.com/' + item.thumb" alt="">
						  				</div>
						  				<div class="info">
						  					<div class="name"><span>{{item.title}}</span><span class="knowmore">详情</span></div>
						  					<div class="ranks"><span>职称:</span>{{item.remark}}</div>
						  				</div>
						  			</div>
				  			  </router-link>
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
			  		    <div class="group-item" :style="'width:' + ((Friendcount * 208.8) + 20) + 'px'">
					  			  <div v-for="(item,index) in FriendList" class="item-list"><img :src="'http://zx.youjiadv.com/' + item.img" alt=""></div>
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
		    .swiper{
		      width: 100%;
		      height: 30rem;
		      .swiperbox{
		        width: 100%;
		        height: 100%;
		        .el-carousel{
		          z-index: 2;
		        }
		        .el-carousel__container{
		          height: 100%;
		          width: 100%
		        }
		        .el-carousel__indicators--outside{
		          position: absolute !important;
		          bottom: 50px;
		        }
		      }
		    }
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
              & .itemlist{
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
						.items{
							display: inline-block;
							margin: 0 20px;
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
      // 整形资讯
      NewsPlastic: [],
      recommandPlastic: {},
      PlasticInfo: '',
      // 新闻咨询
      NewsInfo: '',
      recommandNews: {},
      NewsList: [],
      // 重要通知
      ImportantInfo: '',
      ImportantList: [],
      recommandimpo: {},
      // 重要通知
      MemberInfo: '',
      MemberList: [],
      recommandMember: {},
      // 继续教育
      EducationInfo: '',
      EducationList: [],
      recommandEducation: {},
      // 继续教育
      RegularInfo: '',
      RegularList: [],
      recommandRegular: {},
      // 专家栏
      ExpertInfo: '',
      ExpertList: [],
      recommandExpert: {},
      Expertcount: 0,
      // 友情链接
      FriendInfo: '',
      FriendList: [],
      recommandFriend: {},
      Friendcount: 0,
      // bannerlist
      bannerlist: []
		}
	},
	mounted() {
    this.getBanner()
    this.getIndexNews()
    this.getIndexPlastic()
    this.getImportantNotice()
    this.getMemberList()
    this.getEducationList()
    this.getRegularList()
    this.getExpertList()
    this.getFriendList()
	},
	methods: {
		// 获取轮播图
		getBanner() {
      this.axios.get('/carousel')
      .then(res => {
      	this.bannerlist = res.data.data
      }).catch(res => {
      	console.log(res)
      })
		},
		// 新闻发布列表
		getIndexNews() {
			let that = this
			this.axios.get('/indexnews')
			.then(res => {
				let id = 0
				for ( let i in res.data.data) {
					id ++
					res.data.data[i]['ids'] = '0' + id
				}
        that.recommandNews = res.data.data[0]
				let tempdata = res.data.data
        that.NewsInfo = res.data.info
        tempdata.shift()
        that.NewsList = tempdata
			}).catch(res => {
        console.log(res)
			})
		},
		// 整形资讯
		getIndexPlastic() {
      let that = this
			this.axios.get('/indexplastic')
			.then(res => {
				that.PlasticInfo = res.data.info
				that.NewsPlastic = res.data.data
			}).catch(res => {
        console.log(res)
			})
		},
		// 重要通知
		getImportantNotice() {
      let that = this
			this.axios.get('/indexnotice')
			.then(res => {
	      that.ImportantInfo = res.data.info
	      that.ImportantList = res.data.data
			}).catch(res => {
        console.log(res)
			})
		},
		// 会员风采
		getMemberList() {
      let that = this
			this.axios.get('/member')
			.then(res => {
				that.MemberList = res.data.data
				that.MemberInfo = res.data.info
			}).catch(res => {
        console.log(res)
			})
		},
		// 继续教育
		getEducationList() {
      let that = this
      let ids = 1
			this.axios.get('/indexedation')
			.then(res => {
				let tempdata = res.data.data
				for (let i in tempdata) {
					tempdata[i]['ids'] = '0' + (parseInt(i) + 1)
				}
        that.EducationInfo = res.data.info
        tempdata.shift()
        that.EducationList = tempdata
        that.recommandEducation = res.data.data[0]
			}).catch(res => {
        console.log(res)
			})
		},
		// 政策法规
		getRegularList() {
      let that = this
			this.axios.get('/indexlaw')
			.then(res => {
				that.RegularInfo = res.data.info
				that.RegularList = res.data.data
			}).catch(res => {
        console.log(res)
			})
		},
		// 专家栏
		getExpertList() {
      let that = this
			this.axios.get('/indexspecialist')
			.then(res => {
				that.ExpertInfo = res.data.info
				that.ExpertList = res.data.data
				that.Expertcount = res.data.count
			}).catch(res => {
        console.log(res)
			})
		},
		// 友情链接
		getFriendList() {
      let that = this
			this.axios.get('/link')
			.then(res => {
				that.FriendList = res.data.data
				that.Friendcount = res.data.count
			}).catch(res => {
        console.log(res)
			})
		},
	}
}
</script>
