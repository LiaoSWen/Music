import * as types from './mutation-types'

export default{
	async getAllData({commit},axios){
		let ranking = await axios.get('/api/ranking')
		let dailySongs = await axios.get('/api/dailySongs')
		let songsList = await axios.get('/api/songsList')
		let self = await axios.get('/api/self')
		let img = await axios.get('/api/img')
		let mvData = await axios.get('/api/mv')
		mvData = mvData.data.mvData
		ranking = ranking.data.data
		dailySongs = dailySongs.data.data
		songsList = songsList.data.data
		self = self.data.data.songs
		img = img.data.img
		commit(types.RECEVIVE_DATA,{ranking,dailySongs,songsList,self,img,mvData})
	},
	//显示音乐列表并传值
	showMusic({commit},data){
		commit(types.SEND_CURRENT_LIST,data)
		commit(types.SHOW_MUSIC_LIST,true)
		
	},
	//将选中的音乐列表中的歌曲信息传入播放详情页面中
	playCurrentMusic({commit},data){
		commit(types.PLAY_MUSIC,data)
		commit(types.SHOW_PLAY,true)
	},
	//控制播放暂停
	ctrlPlaying({commit},statue){
		commit(types.SWITCH_PLAYING,statue)
	}
}