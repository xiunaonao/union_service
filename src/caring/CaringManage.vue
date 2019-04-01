<template>
	<div>
		<h5>基金总额:15元</h5>
		<h5>基金总支出:13元</h5>
		<h5>基金总收入:15元</h5>

		<ul>
			<li><router-link to="">新建基金支出</router-link></li>
			<li><router-link to="">管理基金动态</router-link></li>
			<li><router-link to="">管理救助案例</router-link></li>
		</ul>

	</div>
	
</template>

<style scoped>
	h5{line-height:.4rem;font-size:.18rem;font-weight:600;text-align:center;color:#FA0;}
	h5:first-child{margin-top:.5rem;}
	ul{margin:.3rem;}
	li{background:#FA0 no-repeat .1rem center/.7rem; color:#FFF;height:1rem;margin:.15rem 0;text-indent:1.2rem;}
	li:nth-child(1){background-image:url(./img/jjzc.png);}
	li:nth-child(2){background-image:url(./img/jjdt.png);}
	li:nth-child(3){background-image:url(./img/jjal.png);}
	li a{color:#FFF;font-weight:300;font-size:.18rem;line-height:1rem;}
</style>

<script type="text/javascript">
	export default{

	}
</script>