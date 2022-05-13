<template>
  <el-drawer
      title="商品购买"
      :visible.sync="drawer"
      :direction="direction"
      size="1380px"
      >
    <div id="context">
      <div id="main" >
<!--  大展示图-->
        <CommodityImg :imgurl="baseUrl+`/img/`+imgs[index]"></CommodityImg>
<!--          缩略图-->
          <span  class="item" v-for=" (item,index) in imgs" :key="index" @mousemove="checked(index)"  >
            <img style="height: 100%;width: 100%"  :src="baseUrl+`/img/`+item" alt="" :class="checkClass(index)" >
          </span>
<!--收藏-->
       <div>

       </div>
      </div>
<!--      信息展示-->
      <div id="info" style="margin-left: 10px;float: right;">
        <div style=" display: flex; align-items: center;">
          <h1 style="font-size: 15px;margin: 0px;color: #755be7;display: inline-block;width: 90%;letter-spacing: 1.4pt;">{{ commodity.ctitle }}</h1>
          <span><i class="el-icon-star-off" id="collect"></i></span>
        </div>
          <!--基本信息展示-->
          <div id="base" >
            <div style="background-color:#fff2e8;height: 50px;display: flex;align-items: center;position: relative;">
              <span>价格</span>
              <span style="color: red;font-size: 25px">¥<span style="margin-left: 10px;">{{commodity.cprice}}</span></span>
              <span style="position: absolute;right: 10px;text-align: center;font-size: 15px">
                <span>{{ commodity.coutRepertory }}</span><br>
                <span style="font-size: 12px">交易成功</span>
              </span>
            </div>
            <div style="background-color:#fff9f5;">
              <span>优惠</span>
              <span>无</span>
            </div>
            <div>
              <span>付款方式</span>
              <span >
                 <div>
                  <el-radio v-model="payType" label="1" border size="medium">微信</el-radio>
                  <el-radio v-model="payType" label="2" border size="medium">支付宝</el-radio>
                </div>
              </span>
            </div>
            <div>
              <span>数量</span>
              <span>
                 <el-input-number v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
              </span></div>
            </div>
        <div style="height: 120px">
        </div >
          <div id="option"  >
            <el-button   id="buy">立即购买</el-button>
            <el-popconfirm
                title="确定要加入购物车吗？"
                @confirm="addShoppCart"
            >
              <el-button   id="add"  slot="reference">
                <i class="el-icon-shopping-cart-2"></i>
                加入购物车
              </el-button>
            </el-popconfirm>

          </div>
      </div>
    </div>
<!--    右方菜单-->
    <div style=";display: inline-block;float: right;width: 360px;height: 100%; ">
      <CommodityInfo />
    </div>
<!--    相关推荐-->
    <div style="display: inline-block;width: 940px;;height:285px;margin-left: 50px;border: 1px solid #e4e7ed;margin-top: 15px;">
      <h3 style="color: #755be7;margin-left: 10px;">相关推荐</h3>
      <RelevantCommodity></RelevantCommodity>
    </div>
  </el-drawer>
</template>

<script>
import CommodityInfo from "@/components/commodity/CommodityInfo";
import RelevantCommodity from "@/components/commodity/RelevantCommodity";
import axios from "axios";
import {re_address} from "@/config";
import CommodityImg from "@/components/commodity/CommodityImg";
import {mapState} from "vuex";

export default {
  name: "CommodityDisplay",
  components: {CommodityImg, RelevantCommodity, CommodityInfo},
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      //数量
      num:0,
      //支付方式
      payType: '1',
      //商品数据
      commodity:"",
      imgs:["def_p.jpg"],
      index: 0,
      isShow:true,
      topStyle:{transform:''},
      r_img: {},
    };
  },
  computed:{
    baseUrl(){
      return re_address
    },
    ...mapState('userAbout',['isLogin','user']),
  },
  mounted() {
      this.$bus.$on("showCommodityDisplay",(ccode)=>{
        this.index=0
        axios.get(re_address+"/Commodity/"+ccode).then(res=>{
          console.log("请求了商品编号为"+ccode+"的数据",res.data.data.commodity)
          this.commodity=res.data.data.commodity
          const val=JSON.parse(this.commodity.imgs)
          this.imgs=[]
          this.imgs.push(res.data.data.commodity.defImg)
          this.imgs.push(...val.imgs)
          console.log(this.imgs)
        })
          this.drawer=true
      })

  },
  methods:{
    //TODO 收藏方法
    collect(){
      console.log("收藏了商品===>")
    },
    checked(index){
      this.index=index
    },
    checkClass(index){
      return  this.index==index?"check":""
    },
    addShoppCart(){
      const  formData=new FormData();
      console.log(this.commodity)
      formData.append("uId",this.user.uid)
      formData.append("number",this.num)
      formData.append("cCode",this.commodity.ccode)
      this.$axios.post("/shoppCart",formData).then(res=>{
        console.log("用户添加了商品到购物车",res.data)
        this.$bus.$emit("CartCount")
      })

      //消息提示框
      this.$notify({
        title: '恭喜你加入购物车成功',
        dangerouslyUseHTMLString: true,
        message: '<a >点我跳会转到购物车页面</a>',
        onClick:function (){
           this.$bus.$emit('ShowShippPage')
        },
        type: 'success'
      });

    },

  }
}
</script>

<style scoped>
.check{
  border: 2px solid #755be7;
}
.item{
  width: 60px;height: 60px;
  display: inline-block;
  margin-right: 15px
}
#collect{
  font-size: 25px;
  color: #755be7;
  text-align: right;

}
#collect:hover{
  color: #ffa000;
}
#buy{
  width: 120px;
  background-color:#409eff;
  color: #ecf5ff;
  font-size: 16px
}
#add{
  width: 170px;
  background-color:#ffa000;
  color: white;
  font-size: 16px
}
#base>div>span:last-child{
  display: inline-block;
  width: auto;

}
#base>div>span:first-child{
  width: 80px;
}
#base{
  margin-top: 15px;
  font-size: 13px;
  color: #a5adb5;
}
#base>div{
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 55px;

}
#context{
  width: 940px;
  height: auto;
  margin-left: 50px;
  display: inline-block;
  padding: 20px;
  border: 1px solid #e4e7ed;
}
#main{
  display:inline-block;
  width: 418px;
  height: auto;
}
#info{
  display:inline-block;
  width: 460px;
  height: 418px;

}
</style>