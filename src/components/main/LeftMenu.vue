<template>
<div id="root">
  <ul>
    <h3 style="color: #755be7;text-align: center">主题市场</h3>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">女装</a>/  <a href="">内衣</a>/ <a href="">家居</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">女鞋</a>/  <a href="">男鞋</a>/ <a href="">箱包</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">母婴</a>/ <a href="">童装</a>/ <a href="">玩具</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">男装</a>/ <a href="">运动户外</a> </li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">美妆</a>/ <a href="">彩妆</a>/ <a href="">个护</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">手机</a>/ <a href="">数码</a>/ <a href="">企业礼品</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">大家电</a>/ <a href="">生活电器</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">零食</a>/ <a href="">生鲜</a>/ <a href="">茶酒</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">厨具</a>/ <a href="">收纳</a>/ <a href="">清洁</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">家纺</a>/ <a href="">家饰</a>/ <a href="">鲜花</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">图书音像</a>/ <a href="">文具</a> </li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">医疗保健</a>/ <a href="">进口</a> </li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">汽车</a>/ <a href="">二手车</a>/ <a href="">用品</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">房产</a>/ <a href="">装饰家具</a>/ <a href="">建材</a></li>
    <li><i class="el-icon-monitor" style="color: #755be7"></i><a href="">手表</a>/ <a href="">眼睛</a>/ <a href="">珠宝饰品</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "LeftMenu"
}
</script>

<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
#root{
  width: 100%;
  height: 600px;
  display: inline-block;
}
ul{
  list-style: none;
  margin-top: 20px;
  font-size: 14px;
}
ul li{
  padding: 5px 0px 5px 20%;
}
ul *{
  margin-bottom: 5px;
}
li a{
  margin:0px 10px;
  text-decoration: none;
  color:inherit;
}
li a:hover{
  color: #755be7;
}
ul li:hover{
  background-color: #fafafa;
}
</style>