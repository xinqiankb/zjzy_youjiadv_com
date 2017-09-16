<template>
	<div class="hb-footer" id="hb-footer">
		<div class="footer">
			<div class="logo"></div>
			<div class="fl">
				<p>主办：浙江省整形美容行业协会</p>
				<p>维护：中国整形美容协会信息部</p>
				<p class="police">浙ICP备14047909号-1
					<i></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京公网安倍110102000889</p>
			</div>
			<div class="ct">
				<p>邮编：100029 传真：010-84280990</p>
				<p>邮箱：zjzxxh@capa.org.cn</p>
				<p>地址：浙江省宁波市海曙区翠柏路117号</p>
			</div>
			<div class="fr">
				<div class="sina">
					<div class="qrcode"></div>
					<div>新浪微博</div>
				</div>
				<div class="wechat">
					<div class="qrcode"></div>
					<div>微信公众号</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import './../assets/css/_common.scss';
#hb-footer {
	position: absolute;
	bottom: 0;
	height: 180px;
	width: 100%;
	text-align: left;
	width: 1200px;
	left: 50%;
	margin-left: -600px;
	.footer {
		width: 100%;
		display: flex;
		align-items: center;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-top: 1px solid #CCC;
		.logo {
			width: 80px;
			height: 80px;
			background-image: url('../assets/image/logo.png');
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			margin-right: 30px;
		}
		.fl {
			border-left: 1px solid #ccc;
			padding-left: 1.5rem;
			margin-left: 1rem;
			line-height: 1.5rem;
			font-size: 13px;
			position: relative;
			.police {
				position: relative;
				i {
					display: inline-block;
					width: 15px;
					height: 15px;
					background-image: url('../assets/image/police.png');
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					position: absolute;
					top: 4px
				}
			}
		}
		.ct {
			border-left: 1px solid #ccc;
			padding-left: 1.5rem;
			margin-left: 5rem;
			line-height: 1.5rem;
			font-size: 13px;
		}
		.fr {
			position: absolute;
			right: 0;
			.sina {
				display: inline-block;
				margin-right: 1rem;
				font-size: 14px;
				.qrcode {
					width: 65px;
					height: 65px;
					background-image: url('../assets/image/qrcode.png');
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					margin-right: 30px;
					margin: 0 auto;
					margin-bottom: 10px;
				}
			}
			.wechat {
				display: inline-block;
				font-size: 14px;
				.qrcode {
					width: 65px;
					height: 65px;
					background-image: url('../assets/image/qrcode.png');
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					margin-right: 30px;
					margin: 0 auto;
					margin-bottom: 10px;
				}
			}
		}
	}
}
</style>
<script>
export default {
	name: 'hb-footer',
	data() {
		return {

		}
	}
}
</script>