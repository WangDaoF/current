<template>
<div id="root">
    <div class="imgdiv">
      <img :src="imgurl" alt="">
    </div>
  <div id="title">
    {{this.data.ctitle}}
  </div>
  <div class="price"><span style="">¥</span> {{data.cprice}}</div>
</div>
</template>

<script>
import {re_address} from '@/config';
export default {
  name: "CommodityDiv",
  props:["data"],
  computed:{
    imgurl(){
      return re_address+"/img/"+this.data.defImg;
    }
  }
}
</script>

<style scoped>
.price{
  line-height: 30px;
  color: red
}
#title{
  height: 40px;
  line-height: 20px;
  letter-spacing: 1pt;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  word-break: break-all;
  -webkit-box-orient: vertical;
}
#root{

  height: 100%;
  width: 100%;
  display: inline-block;
  border-radius: 12px;
  padding: 10px;
}
#root:hover{
  box-shadow:
      0px 0.6px 0.8px rgba(0, 0, 0, 0.015),
      0px 1.3px 1.7px rgba(0, 0, 0, 0.021),
      0px 2.2px 3px rgba(0, 0, 0, 0.025),
      0px 3.5px 4.8px rgba(0, 0, 0, 0.03),
      0px 5.4px 7.3px rgba(0, 0, 0, 0.034),
      0px 8.4px 11.5px rgba(0, 0, 0, 0.039),
      0px 14px 19px rgba(0, 0, 0, 0.044),
      0px 28px 38px rgba(0, 0, 0, 0.05);
  color: #755be7;
}
.imgdiv{
  width: 230px;
  height: 230px;
  overflow: hidden;
  border-radius: 12px;
  display: inline-block;
}
img{
  width: 100%;
  height: 100%;
}
</style>