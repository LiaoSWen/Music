
import 'muse-ui/lib/styles/base.less'
import {AppBar,Avatar,BottomNav,Button,Carousel,Divider,Dialog,Drawer,GridList,Icon,List,  LoadMore,SubHeader,Slider} from 'muse-ui'
const components =[AppBar,Avatar,BottomNav,Button,Carousel,Divider,Dialog,Drawer,GridList,Icon,List,  LoadMore,SubHeader,Slider]
export default{
	install(Vue){
		components.forEach(c => Vue.use(c))
	}
}