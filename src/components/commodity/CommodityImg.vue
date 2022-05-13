<template>
  <div class="box" id="box">
    <div class="small" style="position:relative">
      <img :src="imgurl" width="418" alt="" />
      <!-- ⿏标层罩 -->
      <div v-show="topShow" class="top" :style="topStyle"></div>
      <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
      <div class="maskTop"
           @mouseenter="enterHandler"
           @mousemove="moveHandler"
           @mouseout="outHandler"></div>
    </div>
    <div v-show="rShow" class="right">
      <img :style="r_img" class="rightImg" :src="imgurl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "CommodityImg",
  props:["imgurl"],
  data() {
    return {
      topStyle:{transform:''},
      r_img: {},
      topShow:false,
      rShow:false
    }
  },
  methods : {
    // ⿏标进⼊原图空间函数
    enterHandler() {
      // 层罩及放⼤空间的显⽰
      this.topShow = true
      this.rShow = true
    },
    // ⿏标移动函数
    moveHandler(event) {
      // ⿏标的坐标位置
      let x = event.offsetX
      let y = event.offsetY
      // 层罩的左上⾓坐标位置，并对其进⾏限制：⽆法超出原图区域左上⾓
      let topX = (x-100) < 0 ? 0:(x-100)
      let topY = (y-100) < 0 ? 0:(y-100)
      // 对层罩位置再⼀次限制，保证层罩只能在原图区域空间内
      if(topX>218) {
        topX = 218
      }
      if(topY>218) {
        topY = 218
      }
      // 通过 transform 进⾏移动控制
      this.topStyle.transform = `translate(${topX}px,${topY}px)`
      this.r_img.transform = `translate(-${2*topX}px,-${2*topY}px)`
    },
    // ⿏标移出函数
    outHandler() {
      // 控制层罩与放⼤空间的隐藏
      this.topShow = false
      this.rShow = false
    }
  }
}
</script>

<style scoped>
/* 放⼤的图⽚，通过定位将左上⾓定位到(0,0) */
.rightImg {
  display: inline-block;
  width: 800px;
  height: 800px;
  position: absolute;
  top: 0;
  left: 0;
}
/* 右边的区域图⽚放⼤空间 */
.right {
  margin-left: 412px;
  width: 418px;
  height: 418px;
  border: 1px solid red;
  position: absolute;
  top: 100px;
  left: 95px;
  z-index: 100;
  overflow: hidden;
}
/* ⼀个最⾼层层罩 */
.maskTop {
  width: 418px;
  height: 418px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

}
/* 层罩，通过定位将左上⾓定位到(0,0) */
.top {
  width: 200px;
  height: 200px;
  background-color: lightcoral;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
}

</style>