<template>
  <div>
      <div class="title">
        <span style="width:150px;"><el-checkbox v-model="checkAll" style="margin-left: 30px">2022-04-30</el-checkbox></span>
        <span style="font-size: 16px;width: 370px">订单号:4653464341354</span>
        <span style="width: 200px;">店铺名</span>
        <span style="width: 380px">和我联系</span>
        <span><i style="font-size: 20px" class="el-icon-delete"></i></span>
      </div>
      <table>
        <tr>
          <td >
             <span class="img" style="width: 100px;height: 100px">
              <img src="../../assets/images/pic_001.jpg" alt="">
            </span>
          </td>
          <td>标题</td>
          <td>价格</td>
          <td>数量</td>
          <td rowspan="2">实际价格</td>
          <td rowspan="2">交易状态</td>
          <td rowspan="2">待定</td>
        </tr>
        <tr>
          <td >
             <span class="img" style="width: 100px;height: 100px">
              <img src="../../assets/images/pic_001.jpg" alt="">
            </span>
          </td>
          <td>标题</td>
          <td>价格</td>
          <td>数量</td>

        </tr>

      </table>

  </div>
</template>

<script>
export default {
  name: "OrderItem"
}
</script>

<style scoped>
.item{
  border: 1px solid red;
  height: 100px;
}
.item span{
  border: 1px solid red;
  display: inline-block;
  vertical-align: top;
}

.title{
  background-color: #f1f1f1;
  height: 50px;
  display: flex;
  align-items: center;
}
.title>span{
  border: 1px solid red;
}
img{
  height: 100%;
  width: 100%;
}
span{
  display: inline-block;
}
tr{
  border: 1px solid red;
  height: 120px;
  vertical-align: top;
}
td{
  padding:0px;
  margin: 0px;
  padding-top: 10px;
  border: 1px solid red;

}
tr td:nth-of-type(1){
  margin-left: 20px;
  width: 130px;
  text-align: right;
}
tr td:nth-of-type(2){
  width: 430px;
}
tr td:nth-of-type(3){
  width: 95px;
}
tr td:nth-of-type(4){
  width: 90px;
}
tr td:nth-of-type(5){
  width: 190px;
}
tr td:nth-of-type(6){
  width: 140px;
}
tr td:nth-of-type(7){
  width: 100px;
}
td{
  text-align: center;
}
td:nth-of-type(2){
  text-align: left;
}
</style>