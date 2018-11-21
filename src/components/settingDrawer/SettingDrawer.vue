<template>
	<div class="setting">
	<mu-drawer :open="open" docked v-if="showDrawer" width="80%"> 
	  <div ref="wepper" class="drawer">
	  <div>
	  <div class="head">
	  	<div class="user" v-if="islogin" v-for="u in user" :key="u.id">
	  	<div >
	  	<mu-avatar :size="50">
      		<img :src="u.avatar">
    	</mu-avatar>
		<div class="uname">{{u.name}}</div>
		</div>
	  	</div>
	  	<div class="unlogin" @click="login(true)" v-if="!islogin">
	  		<p>请登录</p>
	  	</div>
    		<LoginView v-if="showLogin"></LoginView>
    	<div class="sign">
    		 <mu-icon value="layers" class="icon"></mu-icon>
    		 <span>签到</span>
    	</div>
	  </div>
   	  	 <mu-list>
    	   <mu-list-item button ripple>
      		 <mu-list-item-action>
       		   <mu-icon value="local_post_office"></mu-icon>
     		 </mu-list-item-action>
     		 <mu-list-item-title>我的消息</mu-list-item-title>
   		  </mu-list-item>
          <mu-list-item button ripple>
            <mu-list-item-action>
              <mu-icon value="remove_red_eye"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>会员中心</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button ripple>
            <mu-list-item-action>
              <mu-icon value="shopping_cart"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>商城</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button ripple>
            <mu-list-item-action>
              <mu-icon value="drafts"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>游戏推荐：明日之后</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="settings_input_antenna"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>在线听歌免流量</mu-list-item-title>
         </mu-list-item>
         <Split></Split>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="perm_identity"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>我的好友</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="place"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>附近的人</mu-list-item-title>
         </mu-list-item>
          <Split></Split>
           <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="color_lens"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>个性换肤</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="mic_none"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>听歌识曲</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="query_builder"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>定时停止播放</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="fullscreen"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>扫一扫</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="alarm"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>音乐闹钟</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="directions_car"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>驾驶模式</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="child_care"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>亲子频道</mu-list-item-title>
         </mu-list-item>
          <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="filter_drama"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>音乐云盘</mu-list-item-title>
         </mu-list-item>
         <mu-list-item button ripple>
           <mu-list-item-action>
             <mu-icon value="confirmation_number"></mu-icon>
           </mu-list-item-action>
           <mu-list-item-title>优惠券</mu-list-item-title>
         </mu-list-item>
       </mu-list>
       </div>
    
   	  <div class="footer">
   	  	<div class="ctrl">
   	  		<mu-icon value="brightness_3" class="icon"></mu-icon>
    		<span>夜间模式</span>
   	  	</div>
   	  	<div class="ctrl">
   	  		<mu-icon value="settings" class="icon"></mu-icon>
    		<span>设置</span>
   	  	</div>
    	<div class="ctrl" @click="close(false)">
    		<mu-icon value="power_settings_new" class="icon"></mu-icon>
    		<span>退出</span>
    	</div>
   	  </div>
      </div>
  </mu-drawer>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
import Split from '../widget/Split'
import LoginView from '../loginView/LoginView'
import {SHOW_DRAWER,SHOW_LOGIN} from '../../store/mutation-types'
export default{
	 name: 'SettingDrawer',
	 data(){
	 	return{
	 		openSimple:false,
	 	}
	 },
	 computed:{
	 	...mapState({
	 	open: 'showDrawer',
	 	user:'user',
	 	islogin:'isLogin',
	 	showLogin:'showLogin',
	 	showDrawer:'showDrawer'
	 	 })
	 	},
	 methods:{
	 	...mapMutations({
	 	close: SHOW_DRAWER,
	 	login: SHOW_LOGIN
	 	})
	 	},
	 mounted(){
	 	this.$nextTick(()=>{
	 		this.wepperScroll = new BScroll(this.$refs.wepper,{
	 			click: true
	 		})
	 	})
	 },
	 components:{
	 	Split,
	 	LoginView
	 }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.setting
  position: relative
  z-index: 50
.drawer
  height: 100%
  overflow: hidden
  .head
    position: relative
    width: 100%
    padding: 70px 5px 10px 5px
    background: url("../../../static/img/header/001.jpg")
    background-size: 100%
    .unlogin
      display: inline-block
      border: 1px solid #fff
      border-radius: 30px
      padding: 5px
      font-size: 24px
      color: #fff
    .sign
      position: absolute
      right: 10px
      bottom: 15px
      border-radius: 30px
      padding: 0 5px
      border: 1px solid #fff
      color: #fff
      .icon
        vertical-align: top
  .footer
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    padding: 10px
    display: flex
    background: #fff
    .ctrl
      flex: 1
      text-align: center
      .icon
        vertical-align: top
</style>