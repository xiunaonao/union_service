<template>
	<div class="home">
		<div class="header">
			<router-link to="order/2"><nav><img src="./img/jjzc.png"/><span>基金支出</span></nav></router-link>
			<router-link to="order/1"><nav><img src="./img/jjsr.png" /><span>基金收入</span></nav></router-link>
			<router-link to="news/1"><nav><img src="./img/jjal.png" /><span>救助案例</span></nav></router-link>
			<router-link to="news/2"><nav><img src="./img/jjdt.png" /><span>基金动态</span></nav></router-link>
		</div>
		<div class="article">
			<h6><img src="./img/ax.png" />￥{{money}}.00</h6>
			<section>
				<div v-bind:class="['tree '+tree()]"></div>
				<nav>
			<div class="tree-btn">
				<nav><img src="./img/system.png"/><span>基金管理</span></nav>
				<nav @click='show_money()'><img src="./img/xax.png"/><span>献爱心</span></nav>
			</div>
				</nav>
			</section>
		</div>
		<div class="footer" v-bind:style="{height:bottom_height+'px'}">
			<ul>
				<li><img src="./img/xax.png"/><label><i>梁先生</i>&nbsp;捐助&nbsp;<b>50.00元</b></label></li>
			</ul>
		</div>
		<CaringMoney :is_show='isshowmoney' v-on:hide_money='show_money()'/>
	</div>
</template>

<style lang="css" scoped>
	@import './index.css'
</style>

<script type="text/javascript">
	import CaringMoney from './CaringMoney.vue'
	export default{
		data(){
			window.dat=this

			return {
				money:30456,
				bottom_height:100,
				isshowmoney:false,
			}
		},
		components:{
			CaringMoney
		},
		methods:{
			tree(){
				let ind=1
				if(this.money<5000){
					ind=1
				}else if(this.money<20000){
					ind=2
				}else if(this.money<100000){
					ind=3
				}else if(this.money<200000){
					int=4
				}else if(this.money<500000){
					ind=5
				}
				return 'tree-'+ind
			},
			bottom_layer(){
				let header=document.querySelector('.header')
				let article=document.querySelector('.article')
				let height=100
				if(header && article){
					let h1=parseInt(window.getComputedStyle(header).height)
					let h2=parseInt(window.getComputedStyle(article).height)
					height=document.documentElement.clientHeight-h1-h2
				}
				return height
			},
			show_money(){
				this.isshowmoney=!this.isshowmoney
			}
		},
		mounted(){
			this.bottom_height=this.bottom_layer()
		}
	}
</script>