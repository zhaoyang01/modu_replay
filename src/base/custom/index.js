// 配置：
// 1.自定义的属性
// 2.工具的定义
import Bowser from 'bowser';
import { project } from '@/../config/index';

export default {
    install(Vue) {
        // 实现属性的绑定
        Vue.prototype.$env = process.env.NODE_EN;
        Vue.prototype.$project = project;
        Vue.prototype.$Bowser = Bowser;
        
        // 初始化浏览器的信息
        this.initBowser();
        // 初始化反向代理的拦截器         
        this.initAxios(Vue);

        console.log("======================== 完成了全局配置的绑定 ");
        return Vue
    },

    /**      
     * 实现 Bowser 浏览器信息的归类处理      
     * @method initBowser      
     */
    initBowser() {
        const isMobile = Boolean(Bowser.mobile);
        document.querySelector('html').setAttribute("dpr", Number(isMobile) + 1); 
    },

    /**      
     * 实现 Axios 的拦截器初始化      
     * @method initAxios      
     */
    initAxios(Vue) {
        const $Axios = Vue.prototype.axios;
        const interceptors = $Axios.interceptors;
        let self = this;
        // 添加请求拦截器         
        interceptors.request.use(function (config) {
            // 在发送请求之前做些什么             
            // 配置默认的头部信息             
            return config;
        }, function (error) {
            // 对请求错误做些什么          
            return Promise.reject(error);
        });
        // 添加响应拦截器        
        interceptors.response.use(function (response) {
            // 对响应数据做点什么            
            self.foramtXMLHttpRequest(response);
            return response;
        }, function (error) {
            // 对响应错误做点什么      
            return Promise.reject(error);
        });
    },
    
    /**      
     * 格式化 XML 的回调信息      
     * @method foramtXMLHttpRequest     
     * @param {Object} status 状态码     
     */
    foramtXMLHttpRequest(status) {
        console.log(status)
        // switch (XMLHttpRequest.status) {
        //    //非GET POST 请求无法进入success回调，故在此拦截status=200        
        //     case 200:        
        //         option.lock && utils.toggleLoading(false, option.module);      
        //         option.success && option.success(data);        
        //         resolve(utils.toObject(data));        
        //         return;        
        //     case 400:         
        //         option.alert && utils.showAlert('error.system.busy');       
        //         break;     
        //     case 401:       
        //         utils.timeOut();       
        //         break;     
        //     case 403:      
        //         option.alert && utils.showAlert('error.forbidden');
        //         break;      
        //     case 404:     
        //         option.alert && utils.showAlert('error.system.busy');         
        //         break;         
        //     case 406:        
        //         // 初始密码         
        //         reject({status: 406, data: utils.toObject(data)});         
        //         break;        
        //     case 409:       
        //         // 拒绝访问      
        //         utils.showAlert('error.operation.errorcode.NoVisitPriviledge');      
        //         utils.timeOut();        
        //         break;        
        //     case 500:        
        //         option.alert && utils.showAlert('error.system.busy');       
        //         break;        
        //     case 520:         
        //         break;        
        //     default: break;         
        // }    
    },
}