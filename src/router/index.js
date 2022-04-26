import VueRouter from "vue-router";
import SearchPage from "@/components/currentsearch/SearchPage";
import MainShow from "../components/main/MainShow.vue";

export default new VueRouter({
    routes: [
        {
            //没写就是任意路由都是定向这个
            path:'',
            //重定向
            redirect:'/mainshow'
        },
        {
            path: '/searchpage',
            name:'searchpage',
            component: SearchPage,
            props({query}){
                return{
                    keyword:query.keyword
                }
            }
        },
        {
            path: '/mainshow',
            name:'MainShow',
            component: MainShow,
        }
    ]
})