<template>
  <el-dialog
      title="地址管理"
      :visible.sync="dialogVisible"
      width="50%"
      >
    <div style=";height: 400px;overflow: hidden">
      <div ref="context" :style="`position: relative;top:`+top+`px`">
        <div style=";height: 400px">

          <el-table
              :data="shippingAddress"
              border
              style="width: 100%;" height="100%"
              :cell-style="tableRowClassName"
              @row-click="checked"
             >
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
                prop="town"
                label="镇/街道"
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
                <el-button @click="deleteAddress(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small" @click="cut(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="height: 400px">
          <CitiesLinkage :cut="cut" :type="type" :editRow="editRow"></CitiesLinkage>
        </div>
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="insert()" :disabled="isEdit">新 增</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
  </span>
  </el-dialog>
</template>

<script>
import CitiesLinkage from "@/components/other/citiesLinkage";
import axios from "axios";
import {mapMutations, mapState} from "vuex";
import {re_address} from "@/config";
export default {
  name: "UserAddress",
  components: {CitiesLinkage},
  data() {
    return {
      dialogVisible: false,
      top:0,
      state:1,
      shippingAddress: [],
      editRow:'',
      type:1,
      isEdit:false

    };
  },
  methods:{
    checked(row){
      if(row.sid!=this.user.sid){
        const fromData=new FormData();
        fromData.append('uId', this.user.uid)
        fromData.append('sId', row.sid)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        axios.put(re_address+"/user",fromData,config).then(
            res=>{
              console.log('修改默认地址==>返回数据:',res.data)
              this.setUser(res.data)
              this.success()
            }
        )

      }
    },
    ...mapMutations('userAbout',['setUser']),
    tableRowClassName({row}) {
      if(row.sid==this.user.sid){
        return ' background: oldlace';
      }
      return '';
    },
    cut(row){
      this.type=1
      this.isEdit=true
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
    },
    insert(){

      this.type=0
      this.isEdit=true
      const interval= window.setInterval(()=>{
          this.top=this.top-10;
        if(this.top === -400){
          this.state=2;
          this.$bus.$emit('refreshShippAddress')
          clearInterval(interval)
        }
      },1)
    },
    deleteAddress(row){
      console.log("删除了一条地址记录")
      axios.delete(re_address+'/ShippAddress/'+row.sid ).then((res)=>{
        if(res.data){
          this.shippingAddress=this.shippingAddress.filter(val=>{
            return val.sid!==row.sid
          })
        }
      } )
    },
    success() {
      this.$notify({
        title: '成功',
        message: '修改了默认地址',
        type: 'success'
      });
    },
  },
  mounted() {
    this.$bus.$on("showUserAddress",()=>{
        this.dialogVisible=!this.dialogVisible
        axios.get(re_address+'/ShippAddress/'+this.user.uid ).then((res)=>{
          this.shippingAddress=res.data
        } )
    })
    this.$bus.$on("updateShippingAddress",(shippingAddress)=>{
      this.shippingAddress=shippingAddress
    })
    this.$bus.$on("isEditAddress",()=>{
          this.isEdit=!this.isEdit
    })


  },
  computed:{
    ...mapState('userAbout',['isLogin','user']),

  }
}
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}
</style>