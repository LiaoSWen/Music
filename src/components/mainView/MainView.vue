<template>
	<div class="main" >			
		<Banner></Banner>
		<div class="clas">
			<div class="fm">
				<p><img src="static/img/icon/fm.png" @click="showPlay(true)"/></p>
				<span>私人FM</span>
			</div>
			<div class="daily" @click="showMusic(musicList.dailySongs)">
				<p><img src="static/img/icon/daily.png" alt="" /></p>
				<span>每日推荐</span>
			</div>
			<div class="musiclist" @click="showMusic(musicList.songsList)">
				<p><img src="static/img/icon/musiclist.png" alt="" /></p>
				<span>歌单</span>
			</div>
			<div class="range" @click="showRanking(true)">
				<p><img src="static/img/icon/range.png" alt="" /></p>
				<span>排行榜</span>
			</div>
		</div>
		<div class="nemuList">
		  <mu-grid-list class="gridlist-demo" :cols="3" :padding ="8">
	        <mu-sub-header class="title">推荐歌单</mu-sub-header>
	        <mu-grid-tile v-for="(item,index) in imgList.recomendMusic" :key="index" @click="showMusic(musicList.songsList)">
	          <img :src="item.img" >
	          <span slot="title">{{item.text}}</span>
	          <mu-button slot="action" icon>
	            <mu-icon value="star_border"></mu-icon>
	          </mu-button>
	        </mu-grid-tile>
	      </mu-grid-list>
	      <mu-grid-list class="gridlist-demo" :cols="3" :padding ="8">
	        <mu-sub-header class="title">最新音乐</mu-sub-header>
	        <mu-grid-tile v-for="(item,index) in imgList.newMusic" :key="index">
	          <img :src="item.img" >
	          <span slot="title">{{item.text}}</span>
	          <mu-button slot="action" icon>
	            <mu-icon value="star_border"></mu-icon>
	          </mu-button>
	        </mu-grid-tile>
	      </mu-grid-list>
	      <mu-grid-list class="gridlist-demo" :cols="3" :padding ="8">
	        <mu-sub-header class="title">主播电台</mu-sub-header>
	        <mu-grid-tile v-for="(item,index) in imgList.stationMusic" :key="index">
	          <img :src="item.img" >
	          <span slot="title">{{item.text}}</span>
	          <mu-button slot="action" icon>
	            <mu-icon value="star_border"></mu-icon>
	          </mu-button>
	        </mu-grid-tile>
	      </mu-grid-list>
		</div>
	</div>
</template>

<script>
import Banner from '../Banner/Banner'
import BScroll from 'better-scroll'
import {SHOW_MUSIC_LIST,SHOW_RANKING,SHOW_PLAY} from '../../store/mutation-types'
import {mapState,mapMutations,mapActions} from 'vuex'
export default{
	name:'MainView',
/*	mounted(){
	 	this.$nextTick(()=>{
	 		if(this.contentScroll){
	 			this.contentScroll.refresh()
	 		}else{
	 			this.contentScroll = new BScroll(this.$refs.content,{
	 			click: true
	 		})
	 		}
	 		this.contentScroll.scrollToElement(this.bottom)
	 	})
	 },*/
	computed:{
		...mapState({
			imgList: state => state.img,
			musicList: state => state.data
		}),
		bottom(){
			return this.$refs.bottom
		}
		
	},
	methods:{
		...mapMutations({
			showRanking: SHOW_RANKING,
			showPlay: SHOW_PLAY
		}),
		...mapActions(['showMusic'])
	},
	components:{Banner}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
@import 'static/scss/mixin'
.main
  position: relative
  top: 0
  bottom: 0
  overflow: hidden
  .clas
    box-sizing: border-box
    width: 100%
    display: flex
    padding: 0 25px
    overflow: hidden
    @include border-1px(rgba(0,0,0,0.1))
    div
      flex: 1
      text-align: center
      padding: 20px
      font-size: 12px
      p
        border-radius: 50%
        background: rgb(214,60,51)
        margin-bottom: 5px
        img
          width: 100%
          height: 100%
  .nemuList
    .gridlist-demo
      .title
        font-size: 24px
        color: #000
        font-weight: 800

</style>