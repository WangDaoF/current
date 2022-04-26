<template>
  <div>
    <div v-show="typeform===1" id="login">
      <el-form ref="form1" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formData.phone" placeholder="手机号" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="formData.name" placeholder="用户名称" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" placeholder="密码" clearable show-password
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="formData.sex" size="small">
            <el-radio v-for="(item, index) in sexOptions" :key="index" :label="item.value"
                      :disabled="item.disabled">{{item.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formData.email" placeholder="邮箱,非必填" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm('form1')">提交</el-button>
          <el-button @click="resetForm('form1')">重置</el-button>
          <el-button @click="cancelForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
<div v-show="typeform===0" id="sign">

    <div>
      <el-form  :model="loginUser"  size="medium" label-width="100px" ref="form2">
        <el-form-item label="账号" prop="phone">
          <el-input v-model="loginUser.account" placeholder="手机号码/邮箱" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="name">
          <el-input v-model="loginUser.password" placeholder="请输入密码" clearable show-password
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm('form2')">提交</el-button>
          <el-button @click="cancelForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>

</div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapMutations} from "vuex";
export default {
  components: {},
  props: ["typeform"],
  data() {
    return {
      loginUser:{
        account:'',
        password:""
      },
      formData1: {
        phone: "",
        name: "",
      },
      rules1: {
        phone: [{
          required: true,
          message: '手机号码/邮箱',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
      },
      formData: {
        phone: "",
        name: undefined,
        password: undefined,
        sex: 1,
        email: undefined,
        field109: "待定",
      },
      rules: {
        phone: [{
          required: true,
          message: '错误的手机号码格式',
          trigger: 'blur'
        }, {
          pattern: /^1[34578]\d{9}$/,
          message: '错误的手机号码格式',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '用户名称',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '至少为一个字母和一个数字8位密码',
          trigger: 'blur'
        }, {
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          message: '至少为一个字母和一个数字8位密码',
          trigger: 'blur'
        }],
        sex: [{
          required: true,
          message: '性别不能为空',
          trigger: 'change'
        }],
        email: [{
          pattern: /^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
          message: '错误的邮箱格式',
          trigger: 'blur'
        }],
      },
      field109Action: 'https://jsonplaceholder.typicode.com/posts/',
      field109fileList: [],
      sexOptions: [{
        "label": "男",
        "value": 1
      }, {
        "label": "女",
        "value": 0
      }, {
        "label": "不愿透漏",
        "value": -1
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm(ref) {
      console.log("登录用户")
      //登录用户
      if(this.typeform==0){
        if(!this.loginUser.account||!this.loginUser.password){
            this.warning()
             return;
        }
        let fromData = new FormData()
        fromData.append('account', this.loginUser.account)
        fromData.append('password', this.loginUser.password)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.post("http://localhost:8081/login",fromData,config).then(res=>{
          console.log('登录用户请求返回数据',res.data)
          if(res.data.uname==='你好'){
            this.failed();
            return
          }
          this.setUser(res.data)
            this.success()

           this.$bus.$emit("showSignForm",this.typeform)
        })
        return;
      }
      //注册用户
      this.$refs[ref].validate(valid => {
        if (!valid) return
        console.log("注册用户==>",this.formData)
        let fromData = new FormData()
        fromData.append('uPhone', this.formData.phone)
        fromData.append('uPassword', this.formData.password)
        fromData.append('uSex', this.formData.sex)
        fromData.append('uName', this.formData.name)
        if(this.formData.email!=undefined){
          fromData.append('uEmail', this.formData.email)
        }

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.post("http://localhost:8081/user",fromData,config).then(
            res=>{
              console.log('注冊用戶请求==>返回数据:',res.data)
              if(res.data.uName==="你好"){
                this.repetition()
                return
              }
              this.setUser(res.data)
              this.successSign()
              this.$bus.$emit("showSignForm",this.typeform)
            }

        )
      })
    },
    resetForm(ref) {
      this.$refs[ref].resetFields()
    },
    cancelForm(){
       this.$bus.$emit('showSignForm')
    },
    ...mapMutations('userAbout',['setUser']),
    success() {
      this.$notify({
        title: '成功',
        message: '登录成功',
        type: 'success'
      });

    },
    failed() {
      this.$notify.error({
        title: '错误',
        message: '账号或密码错误'
      });
    },
    warning() {
      this.$notify({
        title: '警告',
        message: '账号或密码不得为空',
        type: 'warning'
      });
    },
    successSign() {
      this.$notify({
        title: '成功',
        message: '恭喜你注册成功',
        type: 'success'
      });
    },
    repetition(){
      this.$notify({
        title: '警告',
        message: '该账号或邮箱已绑定账号',
        type: 'warning'
      });
    }
  }
}

</script>
<style>

</style>
