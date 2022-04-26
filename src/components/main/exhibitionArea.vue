<template>
  <el-container id="ex">
      <el-aside width="21%"><left-menu></left-menu></el-aside>
      <el-main id="main">
        <TitleMenu></TitleMenu>
        <el-container >
          <el-aside style="width: 620px">
            <CarouselMain ></CarouselMain>
            <AssistantCarousel ></AssistantCarousel>
          </el-aside>
          <el-main style="padding: 0px;">
            <RightMenu></RightMenu>
          </el-main>
        </el-container>

      </el-main>


  </el-container>

</template>

<script>
import LeftMenu from "@/components/main/LeftMenu";
import TitleMenu from "@/components/main/TitleMenu";
import CarouselMain from "@/components/main/CarouselMain";
import AssistantCarousel from "@/components/main/AssistantCarousel";
import RightMenu from "@/components/main/RightMenu";

export default {
  name: "exhibitionArea",
  components: {RightMenu, AssistantCarousel, CarouselMain, TitleMenu, LeftMenu}
}
</script>

<style scoped>
#ex{
  clear: both;
  background-color: white;
  height: auto;
  border-radius: 18px 18px 0 0;
  color: #748a97;
}



</style>