<template>
  <div>
    <ExhibitionArea ></ExhibitionArea>
    <CommodityDisplay ></CommodityDisplay>
    <HelperModel></HelperModel>
  </div>
</template>

<script>
import HelperModel from "@/components/main/HelperModel";
import CommodityDisplay from "@/components/main/commodity/CommodityDisplay";
import ExhibitionArea from "@/components/main/exhibitionArea";

export default {
  name: "MainShow",
  components:{
    HelperModel,
    CommodityDisplay,
    ExhibitionArea,
  }
}
</script>

<style scoped>

</style>