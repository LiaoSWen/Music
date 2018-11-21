<template>
<div class="music" ref="wrapper">
	<div class="top">
		<mu-button icon slot="left" class="icon" @click="close(false)">
		  <mu-icon value="arrow_back"></mu-icon>
		</mu-button>
		<span class="title">{{currentList.title}}</span>
	</div>
	<div class="content" ref="musiclist">
		<div>
			<div class="bg-img">
			<img :src="currentList.img1" width="100%" height="100%"/>
		  </div>
		<mu-divider></mu-divider>
		<div class="list" v-for="(item,index) in currentList.songs" :key="index">
		<mu-divider></mu-divider>
		  <mu-list>
			<mu-list-item avatar button ripple>
		      <mu-list-item-action>
		      	<mu-button flat @click="playCurrentMusic(item)">
		        <mu-avatar>
		          <img :src="item.pic">
		        </mu-avatar>
		        </mu-button>
		      </mu-list-item-action>
		      <mu-list-item-content>
		      <mu-list-item-title>{{item.name}}</mu-list-item-title>
		      <mu-list-item-sub-title>{{item.singer}}</mu-list-item-sub-title>
		      </mu-list-item-content>
		      <mu-list-item-action>
		        <mu-icon value="play_circle_outline"></mu-icon>
		      </mu-list-item-action>
		    </mu-list-item>
		  </mu-list>
		</div>
		<mu-divider></mu-divider>
		</div>
		
	</div>
</div>
</template>

<script>
import {SHOW_MUSIC_LIST} from '../../store/mutation-types'
import BScroll from 'better-scroll'
import {mapMutations,mapState,mapActions} from 'vuex'
export default{
	name:"MusicListView",
	 mounted(){
	 	this.$nextTick(()=>{
	 			this.musicScroll = new BScroll(this.$refs.musiclist,{
	 			click: true
	 		})
	 		
	 		
	 	})
	 },
	computed:mapState({
		currentList: 'currentList'
	}),
	methods:{
		...mapMutations({
			close:SHOW_MUSIC_LIST
		}),
		...mapActions(['playCurrentMusic'])	
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.music
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #fff
  z-index: 50    
  .top
    width: 100%
    height: 48px
    background-color: skyblue
    .icon
      vertical-align: top
    .title
      display: inline-block
      line-height: 48px
      height: 100%
      font-size: 16px
  .content
    position: fixed
    top: 48px
    right: 0
    left: 0
    bottom: 0
    overflow: hidden
    .bg-img
      width: 100%
      height: 200px
</style>