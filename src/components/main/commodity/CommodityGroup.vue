<template>
<div id="rootg">
  <div id="title">{{title}}<span id="label" ><img :src="url" alt=""></span></div>
        <div class="col" v-for="i in count" :key="i">
          <div class="imgdiv">
            <img src="../../../assets/images/pic_001.jpg" alt="">
          </div>
          <span class="title">title</span><br>
          <span v-show="!ty" class="describe">描述...</span>
          <span v-show="ty" class="pic">价格:</span>
        </div>

    </div>


</template>

<script>
export default {
  name: "CommodityGroup",
  props:["title","url","count","ty"],
  mounted() {
    console.log("type:",this.ty)
  }

}
</script>

<style scoped>
.pic{
  color: red;
  display: inline-block;
  margin:10px 0px;
}
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
  height: 300px;
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
  font-size: 20px;
}
.col .describe{
  font-size: 13px;
}
img{
  width: 100%;
  height: 100%;

}
.imgdiv{
  width: 230px;
  height: 230px;
  overflow: hidden;
  border-radius: 12px;
  display: inline-block;

}
.col:hover {
  boxShadow: 0px 0px 5px #4fc583
}
.imgdiv:hover img{
  filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8
}
</style>