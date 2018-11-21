<template>
	<div class="login">
	  <div class="contant">
	  	<div class="close" @click="close(false)">X</div>
		<div class="title">登录</div>
		<div class="inp">
		  <mu-icon value="perm_identity"></mu-icon>
		  <input type="text"v-model="uname" class="item" placeholder="用户名"/>
		</div>
		<div class="inp">
		  <mu-icon value="lock"></mu-icon>
		  <input type="text" v-model="upwd" class="item" placeholder="密码"/>
		</div>
		<button class="btn" @click="loginMusic">登录</button>
		<p class="t">{{tick}}</p>
	  </div>
	</div>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import {SHOW_LOGIN,CHECK_LOGIN} from '../../store/mutation-types'
export default{
	name:'Login',
	data(){
		return{
			uname:'',
			upwd:'',
			tick: ''
		}
	},
	computed:{
		...mapState({
		user: 'user',
		isLogin:'isLogin'
		})
		},
	methods:{
		...mapMutations({
			close: 'SHOW_LOGIN',
			checkLogin: 'CHECK_LOGIN'
		}),
		loginMusic(){
			for(let i = 0;i < this.user.length;i++){
				if(this.uname === this.user[i].name || this.upwd === this.user[i].password){
					this.tick = '登录成功'
					this.checkLogin(true)
					this.close(false)
					return
				}else{
					this.tick = '用户名或密码错误'
					return
				}
			}
		}
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.login
  position: fixed
  padding: 30px
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0,0,0,0.8)
  z-index: 50
  .contant
    position: relative
    width: 100%
    margin-top: 100px
    padding: 20px
    background: #fff 
    .close
      position: absolute
      top: 0
      right: 0
      display: inline-block
      margin-top: 0
      padding: 10px
      background-color: red
      color: #fff     
    .title
      padding: 5px
      font-size: 24px
      margin-bottom: 10px
    .inp
      padding: 5px
      border-bottom: 1px solid rgba(7,17,27,0.1)
      .item
        line-height: 25px
        font-size: 18px
        vertical-align: top
        border: none
        outline: none
        background: transparent
    .btn
      width: 100%
      border-radius: 30px
      margin-top: 10px
      font-size: 16px
      color: #fff
      background-color: red
    .t
      font-size: 16px
      color: red
      text-align: center
</style>