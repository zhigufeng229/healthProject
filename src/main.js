import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Vue2Editor from 'vue2-editor'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import VueClipboard from 'vue-clipboard2'
import toastRegistry from 'toast_demo_based_vue'


Vue.config.productionTip = false

//添加全局样式
import './assets/css/global.css'

//引入iconfig
import './assets/font/iconfont.css'

//导入axios
import axios from 'axios'

import vuetify from './plugins/vuetify'

//挂载axios
Vue.prototype.$http=axios
Vue.use(Vue2Editor)
Vue.use(VueClipboard)
Vue.use(toastRegistry)
Vue.use(VuetifyDialog,{
  context:{
    vuetify
  }
})

//设置访问根路径
axios.defaults.baseURL="http://localhost:9000"

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
