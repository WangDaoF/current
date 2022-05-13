<template>
  <div class="item-shipp">
                <span style="width: 220px;">
                  <el-checkbox v-model="isChecked" @change="check()" style="margin-left: 30px"> </el-checkbox>
                  <span style="width: 70px;height: 70px;display: inline-block;margin-left: 15px" @click="showCom(item.ccode)">
                      <img style="height: 100%;width: 100%" :src="imgurl" alt="">
                  </span>
                </span>
    <span style="width: 400px;">{{ item.commodity.ctitle }}</span>
    <span style="width: 100px;">{{ item.commodity.cPrice }}</span>
    <span style="width: 100px;">
                    {{ item.number }}
                </span>
    <span style="width: 200px;">
                  {{ (item.number*item.commodity.cPrice).toFixed(2) }}
                </span>
    <span style="width: 50px;">
      <el-popconfirm
          title="确定要删除吗？"
          @confirm=deleteCart(item.uid,item.ccode)
      >
        <el-link type="danger" slot="reference" >删除</el-link>
      </el-popconfirm>

    </span>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {re_address} from "@/config";

export default {
  name: "ShippItem",
  props:["item"],
  data() {
    return {
      isChecked: false,
      data:[]
    }
  },
  methods: {
    check() {
      this.data.isSelect=!this.data.isSelect
    },
    deleteCart(uid,ccode){
      this.$axios.delete("/shoppCart/"+this.user.uid+"/"+ccode).then(res=>{
         this.$bus.$emit("updateCart", res.data.data.cart)
        console.log("用户删除了购物车的一条记录")
        this.$bus.$emit("CartCount")
      })
    },
    showCom(ccode){
      this.$bus.$emit('showCommodityDisplay',ccode)
    }
  },
  mounted() {
    this.data=this.item
    console.log(this.data)
  },
  computed:{
    ...mapState('userAbout',['isLogin','user']),
    imgurl(){
      return re_address+"/img/"+this.item.commodity.defImg
    }
  }
}
</script>

<style scoped>
.item-shipp{
  height: 100px;
  border-bottom: 1px solid #e8e8e8;
  margin-top: 15px;
}
.item-shipp:last-child{
  border-bottom:none;
}
.el-checkbox,span{
  vertical-align:top;
  margin-top: 5px;

}
.item-shipp>span{
  display:inline-block;
}
.item-shipp>span:not(:first-child){
  margin-top: 20px;
}

</style>