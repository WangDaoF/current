<template>
  <el-container>
<!--    头部导航区-->
    <el-header style="height: 35px">
      <NavMenu ></NavMenu>
    </el-header>
<!--    主体-->
<div id="main" >
  <!-- logo-->
  <img src="../assets/title.png" alt="">
  <SearchBox></SearchBox>
  <div>
    <router-view></router-view>
  </div>
      <div style="background-color:#e2e9ec; height: 20px;"></div>
  </div>
<!--    脚部-->
    <el-footer>
        <FooterShow></FooterShow>
    </el-footer>
    <UpdateEmail></UpdateEmail>
    <UpdatePhone></UpdatePhone>

  </el-container>
</template>

<script>
import NavMenu from "../components/header/NavMenu";
import SearchBox from "../components/main/SearchBox";
import FooterShow from "@/components/main/FooterShow";
import UpdateEmail from "@/components/user/UpdateEmail";
import UpdatePhone from "@/components/user/UpdatePhone";
export default {
  name: "MainPage",
  components: {
    UpdatePhone,
    UpdateEmail,
    FooterShow,

    NavMenu,SearchBox
  },
  mounted() {
    this.$bus.$on("search",(keyword)=>{
      console.log("我触发了")
      this.$router.push({
          name:'searchpage',
          query:{
            keyword:keyword
          }
      })

    })
  }


}
</script>

<style scoped>
#main{
  background: linear-gradient(#e5edef, #e4ebee);
}
SearchBox{
  float: right;
  position: relative;
  right: 0px;
}
img{
  width: 450px;
  margin-left: 20px;
}

.el-header,.el-footer,#main{
  padding:0px 200px;
  margin: 0px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}


</style>