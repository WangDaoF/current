<template>
  <el-dialog
      title="地址管理"
      :visible.sync="dialogVisible"
      width="50%"
      >
    <div style="border: 1px springgreen solid;height: 400px;overflow: hidden">
      <div ref="context" :style="`position: relative;top:`+top+`px`">
        <div style="background-color:red;height: 400px">
          <el-table
              :data="shippingAddress"
              border
              style="width: 100%;" height="100%">
            <el-table-column
                prop="consigneeName"
                label="收货人"
                width="120">
            </el-table-column>
            <el-table-column
                prop="province"
                label="省份"
                width="100">
            </el-table-column>
            <el-table-column
                prop="city"
                label="城市"
                width="100">
            </el-table-column>
            <el-table-column
                prop="county"
                label="区/县"
                width="100">
            </el-table-column>
            <el-table-column
                prop="detailed"
                label="详细"
                width="220">
            </el-table-column>
            <el-table-column
                prop="postalCode"
                label="邮编"
                width="100">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="手机号"
                width="140">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small" @click="cut(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="height: 400px">
          <CitiesLinkage :cut="cut" :editRow="editRow"></CitiesLinkage>
        </div>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import CitiesLinkage from "@/components/other/citiesLinkage";
import axios from "axios";
import {mapState} from "vuex";
export default {
  name: "UserAddress",
  components: {CitiesLinkage},
  data() {
    return {
      dialogVisible: true,
      top:0,
      state:1,
      shippingAddress: [],
      editRow:''
    };
  },
  methods:{
    cut(row){
      this.editRow=row
     const interval= window.setInterval(()=>{
       if(this.state === 1){
         this.top=this.top-10;
       }else{
         this.top=this.top+10;
       }
       if(this.top === -400){
         this.state=2;
         this.$bus.$emit('refreshShippAddress')
         clearInterval(interval)
       }else if(this.top === 0){
         this.state=1;
         clearInterval(interval)
       }
     },1)
    }
  },
  mounted() {
    console.log("=======================",'http://localhost:8081/ShippAddress/'+this.user.uid)
    this.$bus.$on("showUserAddress",()=>{
        this.dialogVisible=!this.dialogVisible
        axios.get('http://localhost:8081/ShippAddress/'+this.user.uid ).then((res)=>{
          this.shippingAddress=res.data
          console.log(res.data)
        } )
    })


  },
  computed:{
    ...mapState('userAbout',['isLogin','user'])
  }
}
</script>

<style scoped>

</style>