<template>
<div >
  <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      title="修改手机号"
      :show-close="false"
      >
    <el-form ref="emailForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="新手机号">
          <el-input v-model="formData.phone" placeholder="手机号" clearable :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="手机验证码" >
        <el-input placeholder="当你点击发送短信后我们会向你原绑定的手机号发送短信" v-model="formData.code" :style="{width: '80%'}" ref="code"/><el-button plain style="margin-left: 10px">发送短信</el-button>
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
  name: "UpdatePhone",
  data() {
    return {
      dialogVisible: false,
      formData: {
        phone: "",
        code:''
      },
      rules: {
        phone: [{
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
    upEmail(){
      if(!this.formData.code){this.$message.error('验证码不得为空!');return}
      this.formData.code=''
      this.$refs['emailForm'].validate(valid=>{
        if (!valid) return
        console.log("修改了手机号,新手机号为:",this.formData.phone)
        let fromData = new FormData()
        fromData.append('uId', this.user.uid)
        fromData.append('uPhone', this.formData.phone)
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
    },
    warning() {
      this.$notify({
        title: '警告',
        message: '手机号已被占用',
        type: 'warning'
      });
    },
  },
  mounted() {
    this.$bus.$on("showUpdatePhoneForm",()=>{
      this.dialogVisible=true
    })
  },
  computed:{
    ...mapState('userAbout',['isLogin','user'])
  }
}
</script>

<style scoped>

</style>