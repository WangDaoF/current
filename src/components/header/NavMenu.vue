<template>
  <div id="menu">
    <ol id="left">
      <li >
        <UserSelect></UserSelect>
      </li>
    </ol >
      <ol id="right">
        <li >
          <el-dropdown>
            <span class="el-dropdown-link">
              我的淘宝<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>已买到的宝贝</el-dropdown-item>
              <el-dropdown-item>我的足迹</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
          <li >
              <i class="el-icon-shopping-cart-2"></i> 购物车
          </li>
          <li>
            <i class="el-icon-star-off"></i> 收藏夹
          </li>
          <li >
             商品分类
          </li>
          <li>
            <span v-if="!this.user.mid">免费开店</span>
            <span v-else>我的店铺</span>
          </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              千牛卖家中心<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>开店入住</el-dropdown-item>
              <el-dropdown-item>已卖出的宝贝</el-dropdown-item>
              <el-dropdown-item>出售中的宝贝</el-dropdown-item>
              <el-dropdown-item>卖家服务市场</el-dropdown-item>
              <el-dropdown-item>卖家培训中心</el-dropdown-item>
              <el-dropdown-item>体检中心</el-dropdown-item>
              <el-dropdown-item>电商学习中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              联系客服<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>消费者客服</el-dropdown-item>
              <el-dropdown-item>卖家客服</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ol>
  </div>

</template>

<script>


import UserSelect from "@/components/header/UserSelect";
import {mapState} from "vuex";
export default {
  name: "NavMenu",
  components: {UserSelect},
  data() {
    return {
      dialogFormVisible:false,
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods:{
    show(){
       this.$bus.$emit("showSign")
    }
  },
  computed:{
    ...mapState('userAbout',['isLogin','user']),
  }



}
</script>

<style scoped>
li:hover{
  cursor:pointer;
  color: #755be7;
}
ol>li{
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #333;
  font-size: 12px;
}
.el-icon-arrow-down ,li{
  font-size: 12px;
  color: #333;
}
#menu{
  height: 30px;
  overflow: hidden;
}
ol{
  display: inline-block;
  position: relative;
  top: -10px;
}
#right{
  float: right;
}

</style>