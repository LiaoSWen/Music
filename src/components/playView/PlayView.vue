<template>
	<div class="play">
		<audio :src="currentMusic[0].url" ref="ad"></audio>
		<div class="content">
		<div class="top">
			<mu-button icon slot="left" class="icon" @click="close(false)">
			  <mu-icon value="arrow_back"></mu-icon>
			</mu-button>
			<span class="title">{{currentMusic[index].name}}</span>
		</div>
		<mu-divider></mu-divider>
		<div class="lrc">
			
		</div>
		
		<div class="footer">
			<div class="slider">
			  <span style="float: left">00:00</span><span style="float: right">00:00</span>
			  <mu-slider class="demo-slider" @change="add" v-model="time"></mu-slider>	
			</div>
			 <div class="btn">
			 	<mu-appbar class="bar" :z-depth="0">
			 	<mu-button icon @click="preMusic">
			      <mu-icon value="skip_previous" :size="36"></mu-icon>
			    </mu-button>
			    <mu-button icon slot="default" @click="playMusic">
			      <mu-icon :value="playing === true ? 'pause_circle_outline' : 'play_circle_outline'" :size="36"></mu-icon>
			    </mu-button>
			    <mu-button icon  @click="nextMusic">
			      <mu-icon value="skip_next" :size="36"></mu-icon>
			    </mu-button>
			    </mu-appbar>
			 </div>
		</div>
		
		</div>
		<div class="bgimg">
			<img src="static/img/header/bg.jpg"/>
		</div>
		
	</div>
</template>

<script>
import {SHOW_PLAY} from '../../store/mutation-types'
import {mapMutations,mapState,mapActions} from 'vuex'
export default{
	name:'PlayView',
	data(){
		return{
			time: 0,
			index: 0,
			lyric: ''
		}
	},
	computed:{
		...mapState({
			currentMusic: 'currentMusic',
			playing: 'playing'
		}),
		},
	methods:{
		...mapMutations({
			close: SHOW_PLAY
		}),
		...mapActions(['ctrlPlaying']),
		add(){
			this.time++
			console.log(this.time)
		},
		playMusic(){
			if(this.playing){
				this.ctrlPlaying(false)
				this.$refs.ad.pause()
				console.log(this.playing)
			}else{
				this.ctrlPlaying(true)
				this.$refs.ad.play()
				console.log(this.playing)
			}
			
		},
		nextMusic(){
			if(this.index === this.currentMusic.length-1){
				this.index = 0
			}else{
				this.index ++
			}
		},
		preMusic(){
			if(this.index === 0){
				this.index = this.currentMusic.length - 1 
			}else{
				this.index --
			}
			}
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.play
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(7,17,27,0.8)
  z-index: 55
  .content
    top: 0
    left: 0
    width: 100%
    height: 100%
    position: relative
    background: rgba(7,17,27,0.5)
    .top
      width: 100%
      height: 48px
      .icon
        vertical-align: top
      .title
        display: inline-block
        height: 100%
        line-height: 48px
        font-size: 16px
    .lrc
      position: absolute
      width: 100%
      top: 48px
      bottom: 130px
    .footer
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      height: 130px
      .slider
        width: 100%
        padding: 10px
      .btn
        width: 100%
        display: flex
        padding: 0 20px
        .bar
          width: 100%
          text-align: center
          background: rgba(0,0,0,0)
       
  .bgimg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    filter: blur(5px)
    z-index: -1
</style>