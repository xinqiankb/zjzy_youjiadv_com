<template>
	<div class="hb-header" id="hb-header">
		<div class="toptips">
		  <div>
				<div class="left">
					<div class="nowtime">今天是{{nowtime}}&nbsp;&nbsp;|&nbsp;星期{{weekday}}</div>
				</div>
				<div class="right">
					<i class="icon icon-phone"></i>
					<span>0574-7331964</span>
				</div>
		  </div>

		  <div class="titleimg">
		  	<img src="./../assets/image/topimg.jpg" alt="">
		  </div>

		  <!-- 导航 -->
		  <div class="nav">
		  	<div class="box">
		  		<a v-for="(item,index) in menu" :href="item.path" class="navlist" :style="activeIndex === index?'background-color:blue':''" :key="index"><span>{{item.name}}</span></a>
		  	</div>
		  </div>
		</div>
	</div>
</template>

<style lang="scss">
@import './../assets/css/_common.scss';
	#hb-header{
    @include Topfixed(0,0);
    height: 250px;
    width: 100%;
    .toptips{
    	width: 100%;
    	height: 2.5rem;
    	line-height: 2.5rem;
    	background-color: #f7f7f7;
    	& > div{
    		max-width: 1100px;
    		margin: 0 auto;
	    	.left{
	        display: inline-block;
	        width: 49%;
	        text-align: left;
	    	}
	    	.right{
	        display: inline-block;
	        width: 49%;
	        text-align: right;	
	    	}
    	}
    }
    .titleimg{
    	max-width: 1100px;
    	text-align: center;
    	&> img{
    		width: 100%;
    	}
    }
    .nav{
    	.box{
    		height: 100px;
    		line-height: 100px;
    		.navlist{
    			display: table-cell;
    			width: 1%;
    		}
    	}
    }
	}
</style>
<script>
export default{
	name:'hb-header',
	data() {
		return {
			nowtime: '',
			weekday: '',
			tempweeknd: ['日','一','二','三','四','五','六'],
			menu: [
        {
        	name: 'ceshi',
        	path: '/home'
        }, {
        	name: 'ceshi',
        	path: '/home'
        }, {
        	name: 'ceshi',
        	path: '/home'
        }
			]
		}
	},
	mounted() {
    // 时间显示
    let that = this
    let time = new Date()
    let weekend = time.getDay()
    that.weekday = that.tempweeknd[weekend]
    this.getNowTime()
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
		}
	}
}
</script>