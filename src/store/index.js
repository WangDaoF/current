import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex)
const userAbout = {
    namespaced: true,
    actions: {

    },
    mutations: {
        isLogoin(state) {
            state.isLogin=!state.isLogin
        },
        setUser(state,val){
            console.log("我被修改了")
            state.isLogin=true
            state.user=val
        }
    },
    state: {
        isLogin: false,
        user:{
            uName:'你好',
            uHeadUrl:'',
            shippAddress:{
                consigneeName:"",
                postalCode: "",
                shippAddress:{
                    consigneeName:"",
                    phone:"",
                    postalCode:"",
                    province:"",
                    city:"",
                    county:"",
                    detached:"",
                }
            }
        },
        notUser:{
            uname:'你好',
            uheadUrl:'',
            shippAddress:{
                consigneeName:"",
                postalCode: "",
                shippAddress:{
                    consigneeName:"",
                    phone:"",
                    postalCode:"",
                    province:"",
                    city:"",
                    county:"",
                    detached:"",
                }
            }
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