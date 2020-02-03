/**
 * @Description: for modu TRPG
 * @Author: 红糖（1095263376）
 * @Date: 2019-12-31 21:17:19
 */
import Vue from "vue";
import Vuex from 'vuex';
const home = () => import('@/pages/home/store'); 

Vue.use(Vuex);

const state = {
    // loading 状态 
    loading: false,
    // 弹出框状态
    alert: false,
    // 弹出框内容
    alertValue: ''
}

const getters = {
};

const mutations = {
};

const actions = {
};


export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    modules: {
        home,
    }
});
