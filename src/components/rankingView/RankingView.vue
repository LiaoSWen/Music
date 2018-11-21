<template>
	<div class="ranking">
		<div class="top">
			<mu-button icon slot="left" class="icon" @click="close(false)">
			  <mu-icon value="arrow_back"></mu-icon>
			</mu-button>
		<span class="title">排行榜</span>
		</div>
		<mu-divider></mu-divider>
		<div class="content">
			<div v-for="(item,index) in list" :key="index" @click="showMusic(item)">	
			<mu-divider></mu-divider>
			<mu-list>
			<mu-list-item avatar button ripple>
		      <mu-list-item-action>
		        <mu-avatar>
		          <img :src="item.songImg">
		        </mu-avatar>
		      </mu-list-item-action>
		      <mu-list-item-content>
		      <mu-list-item-title>{{item.title}}</mu-list-item-title>
		      </mu-list-item-content>
		      <mu-list-item-action>
		        <mu-icon value="keyboard_arrow_right"></mu-icon>
		      </mu-list-item-action>
		    </mu-list-item>
		  </mu-list>
		  </div>
		</div>
	<mu-divider></mu-divider>
	</div>
</template>

<script>
import {SHOW_RANKING} from '../../store/mutation-types'
import {mapMutations,mapState,mapActions} from 'vuex'
export default{
	name:'RankingView',
	computed:mapState({
		list: state => state.data.ranking
	}),
	methods:{
		...mapMutations({close: SHOW_RANKING}),
		...mapActions(['showMusic'])
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.ranking
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: #fff
  z-index: 45
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
</style>