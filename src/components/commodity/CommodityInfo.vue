<template>
    <el-tabs v-model="activeName" type="card"  style="border-left: 1px solid #e4e7ed">
      <el-tab-pane label="店铺" name="first" >
        <div class="root" >
        <!--  商家信息-->
           <StoreInfo></StoreInfo>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品评论" name="second">
        <div class="root">
          商品评论
        </div>
      </el-tab-pane>
      <el-tab-pane label="待定" name="third">
        <div class="root">
          待定
        </div>
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import StoreInfo from "@/components/store/StoreInfo";
export default {
  name: "CommodityInfo",
  components: {StoreInfo},
  data() {
    return {
      activeName: 'first'
    };
  },
}
</script>

<style scoped>
.root{
  height: 790px;
  width: 100%;
  display: inline-block
}
</style>