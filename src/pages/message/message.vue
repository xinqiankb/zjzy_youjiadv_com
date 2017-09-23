<template>
	<div class="hb-address" id="hb-address">
		<div class="backImg" :style="'background-image: url(' + imgUrl + backSrc + ')'"></div>
		<div class="minBox" style="width: 1200px;margin: 0 auto;">
			<slideBar></slideBar>
			<div class="content">
				<headertips></headertips>
				<div class="contentBox">
					<div class="contentHearBox">
						<p>发表留言</p>
					</div>
					<div class="contentBox-box">
						<div class="inputBoxHear">
							<label class="textTiele">姓名：</label>
							<input v-model="newUserInfo.linkman" class="inputCont" type="text">
							<span>*</span>
							<span class="prompt" :bind="namePrompt">{{namePrompt}}</span>
						</div>
						<div class="inputBox">
							<label class="textTiele">所在地区：</label>
							<input v-model="newUserInfo.address" class="inputCont" type="text">
							<span class="prompt" :bind="addressPrompt">{{addressPrompt}}</span>
						</div>
						<div class="inputBox">
							<label class="textTiele">联系电话：</label>
							<input v-model="newUserInfo.linkway" class="inputCont" type="text">
							<span>*</span>
							<span class="prompt" :bing="phonePrompt">{{phonePrompt}}</span>
						</div>
						<div class="inputBox">
							<label class="textTiele">Email：</label>
							<input v-model="newUserInfo.email" class="inputCont" type="text">
							<span class="prompt" :bind="emailPrompt">{{emailPrompt}}</span>
						</div>
						<div class="inputBox">
							<label class="textTielBig">留言：</label>
							<textarea v-model="newUserInfo.content" class="inputContBig" cols="30" rows="10"></textarea>
							<span class="spanH">*</span>
							<p class="pH">（注：标*号为必填栏目）</p>
						</div>
						<div class="btnBox">
							<button class="btn" @click="nameFun">发表</button>
							<div class="wH"></div>
							<button class="btnT">取消</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}

.backImg {
	width: 100%;
	height: 200px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-bottom: 25px;
}

.wH {
	width: 90px;
}

.btnBox {
	display: flex;
	justify-content: center;
	margin-top: 1rem;
}

.btn {
	width: 90px;
	height: 40px;
	background: #0C53AB;
	font-size: 16px;
	color: white;
}

.btnT {
	width: 90px;
	height: 40px;
	background: #E4E4E4;
	font-size: 16px;
}

#hb-address {
	width: 100%;
}

.minBox {
}

.leftNavigation {
	width: 10rem;
	height: 21.5rem;
	text-align: center;
	background: #F6F6F8;
}

.content {
	display: inline-block;
	width:900px !important;
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
		width: 900px;
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
					display: inline-block;
					width: 80px;
					text-align: right;
					font-size: 16px;
					color: black;
				}
				.prompt {
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
				.inputCont {
					border: 1px solid #E8E8E9;
					width: 15rem;
					height: 1.75rem;
					font-size: 16px;
				}
				.textTiele {
					display: inline-block;
					text-align: right;
					font-size: 16px;
					color: black;
					width: 80px;
				}
				.prompt {
					font-size: 16px;
					color: black;
				}
				.pH {
					-webkit-margin-before: 0em;
					-webkit-margin-after: 0em; // margin-top: -6rem;
					margin-left: 24.5rem;
					font-size: 14px;
					color: #C1C1C1;
				}
				.spanH {
					// display: table-cell;
					height: 13rem; // line-height: 13rem;
					margin-top: -13rem;
					margin-left: 36.9rem;
					display: flex;
					align-items: center;
				}
				.textTielBig {
					display: inline-block;
					text-align: right;
					font-size: 16px;
					color: black;
					width: 80px;
					height: 100px;
					vertical-align: top;
				}
				.inputCont {
					border: 1px solid #E8E8E9;
					width: 15rem;
					height: 1.75rem;
				}
				.inputContBig {
					width: 32.25rem;
					height: 13rem;
					border: 1px solid #E8E8E9;
					font-size: 16px;
					resize: none;
				}
			}
		}
	}
}
</style>
<script>
import slideBar from '@/components/slideBar'
import headertips from '@/components/headertips'
export default {
	name: 'address',
	data() {
		return {
			backSrc: '',
			namePrompt: '',
			phonePrompt: '',
			addressPrompt: '',
			emailPrompt: '',
			newUserInfo: {
				address: '',
				linkway: '',
				linkman: '',
				email: '',
				content: ''
			}
		}
	},
	components: {
		slideBar,
		headertips
	},
	watch: {
		'$route.query.id': 'id'
	},
	computed: {
		imgUrl() {
			return this.$config.config.imgUrl
		}
	},
	mounted() {
		this.getBackImg()
	},
	methods: {
		getBackImg() {
			this.axios.get('/newslist', {
				params: {
					id: this.$route.query.id
				}
			})
				.then(res => {
					this.backSrc = res.data.catagory.bgimage
				})
				.catch(err => {
					console.log(err)
				})
		},
		id() {
			this.getDataList()
		},
		nameFun() {
			let res = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/
			if (!res.test(this.newUserInfo.linkman) || this.newUserInfo.linkman.length > 7) {
				this.namePrompt = "请输入2-6个汉字"
			} else {
				this.namePrompt = "姓名正确！"
			}
			let phoneVal = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/
			if (!phoneVal.test(this.newUserInfo.linkway)) {
				this.phonePrompt = "请输入正确手机号"
			} else {
				this.phonePrompt = "手机号正确！"
			}
			let addressVal = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/
			if (!addressVal.test(this.newUserInfo.address) || this.newUserInfo.address.length > 20) {
				this.addressPrompt = "地址不能超过20个字"
			} else {
				this.addressPrompt = "地址正确！"
			}
			let emailVal = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
			if (!emailVal.test(this.newUserInfo.email)) {
				this.emailPrompt = "邮箱格式不正确！"
			} else {
				this.emailPrompt = "邮箱正确！"
			}

			let exp = /草|操|sb|SB/g
			if (exp.test(this.newUserInfo.content)) {
				alert("对不起 你输入的留言里含有敏感词汇！")
			}
			if (!res.test(this.newUserInfo.linkman) || this.newUserInfo.linkman.length > 7 || !phoneVal.test(this.newUserInfo.linkway) || !addressVal.test(this.newUserInfo.address) || this.newUserInfo.address.length > 20 || !emailVal.test(this.newUserInfo.email) || exp.test(this.newUserInfo.content)) {
			} else {
				this.axios.get('addmessage', {
					params: this.newUserInfo
				})
					.then(res => {
						this.backSrc = res.data.catagory.bgimage
						if (res.data.code == 1) {
							alert('發表成功')
						} else {
							alert('發表失敗')
						}
					})
					.catch(function(error) {
						console.log(error)
					});
			}
		}
	}
}
</script>
