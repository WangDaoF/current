<template>
<div id="root">
  <div class="mod">
    <i class="el-icon-s-promotion"></i><span>消费者保障</span>
      <ul>
        <li>保障范围</li>
        <li>退货退款流程</li>
        <li>服务中心</li>
        <li>更多特色服务</li>
      </ul>
  </div>
  <div class="mod">
    <i class="el-icon-s-promotion"></i><span>新手上路</span>
      <ul>
        <li>新手专区</li>
        <li>24小时在线帮助</li>
        <li>免费开店</li>
      </ul>
  </div>
  <div class="mod">
    <i class="el-icon-s-promotion"></i><span>付款方式</span>
      <ul>
        <li>快捷支付</li>
        <li>信用卡</li>
        <li>余额包</li>
        <li>蚂蚁花呗</li>
      </ul>
  </div>
  <div class="mod">
    <i class="el-icon-s-promotion"></i><span>淘宝特色</span>
      <ul>
        <li>手机淘宝</li>
        <li>旺旺/旺信</li>
        <li>大众评审</li>
      </ul>
  </div>

</div>
</template>

<script>
export default {
  name: "HelperModel"
}
</script>

<style scoped>
#root{
  background-color: white;
  padding: 0px 20px 0px 20px;
  display: flex;
  justify-content: space-around;
  height: 110px;
}
.mod{
  width: 250px;
  display:inline-block;
}
i{
  color: #999999;
  font-size: 30px;
}
span{
  margin-left: 10px;
}
ul{
  position: relative;
  top: 5px;
}
ul,li{
  margin:0px;
  padding: 0px;
}
li{
  float: left;
  font-size: 12px;
  color: #999999;
  margin-right: 12px;
  line-height: 25px;
  list-style: none;
}
li:hover{
  cursor: pointer;
  color: #755be7;
}
</style>