<template>
  <el-dropdown @command="userOption">
  <span class="el-dropdown-link" @click="login(isLogin)" style="color: #755be7">
   {{type}} <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
    <el-dropdown-menu slot="dropdown"  >
        <div v-show="isLogin">
          <el-dropdown-item>账号管理</el-dropdown-item>
          <el-dropdown-item :command="0">退出</el-dropdown-item>
        </div>
        <div v-show="!isLogin" style="font-size: 12px;width: 100px">
          您还没有登录...
        </div>
    </el-dropdown-menu>
    <UserDrawer></UserDrawer>
  </el-dropdown>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import UserDrawer from "@/components/user/UserDrawer";

export default {
  name: "UserSelect",
  components: {UserDrawer},
  computed:{
    type(){
      if(this.isLogin===false){
        return "亲,请登录"
      }
      return this.user.uname
    },
    ...mapState("userAbout",["isLogin","user","notUser"])
  },
  methods:{
    login(a){
      if(a){return}
      console.log()
      this.$bus.$emit('showSignForm',0)
    },
    userOption(type){
      if(type===0) {
        console.log("用户退出!")
        this.setUser(this.notUser)
        this.isLogoin();
      }else{
        console.log("打开用户管理")
         this.$bus.$emit("openUserDrawer")
      }
    },
    ...mapMutations('userAbout',['setUser','isLogoin']),
  }

}
</script>

<style scoped>

</style>