/*
 * @Description: for modu TRPG
 * @Author: 红糖（1095263376）
 * @Date: 2019-12-31 21:17:19
 */
import Vue from "vue";
import Vuex from 'vuex';
const home = () => import('@base/page/home/vue'); /* webpackChunkName: 'community-control' */ 

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
    // 更新当前页面
    updateLoading(state, flag){
        state.start = index
    },

    // 更新数据总量
    updateTotalCount(state, totel){
        state.totalCount = totel;
    },
};

const actions = {
};

const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    modules: {
        home,
    }
});

export default store;
