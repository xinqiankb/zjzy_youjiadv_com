<template>
	<div class="hb-detaile" id="hb-detaile">
		<div class="banner"></div>
		<div style="width:1200px;margin: 0 auto">
			<slideBar></slideBar>
			<div class="detail">
				<headertips></headertips>
				<div class="banner"></div>
				<div class="release">
					<span class="publisher">发布人：admin</span>
					<span>发布时间：2017-09-13 15:59:08</span>
				</div>
				<div class="content">
					<div>浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开浙江省首届整形美容护理学术交流会在杭州顺利召开</div>
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
		height: 200px;
		background-image: url('../../assets/image/detail.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 25px;
	}
	.detail {
		width: 900px;
		background: #F7F7F9;
		display: inline-block;
		.banner {
			width: 100%;
			height: 300px;
			background-image: url('../../assets/image/banner.png');
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

		}
	},
	components: { slideBar, headertips }
}
</script>