<template>
<div id="rootg">
  <div id="title">{{title}}<span id="label" ><img :src="url" alt=""></span></div>
        <div class="col" v-for="(d,index) in data" :key="index" @click="show(d.ccode)">
          <CommodityDiv :data="d"></CommodityDiv>
        </div>
    </div>


</template>

<script>
import CommodityDiv from "@/components/main/commodity/CommodityDiv";
export default {
  name: "CommodityGroup",
  components: {CommodityDiv},
  props:["title","url","data","ty"],
  methods:{
    show(ccode){
       this.$bus.$emit('showCommodityDisplay',ccode)
    }
  }

}
</script>

<style scoped>

#rootg{
  width: 100%;
  height: auto ;
}
#label{
  display: inline-block;
  margin-left: 5px;
}
#label img{
 position: relative;
  top: 3px;
}

#title{
  margin-left: 20px;
  font-size: 24px;
  margin-bottom: 15px;
  color: #755be7;
}
.col{
  display: inline-block;
  width: 230px;
  height: auto;
  margin-left: 16px;
  margin-top: 10px;
}
.col:hover {
  cursor:pointer;
}
.col:hover .title{
  color: #755be7;
}
.col .title{
  font-size: 18px;
}
.col .describe{
  font-size: 13px;
}
img{
  width: 100%;
  height: 100%;

}

.col:hover {
  boxShadow: 0px 0px 5px #4fc583
}
.imgdiv:hover img{
  filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8
}
</style>