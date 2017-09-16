<template>
	<div class="hb-address" id="hb-address">
	  <div class="minBox">	
		<div class="leftNavigation">leftNavigation</div>
		<div class="content">
			<div class="titel"><p>当前位置：联系我们 > 意见留言</p></div>
			<div class="contentBox">
				<div class="contentHearBox"><p>发表留言</p></div>
				<div class="contentBox-box">
				    <div class="inputBoxHear">
						<span class="textTiele">姓名：</span>
						<input :model="name" class="inputCont" type="text">
						<span>*</span>
						<span :bind="namePrompt">{{namePrompt}}</span>
					</div>
					<div class="inputBox">
						<span class="textTiele">所在地区：</span>
						<input class="inputCont" type="text">
					</div>
					<div class="inputBox">
						<span class="textTiele">联系电话：</span>
						<input class="inputCont" type="text">
					</div>
					<div class="inputBox">
						<span class="textTiele">Email：</span>
						<input class="inputCont" type="text">
						<span>*</span>
					</div>
					<div class="inputBox">
                        <span class="textTiele">留言：</span>
						<input class="inputContBig" type="text">
					</div>
					<button class="btn" :click="nameFun(name)">sssss</button>
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
	.btn {
		width: 100px;
		height: 50px;
		border: 1px solid red;
		
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
			  .contentHearBox {
				  height: 4rem;
				  margin: 0 2.85rem 0 2.85rem;
                  display: flex;
				  align-items: center;
				  border-bottom: 2px solid #E8E8E9;
				  font-size: 16px;
				  color: black;
			  }
			  .contentBox-box {
				  height: 10rem;
				  margin: 0rem 5rem 0rem 5rem;
				  background: #F6F6F8;
				  .inputBoxHear {
					  margin-top: 1.8rem;
					     .textTiele {
					       font-size: 16px;
					       color: black;
				         }
						 .inputCont {
					       border: 1px solid #E8E8E9;
						   width: 15rem;
						   height: 1.75rem;
						   font-size: 16px;
				         }
				  }
				  .inputBox {
					  margin-top: 1.5rem;
					    .textTiele {
						   flex-direction: row-reverse;
					       font-size: 16px;
					       color: black;
						   text-align: justify;
				         }
						 .inputCont {
					       border: 1px solid #E8E8E9;
						   width: 15rem;
						   height: 1.75rem;
				         }
						 .inputContBig {
							 width: 32.95rem;
							 height: 13rem;
							 border: 1px solid #E8E8E9;
							 font-size: 16px;
						 }
				  }
			  }

		   }
	}
	
</style>
<script>
export default{
	name:'address',
	data() {
		return {
			namePrompt: '',
			name: ''
		}
	},
	methods: {
		nameFun (val) {
		   let res=  /^[\u4E00-\u9FA5]{2,6}$/
		   if(!res.test(val)) {
			   console.log("dasd")
			   this.namePrompt = "请输入2-6个汉字"
		   } else {
			   this.namePrompt = "符合标准！"
		   }
		}
	}	
}
</script>