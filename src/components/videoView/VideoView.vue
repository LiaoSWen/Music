<template>
<div class="video">
	<div v-for="(m,index) in mvData.data" :key="index" class="item">
		<video :src="m.url" width="100%" ref="video" controls="controls"></video>
		<div class="desc">
			{{m.desc}}
		</div>
		<mu-divider></mu-divider>
		<div class="title">
			<div class="avatar">
				<img :src="m.pic" width="30px" height="30px"/>
			</div>
			<span>{{m.name}}</span>
		</div>
		<Split></Split>
		
	</div>

</div>
</template>

<script>
import {mapState} from 'vuex'
import Split from '../widget/Split'
export default {
  data () {
    return {
      
    }
  },
  components: {
   Split
  },
  methods: {
  },
  computed: {
  	...mapState({
  		mvData:'mvData'
  	})
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.video
  width: 100%
  height: 100%
  .item
    padding: 0 10px
    margin-bottom: 10px
    .desc
      padding: 5px
      font-size: 16px
    .title
      padding: 10px
      font-size: 18px
      .avatar
        display: inline-block
        vertical-align: middle
      
</style>