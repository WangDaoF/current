<template>
  <div id="root">
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in 4" :key="item" style="display: flex;justify-content: space-around">
          <img  style="height: 100%;width: 20%" src="../../assets/images/pic_001.jpg" alt="">
          <img  style="height: 100%;width: 20%" src="../../assets/images/pic_001.jpg" alt="">
          <img  style="height: 100%;width: 20%" src="../../assets/images/pic_001.jpg" alt="">
          <img  style="height: 100%;width: 20%" src="../../assets/images/pic_001.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "RelevantCommodity"
}
</script>

<style scoped>
#root{

    height: 200px;
}
</style>