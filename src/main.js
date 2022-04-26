import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import router from './router/index'
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  beforeCreate() {
   Vue.prototype.$bus=this
  },
    created() {
        if ( window.sessionStorage .getItem('store')) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(window.sessionStorage .getItem('store'))
                )
            )
        }
    },
    mounted() {
        window.addEventListener('beforeunload', () => {
            window.sessionStorage.setItem('store', JSON.stringify(this.$store.state))
        })
    },
    store:store,
    router:router

}).$mount('#app')

