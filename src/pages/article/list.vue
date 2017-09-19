<template>
	<div class="hb-list" id="hb-list">
		<div class="banner"></div>
		<div style="width:1200px;margin: 0 auto">
			<slideBar></slideBar>
			<ul class="list">
			  <headertips></headertips>
				<li class="content" v-for="(item, index) in list" :key="index">
					<div class="thumb"></div>
					<div class="text">
						<div class="top">
							<span class="title">浙江省首届整形美容护理学术交流会在杭州顺利召开</span>
							<span class="date">[2017-09-13]</span>
						</div>
						<div class="text-content">
							<span> {{ item.msg.slice(0,122) + ' ...' }} </span>
							<span class="open-all" @click="to">【阅读全文】</span>
						</div>
					</div>
				</li>
				<li class="block">
				<el-pagination @current-change="handleCurrentChange" :page-size="limit" layout="total, prev, pager, next" :total="list.length">
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
			list: [{
				msg: '浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开'
			}, {
				msg: '浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开'
			}, {
				msg: '浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开'
			}, {
				msg: '浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开'
			}, {
				msg: '浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开'
			}, {
				msg: '浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开'
			}],
			currentPage: 1
		}
	},
	mounted() { },
	computed: {
		limit() {
			return this.$config.limit
		}
	},
	methods: {
		handleCurrentChange(val) {
			this.currentPage = val
			console.log(this.currentPage)
		},
		to() {
			this.$router.push('/detail/1')
		}
	},
	components: {slideBar, headertips}
}
</script>

<style lang="scss">
#hb-list {
	width: 100%;
	.banner {
		width: 100%;
		height: 200px;
		background-image: url('../../assets/image/list.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 25px;
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
				background-image: url('../../assets/image/thumb.jpg');
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
		.content:nth-of-type(1){
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