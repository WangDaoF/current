import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex)
const userAbout = {
    namespaced: true,
    actions: {

    },
    mutations: {
        isLogoin(state) {
            console.log("mutations被调用了")
            state.isLogin=!state.isLogin
        },
        setUser(state,val){
            state.isLogin=true
            state.user=val
        }
    },
    state: {
        isLogin: false,
        user:{
            uName:'你好',
            uHeadUrl:''
        },
        notUser:{
            uname:'你好',
            uheadUrl:''
        }
    },
    getters: {

    }
}

export default new vuex.Store({
    modules: {
        userAbout
    }
})