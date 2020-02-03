// import '@babel/polyfill';

// Vue 配置 
import Vue from 'vue';
import App from './App';
import router from 'router';
import store from 'store';
import VueI18n from 'vue-i18n';

// 外部资源引入
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueResize from 'vue-resize';
import VueLazyload from 'vue-lazyload';
import axios from 'axios';
import VueAxios from 'vue-axios';

// 本地资源引入
// import messages from '@/assets/i18n/i18n';
import '@/assets/iconfont/default/iconfont.css';  // 自定义字体图标
import '@/assets/iconfont/default/iconfont.js';   // 自定义字体图标
import config from '../custom/index.js';    // 项目配置

// 初始化Vue组件
Vue.use(VueResize);
Vue.use(VueI18n);
Vue.use(VueLazyload, {
    loading: '@/assets/image/loading.svg',
    attempt: 1,
});

// 初始化工具组件
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios);


// 初始化状态配置
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


