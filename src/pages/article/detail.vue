<template>
	<div class="hb-detaile" id="hb-detaile">
		<div class="detail">
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
</template>

<style lang="scss">
	#hb-detaile{
		text-align: left;
		.detail {
			max-width:1100px;
			background: #F7F7F9;
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
export default{
	name:'detaile',
	data() {
		return {
			
		}
	}
}
</script>