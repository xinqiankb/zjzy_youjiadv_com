<template>
	<div class="hb-sliderbar" id="hb-sliderbar">
		<div class="slidebox">
		  <div class="fatherPath"><span>{{parentsName}}</span></div>
			<ul>
				<router-link v-for="(item,index) in childrenList" :key="index" :to="{path: item.path, query:{id: item.id}}">
					<li  class="list-item" :style="menuActivited === index ? 'background-color: #0c53ab;color:#fff': ''" @click="childrenMenuChange(index,item.id,item.name)">{{item.name}}</li>
				</router-link>
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
        cursor: pointer;
  		}
  	}
  }
}
</style>
<script>
import { mapState} from 'vuex'
export default{
	name: 'hb-sliderbar',
	data() {
		return {
      menuActivited: 0
		}
	},
  computed: {
    ...mapState({
      // 侧边栏一级导航名称
      parentsName: state => state.parentsname,
      // 二级导航列表
      childrenList: state => state.childrenList
    })
  },
  mounted() {
  },
  methods: {
    // 二级导航切换
    childrenMenuChange(index,id,name) {
      let that = this
      this.$store.state.nowplacesecond = name
      sessionStorage.setItem('nowplacesecond', name)
      that.menuActivited = index
    }
  }
}
</script>
