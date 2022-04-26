<template>
<div id="root">
<CommodityGroup title="有好货" :url="require('../../../assets/images/pic_017.png')" :count="5"></CommodityGroup>
  <CommodityGroup title="猜你喜欢" style="margin-top: 15px;"  :url="require('../../../assets/images/pic_023.png')" :count="count" ty="main"></CommodityGroup>
  <el-divider>END</el-divider><br>
</div>
</template>

<script>
import CommodityGroup from "@/components/main/commodity/CommodityGroup";
export default {
  name: "CommodityDisplay",
  components: {CommodityGroup},
  data() {
    return {
      count: 5
    }
  },
  methods:{
    load () {
      var t2 = document.body.scrollHeight;
      var t1 = document.documentElement.scrollTop || document.body.scrollTop;
      var t = t2 - t1;
      if(t<1400){
        this.count+=5
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.load)
  },
}
</script>

<style scoped>
#root{
  height: auto;
  background-color: white;
  padding: 0px 20px 0px 20px;
}
</style>