<template>
	<article id="activity_home">
		<section class="background-box"></section>
		<section class="head-box">
			<div>
				<img src="http://thirdwx.qlogo.cn/mmopen/LoEqBhgzXSPrP7pHrGor5anZRcBP0mlX0WYGFMqCacNsicQESibw6LcA06icGsFuep8CM8TD4TslA0oPfguOL83xb91bicQPw3Uz/132">
				<label>你的名字</label>
			</div>
		</section>
		<section class="btn-box">
			<p><router-link to="form">发起活动报名</router-link></p>
		</section>
		<section class="list-box">
				<nav>
					<button v-bind:class="isyour?'c':''" @click='changeList(true)'>我发起的活动</button>
					<button v-bind:class="isyour?'':'c'" @click='changeList(false)'>我参加的活动</button>
				</nav>
				<ActivityList :isyour="isyour2"></ActivityList>
		</section>
	</article>
</template>

<script>
	import './activity.css'
	import ActivityList from './ActivityList.vue'
	export default{
		data(){
			return{
				isyour:true,
				isyour2:1
			}
		},
		methods:{
			changeList(isyour){
				this.isyour=isyour
				this.isyour2=isyour?1:2

			}
		},
		components:{
			ActivityList
		},
		mounted:()=>{
			//console.log('123')
		}
	}
</script>