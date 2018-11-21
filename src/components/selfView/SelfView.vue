<template>
<div class="self">
	<mu-list>
    <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="music_note"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>本地音乐(0)</mu-list-item-title>
    </mu-list-item>
      <mu-divider></mu-divider>
    <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="poll"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>最近播放(0)</mu-list-item-title>
    </mu-list-item>
      <mu-divider></mu-divider>
    <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="vertical_align_bottom"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>下载管理(0)</mu-list-item-title>
    </mu-list-item>
      <mu-divider></mu-divider>
    <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="radio"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的电台(0)</mu-list-item-title>
    </mu-list-item>
      <mu-divider></mu-divider>
    <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="star_border"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的收藏(0)</mu-list-item-title>
    </mu-list-item>
      <mu-divider></mu-divider>
    <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="brightness_2"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Sati空间(0)</mu-list-item-title>
    </mu-list-item>
      <mu-divider></mu-divider>
      <mu-appbar style="width: 100%;height:30px;font-size: 14px" color="primary" z-depth="0" class="bar">
    <mu-button icon slot="left">
      <mu-icon value="keyboard_arrow_down"></mu-icon>
  	</mu-button>
 		 <span class="title">创建的歌单(1)</span>  
  	<mu-button flat slot="right">
  		<mu-icon value="settings"></mu-icon>
  	</mu-button>
  </mu-appbar>
  <mu-list-item button ripple>
      <mu-list-item-action>
        <mu-icon value="favorite_border"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我喜欢的音乐(0)</mu-list-item-title>
    </mu-list-item>
  </mu-list>
  
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default{
	name:'SelfView',
	computed:mapState({
		isLogin:'isLogin',
		loveMusic: state => state.data.self
	}),
	methods:{
		...mapActions(['showMusic'])
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.bar
  color: rgba(7,17,27,0.6)
  .title
    font-size: 14px
</style>