<template>
	<div>
		<ul class="news">
			<li v-if='type==1'>
				<router-link to="">
					<div class="left">
						<h4>助学资金项目</h4>
						<h6>9473阅读</h6>
					</div>
					<div class="right">
						<img src="">
					</div>
				</router-link>
			</li>

			<li v-if='type==2'>
				<router-link to="">
					<div class="left">
						<h4>长兴慈善基金项目启动啦</h4>
						<h6>10452阅读</h6>
					</div>
					<div class="right">
						<img src="">
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.news li{height:1.2rem;border:.01rem solid #EEE;margin:.1rem;box-sizing:border-box;padding:.1rem;}
	.news li div:first-child{float:left;width:2.05rem;box-sizing: border-box;height:1rem;}
	.news li div:nth-child(2){float:right;width:1.2rem;height:1rem;}
	.news li div>img{width:100%;height:100%;}
	.news li div h4{font-size:.16rem;height:.8rem;line-height:.2rem;font-weight: 300;}
	.news li div h5{font-size:.12rem;height:.2rem;font-weight:300;}
</style>
<script type="text/javascript">
	export default{
		props:{
			type:{
				type:String,
				default:"1"
			}
		}
	}
</script>