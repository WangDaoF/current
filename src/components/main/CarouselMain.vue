<template>
  <div class="block"  >
    <el-carousel trigger="click" >
      <el-carousel-item v-for="(item,index) in imgName" :key="index">
        <img :src="item " alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselMain",
  data(){
    return{
      imgName:[
        require('../../assets/images/pic_001.jpg'),
        require('../../assets/images/pic_002.png'),
        require('../../assets/images/pic_003.jpg'),
        require('../../assets/images/pic_004.jpg'),
        require('../../assets/images/pic_004.jpg')]
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
div{
  width: 620px;
  height: 300px;
  display: inline-block;
  border-radius: 12px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

</style>