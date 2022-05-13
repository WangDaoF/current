<template>
  <el-drawer
      title="购物车"
      :visible.sync="drawer"
      :direction="direction"
      size="70%"
      >
      <div id="root">
          <div id="title">
            <div id="left">
              <span>购物车</span><span>(全部7)</span>
            </div>
            <div id="right">
              <span>已选商品</span><span>(不含运费)</span><span style="margin-left: 10px;font-size: 20px;color: red">0.00</span>
              <el-button type="primary" round size="medium" style="margin-left: 10px;position: relative;top: -5px">结算</el-button>
            </div>
          </div>
        <div id="head">
          <span style="width: 250px;"><el-checkbox v-model="checkAll" style="margin-left: 30px">全选</el-checkbox></span>
          <span style="width: 400px;">商品信息</span>
          <span style="width: 100px;">单价</span>
          <span style="width: 100px;">数量</span>
          <span style="width: 200px;">总金额</span>
          <span style="width: 100px;">操作</span>
        </div>
<!--        循环遍历店铺-->
        <div class="item" v-for=" (d,index) in data" :key="index">
          <div class="item-head" style="margin-top: 20px;">
            <span style="width: 250px;"><el-checkbox v-model="checked" style="margin-left: 20px">{{ d["shop"].shopName }}</el-checkbox></span>
          </div>
<!--          循环遍历该店铺的商品-->
          <div class="item-context" v-for="(item,index) in d['cart']" :key='index'>

            <ShippItem :item="item"></ShippItem>
          </div>
        </div>
      </div>
  </el-drawer>
</template>

<script>
import {mapState} from "vuex";
import ShippItem from "@/components/user/ShippItem";

export default {
  name: "ShippingPage",
  components: {ShippItem},
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      checked:false,
      checkAll:false,
      data:[]
    };
  },
  computed:{
    ...mapState('userAbout',['isLogin','user']),
    isSelect(val){
      console.log(val)
      return true
    }
  },
  mounted() {
    this.$bus.$on("ShowShippPage",()=>{
        this.drawer=!this.drawer;
        this.$axios("/shoppCart/"+this.user.uid).then(res=>{
          console.log("查询了购物车数据",res.data)

          this.data=res.data
        })
    })
    this.$bus.$on("updateCart",(carts)=>{
      this.data=carts
    })

  }
}
</script>

<style scoped>

.item-context{
  margin: 0px 30px;
  border-radius: 20px;
  height: auto;
  background-color: #f5f5f5;
}
span{
  display:inline-block;
}
#head{
  height: 40px;
  padding-top: 10px;
  font-size: 15px;
}
#right{
  display: inline-block;
  font-size: 15px;
  color: #8c8a8c;
}
#left{
  width: 880px;
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
  display: inline-block;
}
#title{
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #755be7;
}
#root{
  margin: 0px 10px;
  border: 1px solid #755be7;
  height:100%;
  border-radius: 20px 20px 0px 0px;
}
</style>