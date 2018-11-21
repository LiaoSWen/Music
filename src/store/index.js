import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const state = {
	data:{
		ranking:{},
		dailySongs:{},
		songsList:{},
		self:{}
	},
	img:{
		banner:{},
		recomendMusic:[],
		newMusic:[],
		stationMusic:[]
	},
	user:[
	{id: 1,name:'不呆',password:'123456',avatar:'static/img/header/02.jpg',login:false},
	{id: 2,name:'小可爱',password:'abcdefg',avatar:'static/img/header/03.jpg',login:false}
	],
	isLogin: false,
	mvData:[],
	showLogin: false,
	showMusic: false,
    showRanking:false,
    showPlay: false,
    showSearch: false,
    showDrawer: false,
    playing: false,
    currentMusic:[],
	currentList:{}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})
