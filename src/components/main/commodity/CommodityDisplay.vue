<template>
<div id="root">
  <CommodityGroup title="有好货" :url="require('../../../assets/images/pic_017.png')" :data="youhaohuo"></CommodityGroup>
  <CommodityGroup title="猜你喜欢" style="margin-top: 15px;"  :url="require('../../../assets/images/pic_023.png')" :data="data" ty="main"></CommodityGroup>
  <el-divider>END</el-divider><br>
</div>
</template>

<script>
import CommodityGroup from "@/components/main/commodity/CommodityGroup";
import axios from "axios";
import {re_address} from "@/config";
export default {
  name: "CommodityDisplay",
  components: {CommodityGroup},
  data() {
    return {
      data:[],
      page:1,
      total:0,
      youhaohuo:[]
    }
  },
  methods:{
    load () {
      var t2 = document.body.scrollHeight;
      var t1 = document.documentElement.scrollTop || document.body.scrollTop;
      var t = t2 - t1;
      if(this.total<this.page) return
      if(t<1400){
        console.log(this.page)
        axios.get(re_address+"/CommodityItem/"+this.page++).then(res=>{
          console.log("请求了第"+(this.page-1)+"页的数据",res.data)
          this.data.push(...res.data.data.commodities)
        })
        console.log("当前数据",this.data)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.load)
    axios.get(re_address+"/CommodityItem/"+this.page++).then(res=>{
      console.log("请求了"+(this.page-1)+"页的数据",res.data)
      this.data=res.data.data.commodities
      this.total=res.data.data.total
    })
    axios.get(re_address+"/TopCommodity").then(res=>{
      this.youhaohuo=res.data.data.commodities
    })
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