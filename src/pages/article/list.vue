<template>
	<div class="hb-list" id="hb-list">
		<ul class="list">
			<li class="content" v-for="(item, index) in list" :key="index">
				<div class="thumb"></div>
				<div class="text">
					<div class="top">
						<span class="title">浙江省首届整形美容护理学术交流会在杭州顺利召开</span>
						<span class="date">[2017-09-13]</span>
					</div>
					<div class="text-content">
						<span> {{ item.msg.slice(0,122) + ' ...' }} </span>
						<span class="open-all">【阅读全文】</span>
					</div>
				</div>
			</li>
		</ul>
		<div class="block">
			<el-pagination @current-change="handleCurrentChange" :page-size="limit" layout="total, prev, pager, next" :total="list.length">
			</el-pagination>
		</div>
	</div>
</template>

<style lang="scss">
#hb-list {
	// width:1000px;
	.list {
		// width: 1000px;
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
					line-height: 1.6rem;
					height: 80px;
					overflow: hidden;
					.open-all {
						color: #F39595;
					}
				}
			}
		}
		.content:hover {
			box-shadow: 0 0 20px #ccc;
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
<script>
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
	mounted() {},
	computed: {
		limit() {
			return this.$config.limit
		}
	},
	methods: {
		handleCurrentChange(val) {
			this.currentPage = val
			console.log(this.currentPage)
		}
	}
}
</script>