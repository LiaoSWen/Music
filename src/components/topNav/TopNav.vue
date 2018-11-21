<template>
  <mu-appbar style="width: 100%;" color="skyblue" class="bar">
  <mu-button icon slot="left" @click="showDrawer(true)">
    <mu-icon value="menu" size="24"></mu-icon>
  </mu-button>
	<mu-bottom-nav @change="change" :value.sync="tab" class="tab">
    <mu-bottom-nav-item value="self" icon="headset"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="main"  icon="audiotrack"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="video"  icon="slideshow"></mu-bottom-nav-item>
  	</mu-bottom-nav>
  	<mu-button icon slot="right" @click="showSearch(true)">
     <mu-icon size="24" value="search"></mu-icon>
    </mu-button>
</mu-appbar>

</template>

<script>
import {SHOW_SEARCH,SHOW_DRAWER} from '../../store/mutation-types'
import {mapMutations} from 'vuex'
export default{
	name: 'TopNav',
	data(){
		return{
			tab: 'main'
		}
	},
	 methods: {
	 		...mapMutations({
	 			showSearch: 'SHOW_SEARCH',
	 			showDrawer: SHOW_DRAWER
	 		}),
      change(val) {
        this.$router.push(val)
      }
    }
}
</script>

<style scoped>
.bar{
	padding: 0 10px;
}
.tab{
	background-color:skyblue;
	padding: 10px 0;
}
.tab .material-icons{
	font-size: 36px;
}

</style>