<template>
<mu-carousel interval = 1500 class="banner">
  <mu-carousel-item v-for="(img,index) in imgList" :key="index">
    <img :src="img" width="100%">
  </mu-carousel-item>
</mu-carousel>
</template>

<script>
import {mapState} from 'vuex'
export default{
	name:'Banner',
	computed:mapState({
		imgList: state => state.img.banner
	})
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.mu-carousel
  height: 200px !important
  width: 100%    
</style>