<template>
<div id="search" ref="search">
  <span style="margin-left: 10px">

    <el-col :span="3.1">
    <el-dropdown trigger="click"  @command="select"  >
      <span class="el-dropdown-link">
        {{type}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item   v-for="t in selectTypes" :key="t" :command="t">{{t}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>

  </span>
  <el-dropdown trigger="click" id="inputbox" @command="selectkeyword" >
    <input  type="text" placeholder="请输入要搜索的内容" @focus="focus" @blur="blur" v-model='keyword' @keyup.enter="search"  >
    <el-dropdown-menu slot="dropdown" style="width:500px;margin-top: 15px"  >
      <el-dropdown-item   v-for="s in reverseData" :key="s" :command="s" style="overflow: hidden">{{s}} </el-dropdown-item>
      <el-button plain style="float: right" @click="dialogVisible = true" >历史记录管理</el-button>
    </el-dropdown-menu>
  </el-dropdown>

    <el-button type="primary"  size="medium  " round @click="search">搜 索</el-button>
      <el-dialog
          title="历史记录管理"
          :visible.sync="dialogVisible"
          width="30%"
          >
        <el-empty v-show="!allDate.length>0" description="你还没有历史记录..."></el-empty>
        <div v-show="allDate.length>0" style="overflow: auto;
                         height: 220px;
                         border: 1px solid #755be7;
                         border-radius: 12px;
                        ">

          <transition-group
              name="animate__animated animate__bounce"
              leave-active-class="animate__fadeOutTopLeft">
            <div class="el-row"  v-for="date in reverseAllData" :key="date" style="font-size: 18px;border-bottom: 1px solid #7b7b7b;
          ">

              <span class="el-col-20" style="margin-left: 15px">{{date}}</span>
              <span class="el-col-2"  id="delete" @click="deleteHis(date)">
                  x
                </span>
            </div>
          </transition-group>

        </div>

        <span slot="footer" class="dialog-footer" >
        <el-button type="info" plain size="small" @click="dialogVisible=false" style="margin-right: 5px">取消</el-button>
            <el-popconfirm
                confirm-button-text='确定'
                cancel-button-text='不用了'
                icon="el-icon-info"
                icon-color="red"
                title="确定删除吗？"
                @confirm="clearAll()"
            >
         <el-button type="danger" plain size="small"  slot="reference" >清除全部</el-button>
        </el-popconfirm>
      </span>
      </el-dialog>
</div>

</template>

<script>
import 'animate.css';
export default {
  name: "SearchBox",
  methods:{
    focus(){
      this.setItem()
      console.log("搜索框组件:搜索框获取焦点")
      this.$refs.search.style.boxShadow='0px 0px 5px #4fc583'
      const context=JSON.parse(localStorage.getItem("context"))
      context.history=context.history.filter(h=>h!=="你还没有历史记录!")
      //如果没有聊天记录则提示
      if(context.history.length<1){
        context.history.push("你还没有历史记录!")
      }

      this.searchhistory=context.history.slice(context.history.length-5<0?0:context.history.length-5)
    },
    blur(){
      console.log("搜索框组件:搜索框失去焦点")
      this.$refs.search.style.boxShadow=''
    },
    select(type){
      console.log('搜索框组件:切换搜索类型',type)
      this.type=type
    },
    selectkeyword(context){
      this.setItem()
      if(context==="你还没有历史记录!"){return}
      console.log('搜索框组件:调用了搜索记录，输入框内容切换为'+context)
      this.keyword=context
    },
    search(e){
      this.setItem()
      if(this.keyword===''){this.warning(); return}
      const context=JSON.parse(localStorage.getItem("context"))
      context.history=context.history.filter((h)=>h!==this.keyword)
      context.history.push(this.keyword)
      console.log(context)
      localStorage.setItem('context',JSON.stringify(context))
      this.$bus.$emit("search",this.keyword)
      this.keyword=''
      this.change()
      e.srcElement.blur()
      e.srcElement.focus()

    },
    warning() {
      this.$message.error('不得为空!');
    },
    //如果没有此缓存则生成
    setItem(){
      if(!this.searchhistory){
        const x = {history:[]}
        localStorage.setItem("context",JSON.stringify(x))
      }
    },

    deleteHis(date){
      const context=JSON.parse(localStorage.getItem("context"))
      context.history=context.history.filter(h=>h!==date)
      console.log(context.history)
      console.log(date)
      localStorage.setItem("context",JSON.stringify(context))
      this.allDate=this.allDate.filter(d=>d!=date)
      this.change()
    },
    change(){
      this.setItem()
      const data=[]
      let context = JSON.parse(localStorage.getItem("context"));
      for (let i=0;i<context.history.length;i++){
        data.push(context.history[i])
      }
      this.allDate=data
    },
    clearAll(){
      console.log(1)
      const x = {history:[]}
      localStorage.setItem("context",JSON.stringify(x))
      this.change()
      this.dialogVisible=false
    }

  },
  data() {
    return {
      type: '宝贝',
      types:['店铺','宝贝'],
      keyword:'',
      searchhistory:[],
      allDate:[],
      dialogVisible: false
    }
  },
  computed: {
      selectTypes(){
        return this.types.filter(t=>t!=this.type)
      },
    reverseData(){
      const data=[]
       for (let i=this.searchhistory.length-1;i>=0;i--){
            data.push(this.searchhistory[i])
       }
        return data
    },
    reverseAllData(){
      const data=[]
      for (let i=this.allDate.length-1;i>=0;i--){
        data.push(this.searchhistory[i])
      }
      return data
    }


  },
  mounted() {
    this.change()
  }
}
</script>

<style scoped>
#delete{
  height: 35px;
  width: 35px;
  margin-bottom: 5px;
  border-radius: 50%;
  border: 1px solid #fbc4c4;
  background-color: #fef0f0;
  text-align: center;
  font-size: 20px;
  color: #f56c6c;
}
#delete:hover{
  background-color: #f56c6c;
  color: white;
  cursor:pointer;
}
#inputbox{
  width: 75.5%;
}
el-dropdown-item{
  border: 1px solid red;
}
el-col{
  width: 18px;
}
.el-dropdown-link {
  width: 10px;
  cursor: pointer;
  color: #409EFF;
  margin-left: 15px;

}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
#search{
  width: 600px;
  height: 45px;
  border-radius:20px;
  border: 1px solid #755be7;
  background-color: white;
  display: inline-block;
  float: right;
  margin-top: 70px;
}
#search *{
  margin-top: 5px;
}
#search:hover{
  background-color: #f5f5f5;
}
#search input{
  font-size: 15px;
  width: 95%;
  border:none;
  background:none;
  outline:none;
}
el-button{
  height: 50px;
}
</style>