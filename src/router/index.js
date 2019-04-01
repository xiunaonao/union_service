import Vue from 'vue'
import Router from 'vue-router'
import List from '../List.vue'


import Activity from '../activity/Index.vue'
import ActivityForm from '../activity/ActivityForm.vue'
import ActivityDetail from '../activity/ActivityDetail.vue'


import Caring from '../caring/CaringIndex.vue'
import CaringOrder from '../caring/CaringOrder.vue'
import CaringNews from '../caring/CaringNews.vue'
import CaringManage from '../caring/CaringManage.vue'

Vue.use(Router)


export default new Router({
	routes:[
		{
			path:'*',
			component:List
		},
		{
			name:'activity',
			path:'/activity/',
			component:Activity
		},
		{
			path:'/activity/form',
			component:ActivityForm
		},
		{
			path:'/activity/detail',
			component:ActivityDetail
		},


		{
			path:'/caring/',
			component:Caring
		},
		{
			path:'/caring/order/:type',
			component:CaringOrder,
			name:'CaringOrder',
			props:true
		},
		{
			path:'/caring/news/:type',
			component:CaringNews,
			name:'CaringName',
			props:true
		},
		{
			path:'/caring/manage',
			component:CaringManage,
			name:'CaringManage'
		}
	]
})