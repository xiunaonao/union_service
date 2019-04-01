<template>
	<div>
		<ul class="activity-list">
			<li v-for='item in isyour==2?list1:list2'>
				<router-link to="">
					<img src="http://thirdwx.qlogo.cn/mmopen/LoEqBhgzXSPrP7pHrGor5anZRcBP0mlX0WYGFMqCacNsicQESibw6LcA06icGsFuep8CM8TD4TslA0oPfguOL83xb91bicQPw3Uz/132"/>
					<div>
						<h5>你的名字</h5>
						<h6>你的活动</h6>
					</div>
					<label>报名<i>1</i>人/限制6人></label>
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