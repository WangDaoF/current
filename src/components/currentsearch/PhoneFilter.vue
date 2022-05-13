<template>
    <div>
      <table>
        <tr>
          <td>手机品牌:</td>
          <td >
            <el-checkbox @click="show" v-model="checked" >oppo</el-checkbox>
          </td>
          <td>
            <el-checkbox @click="show" v-model="checked" >vivo</el-checkbox>
          </td>
          <td>
            <el-checkbox @click="show" v-model="checked" >华为</el-checkbox>
          </td>
          <td>
            <el-checkbox @click="show" v-model="checked" >苹果</el-checkbox>
          </td>
        </tr>
        <tr>
          <td>运行内存RAM:</td>
          <td>
            <el-checkbox @click="show" v-model="checked" >2G</el-checkbox>
          </td>
          <td>
            <el-checkbox @click="show" v-model="checked" >4GB</el-checkbox>
          </td>
          <td>
            <el-checkbox @click="show" v-model="checked" >8GB</el-checkbox>
          </td>
          <td>
            <el-checkbox @click="show" v-model="checked" >16GB</el-checkbox>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: "PhoneFilter",
  data() {
    return {
      checked: false
    }
  },
  methods:{
    show(e){
      console.log(e.target.value)
    }
  }
}
</script>

<style scoped>
tr{
  height: 40px;
  align-items: center;
  display: flex;
}
tr td{
  display: inline-block;
  margin-right: 10px;
}
tr td:first-child{
  margin: 0px 15px 0px 10px;
}
</style>