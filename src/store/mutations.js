import * as types from './mutation-types'
export default{
	[types.RECEVIVE_DATA](state,{ranking,dailySongs,songsList,self,img,mvData}){
		state.data.ranking = ranking
		state.data.dailySongs=dailySongs
		state.data.songsList=songsList
		state.data.self=self
		state.img.banner = img.bannerImg.img
		state.img.recomendMusic = img.recomendMusic
		state.img.newMusic = img.newMusic
		state.img.stationMusic = img.stationMusic
		state.mvData = mvData	
	},
	[types.SHOW_MUSIC_LIST](state,val){
		state.showMusic = val
	},
	[types.SHOW_RANKING](state,val){
		state.showRanking = val
	},
	[types.SHOW_PLAY](state,val){
		state.showPlay = val
	},
	[types.SHOW_SEARCH](state,val){
		state.showSearch = val
	},
	[types.SHOW_DRAWER](state,val){
		state.showDrawer = val
	},
	[types.SHOW_LOGIN](state,val){
		state.showLogin = val
	},
	[types.CHECK_LOGIN](state,val){
		state.isLogin = val
	},
	/*[types.CURRENT_USER](state,user){
		let recode = state.user.find(u =>u.id === user.id)
		recode.login = true
		
	},*/
	[types.SEND_CURRENT_LIST](state,data){
		state.currentList = data
	},
	[types.SWITCH_PLAYING](state,val){
		state.playing = val
	},
	[types.PLAY_MUSIC](state,data){
		state.currentMusic.unshift(data)
		if(state.currentMusic.length > 9){
			state.currentMusic.pop()
		}
		
	}
}
