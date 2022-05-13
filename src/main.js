import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import router from './router/index'
import VueRouter from "vue-router";
import VueQriously from 'vue-qriously';
import axios from "axios";
Vue.use(VueQriously);


Vue.config.productionTip = false
//配置axios
Vue.prototype.$axios=axios
//配置全局的基本URL
Vue.prototype.$axios.defaults.baseURL='http://localhost:8081'

Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  beforeCreate() {
   Vue.prototype.$bus=this
  },
    created() {
      //读取store
        if ( JSON.parse(window.localStorage .getItem('store')).userAbout.isLogin) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(window.localStorage .getItem('store'))
                )
            )

        }
    },
    mounted() {
        //绑定页面刷新时事件
        window.addEventListener('beforeunload', () => {
            // document.documentElement.scrollTop=0;
            window.localStorage.setItem('store', JSON.stringify(this.$store.state))
        })
        window.onunload=function (){
            document.documentElement.scrollTop=0;
        }

    },
    store:store,
    router:router

}).$mount('#app')

