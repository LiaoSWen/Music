<template>
  <div id="app">
  <div class="topBar">
  	<TopNav></TopNav>
  </div>
  <!--展示音乐列表,每日推荐\歌单\ 需传入不同值-->
  <MusicList v-if="showMusic"></MusicList>
  <!--排行榜列表-->
  <RankingList v-if="showRanking"></RankingList>
  <!--播放详情页面（有歌词）-->
  <PlayView v-if="showPlay"></PlayView>
	<!--搜索页面-->
	<SearchView v-if="showSearch"></SearchView>
	<!--抽屉式信息栏-->
	<SettingDrawer v-if="showDrawer"></SettingDrawer>
	<!--登录页面-->
	<LoginView v-if="showLogin"></LoginView>
    <router-view/>
  </div>
</template>

<script>
import TopNav from './components/topNav/TopNav'
import PlayView from './components/playView/PlayView'
import RankingList from './components/rankingView/RankingView'
import MusicList from './components/musicListView/MusicListView'
import SearchView from './components/searchView/SearchView'
import SettingDrawer from './components/settingDrawer/SettingDrawer'
import LoginView from './components/loginView/LoginView'
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed:mapState({
  	showMusic: 'showMusic',
  	showRanking: 'showRanking',
  	showPlay: 'showPlay',
  	showSearch: 'showSearch',
  	showDrawer: 'showDrawer',
  	showLogin: 'showLogin'
  }),
  components:{
  	TopNav,
  	MusicList,
  	RankingList,
  	PlayView,
  	SearchView,
  	SettingDrawer,
  	LoginView
  }
}
</script>

<style>
#app {
},
.topBar{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	width: 100%
}
</style>
