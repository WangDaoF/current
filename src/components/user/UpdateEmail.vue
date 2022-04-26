<template>
<div >
  <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      title="修改邮箱"
      :show-close="false"
      >
    <el-form ref="emailForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="邮箱">
          <el-input v-model="formData.email" placeholder="邮箱地址" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="手机验证码" >
        <el-input placeholder="当你点击发送短信后我们会向你绑定的手机号发送短信" v-model="formData.code" :style="{width: '80%'}" ref="code"/><el-button plain style="margin-left: 10px">发送短信</el-button>
      </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="upEmail">提交</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
import axios from "axios";
import {mapMutations, mapState} from "vuex";

export default {
  name: "UpdateEmail",
  data() {
    return {
      dialogVisible: false,
      formData: {
        email: "",
        code:''
      },
      rules: {
        email: [{
          required: true,
          pattern: /^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
          message: '错误的邮箱格式',
          trigger: 'blur'
        }],
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
    },
    warning() {
      this.$notify({
        title: '警告',
        message: '邮箱已被占用',
        type: 'warning'
      });
    },
    upEmail(){
      if(!this.formData.code){this.$message.error('验证码不得为空!');return}
      this.formData.code=''
      this.$refs['emailForm'].validate(valid=>{
        if (!valid) return
        console.log("修改了邮箱,新邮箱为:",this.formData.email)
        let fromData = new FormData()
        fromData.append('uId', this.user.uid)
        fromData.append('uEmail', this.formData.email)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.put("http://localhost:8081/user",fromData,config).then(
            res=>{
              console.log('修改用戶请求==>返回数据:',res.data)
              if(!res.data){
                  this.warning()
                  return
              }
              this.setUser(res.data)
              this.cancel()
              this.$message({
                message: '恭喜你，修改成功',
                type: 'success'
              });
            }
        )


      })
    },
    ...mapMutations('userAbout',['setUser']),
    cancel(){
      this.dialogVisible=false
    }
  },
  mounted() {
    this.$bus.$on("showUpdateEmailForm",()=>{
      this.dialogVisible=true
    })
    this.formData.email=this.user.uemail
  },
  computed:{
    ...mapState('userAbout',['isLogin','user'])
  }
}
</script>

<style scoped>

</style>