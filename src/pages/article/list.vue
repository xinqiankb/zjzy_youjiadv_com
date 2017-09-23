<template>
	<div class="hb-list" id="hb-list">
		<div class="banner" :style="'background-image: url('  + imgUrl + bgImg + ')'"></div>
		<div style="width:1200px;margin: 0 auto">
			<slideBar></slideBar>
			<ul class="list">
				<headertips></headertips>
				<div v-if="dataList.length === 0" class="tic">暂无更多数据</div>
				<li v-else class="content" v-for="(item, index) in dataList" :key="index">
					<div class="thumb" :style="'background-image: url('  + imgUrl + item.thumb + ')'"></div>
					<div class="text">
						<div class="top">
							<span class="title">{{ item.title }}</span>
							<span class="date">{{ item.create_at }}</span>
						</div>
						<div class="text-content">
							<span>{{ item.remark.slice(0,122) + ' ...' }}</span>
							<span class="open-all" @click="to(item.id)">【阅读全文】</span>
						</div>
					</div>
				</li>
				<li class="block">
					<el-pagination @current-change="handleCurrentChange" :page-size="limit" layout="total, prev, pager, next" :total="dataList.length">
					</el-pagination>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import slideBar from '@/components/slideBar'
import headertips from '@/components/headertips'
export default {
	name: 'list',
	data() {
		return {
			bgImg: '',
			dataList: [],
			currentPage: 1
		}
	},
	mounted() {
		this.getDataList()
	},
	computed: {
		limit() {
			return this.$config.limit
		},
		imgUrl() {
			return this.$config.config.imgUrl
		}
	},
	methods: {
		getDataList() {
			const para = {
				id: this.$route.query.id,
				page: this.currentPage,
				limit: this.limit
			}
			this.axios.get('/newslist', {
				params: para
			})
			.then(res => {
				console.log(res.data.data)
				this.dataList = res.data.data
				this.bgImg = res.data.catagory.bgimage
			})
			.catch(err => {
				console.log(err)
			})
		},
		handleCurrentChange(val) {
			this.currentPage = val
			this.getDataList()
		},
		to(id) {
			this.$router.push('/detail/' + id)
		},
		id() {
			this.getDataList()
		}
	},
	components: { slideBar, headertips },
	watch: {
		'$route.query.id' : 'id'
	}
}
</script>

<style lang="scss">
#hb-list {
	width: 100%;
	.banner {
		width: 100%;
		height: 200px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 25px;
	}
	.tic {
		width:900px;
		display: inline-flex;
		height: 400px;
		align-items: center;
		justify-content: center;
	}
	.list {
		width: 900px;
		display: inline-block;
		.content {
			list-style: none;
			overflow: hidden;
			padding-right: 30px;
			background: #F7F7F9;
			height: 180px;
			margin-top: 25px;
			.thumb {
				width: 180px;
				height: 180px;
				float: left;
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				margin-right: 30px;
			}
			.text {
				text-align: left;
				.top {
					font-size: 14px;
					margin-top: 42px;
					.title {
						color: #0F88EB;
					}
					.date {
						display: inline-block;
						float: right;
					}
				}
				.text-content {
					margin-top: 24px;
					font-size: 13px;
					line-height: 1.2rem;
					height: 80px;
					overflow: hidden;
					.open-all {
						color: #F39595;
						cursor: pointer;
					}
				}
			}
		}
		.content:hover {
			box-shadow: 0 0 20px #ccc;
		}
		.content:nth-of-type(1) {
			margin-top: 0;
		}
	}
	.block {
		overflow: hidden;
		.el-pagination {
			float: right;
			margin-top: 30px;
		}
	}
}
</style>
