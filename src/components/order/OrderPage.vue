<template>
  <el-drawer
      title="我的订单"
      :visible.sync="drawer"
      size="70%"
      >
      <div id="root">
        <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect" :default-active="activeIndex" >
          <el-menu-item index="1" >所有订单</el-menu-item>
          <el-menu-item index="2" >代付款</el-menu-item>
          <el-menu-item index="3">待发货</el-menu-item>
          <el-menu-item index="4">待收货</el-menu-item>
          <el-menu-item index="5">待评论</el-menu-item>
        </el-menu>
        <el-input v-model="keyword" placeholder="请输入商品标题或者订单号进行搜索"  class="KeyWordInput"></el-input>
        <el-button type="primary" plain>主要按钮</el-button>
        <span style="font-size: 14px;cursor: pointer" @click="switchStatus" >更多筛选条件</span>
        <!--更多筛选条件-->
        <div class="filtrate" v-show="filtrate">
        <span>订单类型
        <el-select v-model="orderstatus" placeholder="请选择">
            <el-option
                v-for="item in order_type"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </span>
          <span>交易状态
        <el-select v-model="orderstatus" placeholder="请选择">
            <el-option
                v-for="item in order_status"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </span>
        </div>
        <div class="context" style="margin-top: 10px;">
          <div class="head">
            <span style="width: 600px;">宝贝</span>
            <span style="width: 100px;">单价</span>
            <span style="width: 100px;">数量</span>
            <span style="width: 200px;">实付款</span>
            <span style="width: 150px;">交易状态</span>
            <span style="width: 100px;">交易操作</span>
          </div>
          <div style="height: 30px"></div>
            <OrderItem></OrderItem>
        </div>
      </div>
  </el-drawer>
</template>

<script>
import {mapState} from "vuex";
import OrderItem from "@/components/order/OrderItem";

export default {
  name: "OrderPage",
  components: {OrderItem},
  data() {
    return {
      drawer: false,
      activeIndex: '1',
      keyword:'',
      filtrate:true,
      order_type: [{
        value: '全部',
        label: '全部'
      }, {
        value: '衣服订单',
        label: '衣服订单'
      }, {
        value: '手机订单',
        label: '手机订单'
      }],
      ordertype: '',
      order_status: [{
        value: '全部',
        label: '全部'
      }, {
        value: '交易成功',
        label: '交易成功'
      }, {
        value: '交易取消',
        label: '交易取消'
      }, {
        value: '买家已付款',
        label: '买家已付款'
      }, {
        value: '卖家已发货',
        label: '卖家已发货'
      }],
      orderstatus:""

    }

  },
  methods: {
    switchStatus(){
      this.filtrate=!this.filtrate
    },
    show() {
      console.log(1)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  computed:{
    ...mapState('userAbout',['isLogin','user']),
  },
  mounted() {
    this.$bus.$on("ShowOrderPage",()=>{
        this.drawer=!this.drawer
    })
  }

}
</script>

<style scoped>
.head{
  height: 50px;
  margin-top: 10px;
  font-size: 15px;
  border: 1px solid #e8e8e8;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
}
.head > span{
  display: inline-block;
  border: 1px solid red;
  text-align: center;
  margin-left: 0px;
}
.el-menu-demo > .el-menu-item{
  font-size: 16px;
}
.KeyWordInput{
  width: 300px;
  margin-left: 20px;
  margin-top: 20px;
}
.filtrate{

  margin-top: 20px;
}
span{
  margin-left: 20px;
}

</style>