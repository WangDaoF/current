<template>
  <div id="root">
    <div>
      <div id="head" >
        <el-avatar :src="headUrl" :size="70"></el-avatar>
        <br>
          Hi! {{this.user.uname}}
      </div>
      <div id="option" >
        <transition-group
            name="animate__animated animate__bounce"
            leave-active-class="animate__fadeOutDown"
        >
          <div v-show="!isLogin" style="width: 100%"   key="1" id="options">
            <el-button type="primary" size="small" plain @click="showSignForm(0)"  >登录</el-button>
            <el-button type="primary" size="small" plain @click="showSignForm(1)"  >注册</el-button>
            <el-button type="primary" size="small" plain>开店</el-button>
          </div>
        </transition-group>


        <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeIn">
          <div  :key="1" v-show="isLogin" id="showState">
            <div>
              <div>0</div>
              <span>购物车</span>
            </div>
            <div>
              <div>0</div>
              <span>待收货</span>
            </div>
            <div>
              <div>0</div>
              <span>代发货</span>
            </div>
            <div>
              <div>0</div>
              <span>待付款</span>
            </div>
            <div>
              <div>0</div>
              <span>待评价</span>
            </div>
          </div>
        </transition-group>
      </div>
      <div id="img">
        <img src="../../assets/images/pic_016.png" alt="">
      </div>

    <div id="bulletin">
      <div><span style="font-size: 15px;color: #755be7;margin: 0px 8px 0px 0px ;">公告</span>新鲜事都在这~</div>
      <ul>
        <li><span>规则</span>疫情影响地区发货时间要求调整公告</li>
        <li><span>热点</span>关于推动"清明"账号乱象专项整治的通知</li>
        <li><span>热点</span>打击浏览造假、黑公关、网络水军公告</li>
      </ul>
    </div>
      <div id="foot">
          <span>
            <i class="el-icon-star-off"></i><br>
            收藏的的宝贝
          </span>
        <span>
            <i class="el-icon-goods"></i><br>
            买过的店铺
          </span>
        <span>
            <i class="el-icon-suitcase-1"></i><br>
            收藏的店铺
          </span>
        <span>
            <i class="el-icon-goods"></i><br>
            我的足迹
          </span>

      </div>

    </div>
    <SignInForm></SignInForm>
  </div>
</template>

<script>
import SignInForm from "@/components/user/SignInForm";
import 'animate.css'
import {mapState} from "vuex";
export default {
  name: "RightMenu",
  components: {SignInForm},
  methods:{
    showSignForm(typeform){
      this.$bus.$emit('showSignForm',typeform)
    }
  },
  computed:{
    ...mapState('userAbout',['isLogin','user']),
    headUrl(){
      if(!this.user.uheadUrl){
        return 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }
      var url="http://localhost:8081/"+this.user.uheadUrl;
      return url;
    }
  }
}
</script>

<style scoped>
#foot{
  height: 80px;
  margin-top: 60px;
}
#showState{
  font-size: 14px;
  color: rebeccapurple;
  width: 100%;
  margin-top: 20px;

}
#showState > div{
  display: inline-block;
  width: 17%;
  color: #ffa000;
}
#showState > div:hover {
  cursor: pointer;
}
#showState > div:hover span{
  color: red;
}
#showState span{
  margin-top: 10px;
  color: #755be7;
}
#foot>span{
  display: inline-block;
  width: 25%;
  text-align: center;
  height: 100%;
  font-size: 3px;
}
#foot>span>i{
  font-size: 25px;
  margin-bottom: 5px;
}
#foot>span:hover i{
  cursor:pointer;
  color: #409EFF;
}
#foot>span:hover{
  cursor:pointer;
}
#root{
  background-color: #f3f3f3;
  border-radius: 12px;
  margin-left: 30px;
  height: 560px;
  width: 320px;

}
#bulletin{
  font-size: 12px;
  margin-left: 20px;
  margin-top: 20px;
}
#img{
  width: 280px;
  height: 130px;
  border-radius: 12px;
  overflow: hidden;
  margin: auto;
  margin-top: 15px;
}
img{
  width: 100%;
  height: 100%;
}
#head{
  text-align: center;
  position: relative;
  top: 10px;
}
#option{
  text-align: center;
  margin-top: 20px;
  /*标记*/
  height: 30px;
  width: 100%;
  margin-bottom: 20px;
}
#options *{
  width: 80px;
}
ul{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none;
  margin-top: 12px;
  margin-left: 8px;
}
li:hover{
  cursor:pointer;
  color: #409EFF;
}
li span{
  color: #755be7;
  margin-right: 8px;
  background-color: #ecf5ff;

}

</style>