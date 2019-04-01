<template>
	<article>
		<div class="detail-header">
			<div>
				<img src="http://thirdwx.qlogo.cn/mmopen/LoEqBhgzXSPrP7pHrGor5anZRcBP0mlX0WYGFMqCacNsicQESibw6LcA06icGsFuep8CM8TD4TslA0oPfguOL83xb91bicQPw3Uz/132">
				<label>你的名字</label>
			</div>
		</div>
		<div class="detail-info">
			<h5>趣味加班活动</h5>
			<h6>今天愉快的加班吧，有泡面吃哦</h6>
		</div>
		<div class="detail-form">
			<p>
				<label>截止日期</label>
				<span>2019-03-28</span>
			</p>
			<p>
				<label>活动日期</label>
				<span>2019-03-28</span>
			</p>
			<p>
				<label>活动时间</label>
				<span>2019-03-28</span>
			</p>
			<p>
				<label>活动地址</label>
				<span>新天地</span>
			</p>
			<p>
				<label>人数限制</label>
				<span>不限</span>
			</p>
		</div>
		<div class="detail-btn">
			
		<section class="btn-box">
			<p><a>我要报名</a></p>
		</section>
		</div>
		<div class="detail-users">
			<h6>已报名(1)</h6>
			<UserList/>
		</div>
		<div class="detail-footer"></div>
	</article>
	
</template>

<script type="text/javascript">
	import './detail.css'
	import UserList from './ActivityUserList.vue'
	export default{
		components:{
			UserList
		}
	}
</script>