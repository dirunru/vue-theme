// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './style/main.css' 
import App from './App'
import router from './router'
import Cookies from 'js-cookie'

import ElementUi from 'element-ui'
import "../theme/index.css"
import $ from "jquery"
import ECharts from 'echarts'
import './assets/font/font-awesome.css' //引入assets中的外部文件
// import './assets/css/animate.css' //引入assets中的外部文件


import animated from "animate.css"
Vue.use(animated)
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'




Vue.use(ElementUi)
Vue.prototype.$echarts = ECharts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
