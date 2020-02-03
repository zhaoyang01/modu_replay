// import '@babel/polyfill';

// Vue 配置 
import Vue from 'vue';
import App from './App';
import router from 'router';
import store from 'store';
import VueI18n from 'vue-i18n';

// 外部资源引入
// import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueResize from 'vue-resize';
// import VueLazyload from 'vue-lazyload';
import axios from 'axios';
import VueAxios from 'vue-axios';

// 本地资源引入
// import messages from '@/assets/i18n/i18n';
// import { project } from '@/../config/';  // 项目
import config from './config';  // 项目

// 初始化Vue组件
Vue.use(VueResize);
Vue.use(VueI18n);
// Vue.use(VueLazyload, {
//     loading: '@/assets/image/loading.svg',
//     attempt: 1,
// });

// 初始化工具组件
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios);


// // 初始化状态配置
// Vue.prototype.$project = project;
// Vue.config.productionTip = false;
// Vue.prototype.$env = process.env.NODE_ENV;
Vue.use(config);

// 需要等待国际化
(function () {
    // let i18n = await i18nInstall;

    new Vue({
        el: '#app',
        router,
        store,
        // i18n,
        template: '<App/>',
        components: { App },
        mounted:function(){
            
        }
    });
})();


