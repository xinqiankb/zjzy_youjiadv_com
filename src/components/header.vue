<template>
	<div class="hb-header" id="hb-header">
		<div class="toptips">
		  <div>
				<div class="left">
					<div class="nowtime">今天是{{nowtime}}&nbsp;&nbsp;|&nbsp;星期{{weekday}}</div>
				</div>
				<div class="right">
					<span style="text-decoration:none;color:#333">联系电话:{{webinfo.phone}}</span>
					<a href="https://m.idouka.cn/code.shtml" class="checkingEnter">防伪查询入口<span>></span></a>
				</div>
		  </div>
		</div>

		<div class="titleimg">
		  <img src="./../assets/image/topimg.jpg" alt="">
		</div>
		  <!-- 导航 -->
		<div class="nav">
		  <div class="box">
		  	<router-link  class="navlist" :to="{path: '/'}" :style="(activeIndex === 0 || Number(activeIndex) === 0 )?'background-color:#1b4195;color: #fff':''" @click.native="doActiveNav(0,0,0,0)">首页</router-link>

				<router-link v-for="(item,index) in menu" :to="{path: item.path, query:{id: item.id}}" class="navlist" :style="(activeIndex === item.id || Number(activeIndex) === item.id)?'background-color:#1b4195;color: #fff':''" :key="index" @click.native="doActiveNav(index+1,item.id,item.name,item.pid)">
					{{item.name}}
				</router-link>
		  </div>
		</div>
	</div>
</template>

<style lang="scss">
@import './../assets/css/_common.scss';
	#hb-header{
    // @include Topfixed(0,0);
    height: auto;
    width: 100%;
    font-size: 16px;
    .toptips{
    	width: 100%;
    	min-width: 800px;
    	height: 2.5rem;
			display: inline-flex;
    	background-color: #f7f7f7;
			align-items: center;
    	& > div{
    		max-width: 1200px;
				width: 1200px;
    		margin: 0 auto;
	    	.left{
	        display: inline-block;
	        width: 49%;
	        text-align: left;
	    	}
	    	.right{
	        display: inline-flex;
	        width: 49%;
	        text-align: right;
					justify-content: flex-end;
					.checkingEnter{
						display:inline-flex;
						align-items: center;
						justify-content: center;
						margin: 0 10px;
						padding: 0 10px;
						font-size: 12px;
						height: 25px;
						border-radius:5px;
						background-color: rgb(27, 65, 149);
						color: #fff;
						& > span{
							display: inline-flex;
							justify-content: center;
							align-items: center;
							width: 15px;
							height: 15px;
							border-radius: 50%;
							color: #333;
							font-weight: bold;
							background-color: #fff;
							text-align: center;
							margin-left: 10px;
						}
					}
	    	}
    	}
    }
    .titleimg{
    	max-width: 1200px;
    	width: 1200px;
    	margin: 0 auto;
    	text-align: center;
    	&> img{
    		width: 100%;
    	}
    }
    .nav{
    	.box{
    		height: 100px;
    		line-height: 100px;
    		max-width: 1200px;
    		width: 1200px;
    		margin: 0 auto;
    		.navlist{
    			display: table-cell;
    			width: 1%;
    			text-align: center;
    		}
    	}
    }
	}
</style>
<script>
import { mapState } from 'vuex'
export default {
	name:'hb-header',
	data() {
		return {
			nowtime: '',
			weekday: '',
			tempweeknd: ['日','一','二','三','四','五','六'],
			webinfo: {}
			// menu: [
   //      {
   //      	name: '首页',
   //      	path: '/'
   //      }, {
   //      	name: '协会信息',
   //      	path: '/list/1'
   //      }, {
   //      	name: '工作动态',
   //      	path: '/home'
   //      }, {
   //      	name: '学术活动',
   //      	path: '/home'
   //      }, {
   //      	name: '行业论坛',
   //      	path: '/list/4'
   //      }, {
   //      	name: '二级机构',
   //      	path: '/home'
   //      }, {
   //      	name: '会员服务',
   //      	path: '/home'
   //      }, {
   //      	name: '会员介绍',
   //      	path: '/home'
   //      }
			// ]
		}
	},
	mounted() {
    // 时间显示
    let that = this
    let time = new Date()
    let weekend = time.getDay()
    that.weekday = that.tempweeknd[weekend]
    this.getNowTime()
    this.$store.dispatch('get_menulist')
    this.getBaseInfo()
    console.log(sessionStorage.getItem('activeIndex'))
	},
  computed: {
    ...mapState({
    	// 导航激活状态i
			activeIndex: state => state.activeIndex,
    	// 一级导航栏
    	menu: state => state.menuList
    })
  },
	methods: {
		getNowTime() {
			let that = this
			setInterval(function(){
				let time = new Date();
				let fmt = 'yyyy-MM-dd hh:mm:ss'
			     var o = {
			        "M+" : time.getMonth()+1,                 //月份
			        "d+" : time.getDate(),                    //日
			        "h+" : time.getHours(),                   //小时
			        "m+" : time.getMinutes(),                 //分
			        "s+" : time.getSeconds(),                 //秒
			        "q+" : Math.floor((time.getMonth()+3)/3), //季度
			        "S"  : time.getMilliseconds()             //毫秒
			    };
			    if(/(y+)/.test(fmt)) {
			            fmt=fmt.replace(RegExp.$1, (time.getFullYear()+"").substr(4 - RegExp.$1.length));
			    }
			    for(var k in o) {
			      if(new RegExp("("+ k +")").test(fmt)){
			          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
			        }
			    }
			  that.nowtime = fmt
			}, 1000)
		},
		// 激活导航
		doActiveNav(index,id,name,pid) {
			sessionStorage.setItem('activeIndex', id)
			sessionStorage.setItem('parentsId', id)
			sessionStorage.setItem('chilactiveIndex', pid)
			sessionStorage.setItem('parentsname', name)
			sessionStorage.setItem('nowplacefirst', name)
			sessionStorage.setItem('nowplacesecond', '')
		  this.$store.state.activeIndex = id
		  this.$store.state.parentsId = id
		  this.$store.state.parentsname = name
		  this.$store.state.nowplacefirst = name
		  this.$store.state.childrenIndex = pid
		  this.$store.state.nowplacesecond = ''
			if(id > 0){
				this.$store.dispatch('get_childrenMenu', id)
			}
			sessionStorage.setItem('parentsId', id)
		},
		getBaseInfo() {
			// 获取基本信息
	      let that = this
				this.axios.get('/footer')
				.then(res => {
					that.webinfo = res.data.data
				}).catch(res => {
	        console.log(res)
				})
		},
		changeSlideBar() {
			let pid = this.$route.query.pid
			let id = this.$route.query.id
			let tempid = 0
			if (pid && id) {
				tempid = pid
			} else if (id) {
				tempid = id
			}
			this.$store.state.activeIndex = tempid
			this.$store.dispatch('get_childrenMenu', pid)
			sessionStorage.setItem('activeIndex', tempid)
			this.$store.dispatch('getPlaceName', pid)
		},
		changeSlideBars() {
			let cid = this.$route.query.cid
			let id = this.$route.query.id
			if (!cid) {
				cid = id
			}
			this.$store.state.childrenIndex = cid
			sessionStorage.setItem('childrenIndex', cid)
			this.$store.dispatch('getSlideBarName', cid)
		},
		toTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
	},
	watch: {
		'$route.query.id': 'changeSlideBar',
		'$route.query.cid': 'changeSlideBars',
		'$route': 'toTop',
	}
}
</script>
