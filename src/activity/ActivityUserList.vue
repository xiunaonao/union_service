<template>
	<div>
		<ul class="activity-list">
			<li v-for='item in isyour==2?list1:list2'>
				<router-link to="">
					<img src="http://thirdwx.qlogo.cn/mmopen/LoEqBhgzXSPrP7pHrGor5anZRcBP0mlX0WYGFMqCacNsicQESibw6LcA06icGsFuep8CM8TD4TslA0oPfguOL83xb91bicQPw3Uz/132"/>
					<div>
						<h5>彭先生 男 18岁</h5>
						<h6>泓唛 CEO</h6>
					</div>
					<aside>
						<h5>2019-03-28 12:22</h5>
						<h6>13838383838</h6>
					</aside>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import './list.css'
	export default{
		props:{
			isyour:Number
		},
		data(){
			return {
				list1:[
					{},
					{}
				],
				list2:[
					{}
				]
			}
		}
		
	}
</script>