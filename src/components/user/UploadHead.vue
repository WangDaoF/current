<template>
  <div >
    <el-link type="primary" @click="openInput()">更换头像</el-link>
        <input v-show="false"  @change="uploadFile($event)" type="file" ref="headInput">
  </div>
</template>

<script>

import axios from "axios";
import {mapMutations, mapState} from "vuex";

export default {
  name: "UploadHead",
  methods: {
    openInput(){
        this.$refs['headInput'].click();
    },
    uploadFile (el) {
      if (!el.target.files[0].size) return; // 如果文件大小为0，则返回
      if (el.target.files[0].type.indexOf('image') === -1) { //如果不是图片格式
        console.log('请选择图片文件');
      } else {
        const uid = this.user.uId; //后台需要的参数
        const formData = new FormData();  // 创建一个formdata对象
        formData.append('photo', el.target.files[0]);
        formData.append('uId', uid);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.post('http://localhost:8081/uploadHead',formData,config).then(res=>{
          console.log(res.data)
          this.setUser(res.data)
        })

      }
    },
    ...mapMutations('userAbout',['setUser']),
  },
  mounted() {
    this.$bus.$on("showUploadHead",()=>{
      this.dialogVisible=true
    })
  },
  computed:{
    ...mapState("userAbout",['user'])
  }
}
</script>

<style scoped>
#option el-button{
}
 img{
  width: 100%;
  height: 100%;
}
  .avatar-uploader n {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

</style>