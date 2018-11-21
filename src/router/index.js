import Vue from 'vue'
import Router from 'vue-router'
import MainView from '../components/mainView/MainView'
import SelfView from '../components/selfView/SelfView'
import VideoView from '../components/videoView/VideoView'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/main',name: 'MainView',component: MainView},
    {path: '/self',name: 'SelfView',component: SelfView},
    {path: '/video',name: 'VideoView',component: VideoView}
  ]
})
