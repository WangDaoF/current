<template>
  <div class="block" id="root" >
    <span style="float: left;color:#755be7 "><i class="el-icon-s-promotion"></i>潮流生活</span>
    <div id="title"> <span style="color: #755be7">{{index}}</span>/{{assImg.length}}</div>

    <div style="border-radius: 12px;overflow: hidden; clear: both; height: 220px">
      <el-carousel trigger="click" height="230px" indicator-position="none" @change="changPic">
        <el-carousel-item v-for="(item,index) in assImg" :key="index" style="background-color:#f6f6f6">
          <div style="margin-top: 10px">
            <img :src="item.one " style="margin-right: 3px"  alt="">
            <img :src="item.two " style="margin-left: 3px"  alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>


  </div>
</template>

<script>
export default {
  name: "AssistantCarousel",
  data(){
    return{
      index:1,
      imgName:[
        require('../../assets/images/pic_001.jpg'),
        require('../../assets/images/pic_002.png'),
        require('../../assets/images/pic_003.jpg'),
        require('../../assets/images/pic_004.jpg'),
        require('../../assets/images/pic_005.jpg')],
      assImg:[
        {
          one:require('../../assets/images/pic_006.jpg'),
          two:require('../../assets/images/pic_007.jpg')
        },
        {
          one:require('../../assets/images/pic_008.jpg'),
          two:require('../../assets/images/pic_009.jpg')
        },
        {
          one:require('../../assets/images/pic_010.jpg'),
          two:require('../../assets/images/pic_011.jpg')
        },
        {
          one:require('../../assets/images/pic_012.jpg'),
          two:require('../../assets/images/pic_013.jpg')
        },
        {
          one:require('../../assets/images/pic_014.jpg'),
          two:require('../../assets/images/pic_015.jpg')
        }
      ]
    }
  },
  methods:{
    changPic(e){
      this.index=e+1
    }
  }
}
</script>

<style scoped>
#root{
  width: 620px;
  height: 250px;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  margin-top: 10px;

}
img{
  border-radius: 12px;
}
#title{
  height: 30px;
  float: right;
}
img{
  width: 300px;
  height: 200px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>