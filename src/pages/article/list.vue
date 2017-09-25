<template>
	<div class="hb-list" id="hb-list">
		<div class="banner" :style="'background-image: url('  + imgUrl + bgImg + ')'"></div>
		<div style="width:1200px;margin: 0 auto">
			<slideBar></slideBar>
			<ul class="list">
				<headertips></headertips>
				<div v-if="dataList.length === 0" class="tic">暂无更多数据</div>
				<li v-else class="content" v-for="(item, index) in dataList" :key="index" @click="to(item.id,item.pid,item.cid)">
					<div class="thumb" :style="'background-image: url('  + imgUrl + item.thumb + ')'"></div>
					<div class="text">
						<div class="top">
							<p class="title">{{ item.title }}</p>
							<p class="date">发布时间: {{ item.create_at }}</p>
						</div>
						<div class="text-content">
							<span>{{ item.remark.slice(0,122) + ' ...' }}</span>
						</div>
						<div class="showmoreBtn">
							<span class="open-all" >【阅读全文】</span>
						</div>
					</div>
				</li>
				<li class="block">
					<el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="limit" layout="total, prev, pager, next" :total="total">
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
			currentPage: 1,
			total: 0
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
			}).then(res => {
				this.dataList = res.data.data
				this.bgImg = res.data.catagory.bgimage
				this.total = res.data.count
        document.body.scrollTop = 0

			}).catch(err => {
				console.log(err)
			})
		},
		handleCurrentChange(val) {
			this.currentPage = val
			this.getDataList()
		},
		to(id,pid,cid) {
			this.$router.push({path: '/detail', query:{id: id, pid: pid, cid: cid}})
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
		height: 300px;
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
			position: relative;
			list-style: none;
			overflow: hidden;
			padding-right: 0px;
			background: #F7F7F9;
			height: 180px;
			margin-top: 25px;
			cursor: pointer;
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
				display: inline-block;
				width: calc(100% - 235px);
				.top {
					font-size: 14px;
					margin-top: 20px;
					.title {
						display: inline-block;
						width: 100%;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
						color: #0F88EB;
					}
					.date {
						display: inline-block;
						float: left;
						margin-top: 5px;
					}
				}
				.text-content {
					margin-top: 5px;
					font-size: 13px;
					line-height: 1.2rem;
					height: 80px;
					overflow: hidden;
					text-indent: 26px;
					float: left;
				}
				.showmoreBtn{
					position: absolute;
					bottom: 10px;
					right: 20px;
				}
				.open-all {
					font-size: 13px;
					color: #F39595;
					cursor: pointer;
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
