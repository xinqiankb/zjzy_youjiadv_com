<template>
	<div class="hb-detaile" id="hb-detaile">
		<div class="banner" :style="'background-image: url('  + imgUrl + dataListInfo.bgimage + ')'"></div>
		<div style="width:1200px;margin: 0 auto">
			<slideBar></slideBar>
			<div class="detail">
				<headertips></headertips>
				<div class="title">{{dataList.title}}</div>
				<div class="release">
					<span class="publisher">发布人：{{ dataList.source }}</span>
					<span>发布时间：{{ dataList.create_at }}</span>
				</div>
				<div v-if="dataList.thumb !== 'backend/web'" class="banner" :style="'display:none;background-image: url('  + imgUrl + dataList.thumb + ')'"></div>
				<div class="content">
					<div v-html="dataList.content"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#hb-detaile {
	text-align: left;
	width: 100%;
	.banner {
		width: 100%;
		height: 300px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 25px;
	}
	.detail {
		width: 900px;
		background: #F7F7F9;
		display: inline-block;
		.title{
			width: 100%;
			height: 20px;
			line-height: 20px;
			text-align: center;
			font-size: 24px;
		}
		.banner {
			width: 100%;
			height: 300px;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			margin-right: 30px;
		}
		.release {
			margin-top: 20px;
			margin-bottom: 20px;
			font-size: 13px;
			color: #767676;
			display: flex;
			justify-content: flex-end;
			padding-right: 40px;
			span {
				display: inline-block;
			}
			.publisher {
				margin-right: 15px;
			}
		}
		.content {
			padding-left: 35px;
			padding-right: 40px;
			padding-bottom: 40px;
		}
	}
}
</style>
<script>
import slideBar from '@/components/slideBar'
import headertips from '@/components/headertips'
export default {
	name: 'detaile',
	data() {
		return {
			dataList: [],
			dataListInfo: {}
		}
	},
	computed: {
		imgUrl() {
			return this.$config.config.imgUrl
		}
	},
	mounted() {
		const para = {
			id: this.$route.query.id
		}
		this.axios.get('/newsdetail', {
			params: para
		}).then(res => {
			console.log(res)
				this.dataList = res.data.data
		}).catch(err => {
				console.log(err)
			})

    let cid = this.$route.query.cid
		this.axios.get('/newslist', {
			params: {id: cid}
		}).then(res => {
				this.dataListInfo = res.data.catagory
		}).catch(err => {
				console.log(err)
			})
	},
	methods: {
		changeSlideBar() {
		}
	},
	components: { slideBar, headertips },
	watch: {
		'this.$route.query.cid': 'changeSlideBar'
	}
}
</script>
