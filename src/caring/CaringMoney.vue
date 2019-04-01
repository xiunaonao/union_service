<template>
	<div class="money-layer" v-if='is_show'>
		<div class="money-box">
			<h6>
				<label>予人玫瑰，手有余香</label>
				<button @click="hide_money()">X</button>
			</h6>
			<div>
				<button v-for='item,index in money_list' v-bind:class="[money_index==index && !is_custom?'c':'']" @click='money_index=index;is_custom=false'>{{item}}元</button>
				<span class="button button-l" @click="is_custom=true" v-bind:class="[is_custom?'c':'']">自定义金额<input/>元</span>
			</div>
			<button class="caring-btn">确定捐献</button>
		</div>
	</div>
</template>

<style lang="css" scoped>
	@import './money.css'
</style>

<script type="text/javascript">
	export default{
		props:{
			is_show:false
		},
		data(){
			return {
				is_custom:false,
				money_index:0,
				money_list:[
					1,2,5,10,20,50
				]
			}
		},
		methods:{
			hide_money(){
				this.$emit('hide_money','')
			}
		}
	}
</script>