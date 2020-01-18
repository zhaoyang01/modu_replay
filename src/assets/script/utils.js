/**
 * 工具类
 * @description 常用工具方法集合
 * @author zhaoY
 * @version 1.0.0
 */
import store from 'store';

export default {

    /**
     * 判定数据类型
     * @method type
     * @param {any} object 传入的数据类型
     * @returns {string} 数据类型，均为小写
     */
    type(object) {
        // IE9下调用toString.call(undefined)报错
        if (typeof object === 'undefined') {
            return 'undefined'
        }
        let map = {
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Boolean]': 'boolean',
            '[object Object]': 'object',
            '[object Array]': 'array',
            '[object RegExp]': 'regExp',
            '[object Function]': 'function',
            '[object Promise]': 'promise',
            '[object GeneratorFunction]': 'generatorFunction',
            '[object Null]': 'null',
        }
        let typeString = ''
        if (object instanceof Element) {
            typeString = 'element'
        } else {
            typeString = map[Object.prototype.toString.call(object)]
        }
        return typeString
    },

    /**
     * 显示 alert 弹窗
     * @method showAlert
     * @param {Boolean} flag = true 
     */
    showAlert(val = '', time = 2000){
        store.dispath('updateAlert', {val, time});
    },

    /**
     * 更新 loading 状态
     * @method updateLoadingStatus
     * @param {Boolean} flag = true 
     */
    updateLoadingStatus(flag = true){
        store.dispath('updateLoading', flag);
    },

    /**
     * 进入 timeOut 状态
     * @method timeOut
     * @param {Boolean} flag = true 
     */
    timeOut(){
        updateLoadingStatus(false);
        showAlert('请求超时！');
    },

    /**
     * 初级的深度拷贝
     * @param {Object} obj 待拷贝对象
     * @returns {Object}
     */
    deepClone(obj){
        return JSON.parse(JSON.stringify(obj));
    },

    /**
     * 去除字符串前后空格
     * @method trim
     * @param {String} str 字符串
     * @returns {String}
     */
    trim(str) {
        return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, '');
    },

    /**
     * 格式化路由参数
     * @method getQueryParam
     * @param {String} url = location.href 路由字段
     * @returns 
     */
     getQueryParam(url = location.href) {
        let hasParams = (/\?/).test(location.href),
            urlParams = {}, param = {},
            temp = '';

        // 判断有效性
        if(hasParams){
            // 获得有效的参数字段
            temp = decodeURIComponent( url.split('?')[1] );
            // 格式化排列参数
            temp.split('&').map( item => {
                param = item.split('=');
                urlParams(param[0]) = param[1];
            });
        }

        return urlParams;
    },

}
