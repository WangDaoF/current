<template>
  <el-drawer
      title="账号管理"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
    <div id="head" style="margin-left: 40%" >
      <el-avatar :src="headUrl" :size="100"></el-avatar>
      <br>
       <UploadHead style="margin-left: 20px"></UploadHead>
    </div>
   <div id="userInfo">
        <h3>您的基本信息</h3>
     <div id="userInfo_basic">
       <ul>
         <li>
           <span class="title">会&nbsp;员&nbsp;名:</span>
           <span class="info" v-show="!isUpName" >{{user.uname}}</span>
           <span class="info" v-show="isUpName"><input type="text" ref="nameInput" style="height: 20px;font-size: 15px" @blur="updateName" @keyup.enter="blurName" /></span>
           <span class="operation" @click="upName">修改名称</span>
         </li>
         <li>
           <span class="title">登&nbsp;录&nbsp;邮&nbsp;箱:</span><span class="info">{{user.uemail}}</span>
           <span class="operation" @click="showEmailForm">{{emailOperation}}</span>
         </li>
         <li>
           <span class="title">绑&nbsp;定&nbsp;手&nbsp;机:</span>
           <span class="info">{{user.uphone}}</span>
           <span class="operation" @click="UpdatePhone">修改手机</span></li>
       </ul>
     </div>
   </div>
  </el-drawer>

</template>

<script>
import {mapMutations, mapState} from "vuex";
import axios from "axios";
import UploadHead from "@/components/user/UploadHead";

export default {
  name: "UserDrawer",
  components: {UploadHead},
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      isUpName:false,

    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(() => {});
    },
    upName(){
      this.isUpName=!this.isUpNam
      this.$refs['nameInput'].value=this.user.uname
      this.$nextTick(function (){
        this.$refs['nameInput'].focus()
      })
    },
    updateName(){
      this.isUpName=!this.isUpName
      let fromData = new FormData()
      fromData.append('uId', this.user.uid)
      if(!this.$refs['nameInput'].value){
        this.$message.error('用户名不得为空!');
        return
      }
      fromData.append('uName', this.$refs['nameInput'].value)
      console.log("修改用户==>",this.formData)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.put("http://localhost:8081/user",fromData,config).then(
          res=>{
            console.log('修改用戶请求==>返回数据:',res.data)
            this.setUser(res.data)
          }

      )
    },
    UpdatePhone(){
     this.$bus.$emit('showUpdatePhoneForm')
    },
    blurName(){
      this.$refs['nameInput'].blur();
    },
    showEmailForm(){
      this.$bus.$emit('showUpdateEmailForm')
    },
    ...mapMutations('userAbout',['setUser']),

  },
  computed:{
    ...mapState("userAbout",['user']),
    emailOperation(){
      if(this.user.uemail==null||this.user.uemail==''){
        return '添加邮箱'
      }
      return '修改邮箱'
    },
    headUrl(){
      if(!this.user.uheadUrl){
        return 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }
      var url="http://localhost:8081/"+this.user.uheadUrl;
      return url;
    }
  },
  mounted() {
    this.$bus.$on("openUserDrawer",()=>{
      this.drawer=true
    })
    console.log(this.headUrl)
  },

}
</script>

<style scoped>
#userInfo{
  border: 1px solid #3b2e74;
  width: 95%;
  margin: 2.5%;
}
#userInfo h3{
  margin-left: 15px;
  color: #3b2e74;
}
#userInfo_basic{
  height: 100px;
  margin-left: 30px;
}
#userInfo_basic *{
  margin: 0px;
  padding:0px;
}
#userInfo_basic li{
  list-style: none;
  line-height: 30px;
  font-size: 16px;
}
.title{
  width: 90px;
  display: inline-block;
  color: #3b2e74;
}
.info{
  display: inline-block;
  width: 210px;
}
.operation{
  color: #1b66b3;
}
.operation:hover{
color: #755be7;
}

</style>