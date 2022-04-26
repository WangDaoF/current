<template>
  <ul id="mainmenu"  >
    <li>天猫</li>
    <li >聚划算</li>
    <li>司法拍卖</li>
    <li>飞猪旅行</li>
    <li>天天特卖</li>
    <li>造点新货</li>
    <li>苏宁易购</li>
    <li>淘宝心选</li>
    <li>智能生活</li>
    <li>淘宝直播</li>
  </ul>
</template>

<script>
export default {
  name: "TitleMenu"
}
</script>

<style scoped>
#mainmenu{
  margin-top: 0px;
  list-style: none;
  margin-right: 200px;
  font-size: 16px;
  overflow: hidden;
  padding: 0px;
  position: relative;
  top: -10px;
  margin-bottom: 10px;
}

li{
  float: left;
  margin-left: 15px;
}
li:hover{
  cursor:pointer;
  color: #755be7;
}
</style>