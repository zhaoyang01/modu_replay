/*
 * @Description: 入口文件配置
 * @Author: 红糖（1095263376）
 * @Date: 2019-12-31 21:17:19
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './src/base/router/index.js'
import router from './src/base/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
