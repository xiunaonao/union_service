<template>

	<div class="order">
		<h6 v-if='type==1'>截至今日，基金总收入0.5元</h6>
		<h6 v-if='type==2'>截至今日，基金总支出0.1元</h6>
		<section></section>
		<ul>
			<li v-if='type==1' class="income"><i></i><label>捐助人</label><b>金额</b><span>时间</span></li>
			<li v-if='type==2'  class="expenditure"><strong>项目名称</strong><b>金额</b><label>操作人</label><span>时间</span></li>
			<li v-if='type==1'  class="income"><img src="./img/xax.png"/><label>梁先生</label><b>50.00元</b><span>2015-10-14</span></li>
			<li v-if='type==2'  class="expenditure"><strong>泓唛员工扶贫项目</strong><b>3.5元</b><label>彭老板</label><span>2015-10-14</span></li>
		</ul>
	</div>
</template>

<style lang="css" src='./order.css'  scoped>
</style>

<!-- <style lang="css" scoped>
	@import './order.css'
</style> -->

<script type="text/javascript">
	//import './order.css'
	export default{
		props:{
			type:{
				type:String,
				default:"1"
			}
		},
		data(){
			return{
				//type:1 //1:income 2:expenditures
			}
		}
	}
</script>