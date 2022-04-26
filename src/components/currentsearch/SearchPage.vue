<template>
<div id="root"  style="height: auto">
  <div id="menu">
    <!--=======菜单地址=======-->
    <div id="item"><span @click="selectAll" :class=oneClass>所有宝贝</span><span>待定</span><span>待定</span></div>
    <div id="hr"></div>
  </div>
  <div id="filter">
    筛选
  </div>
  <div id="context">
    <span v-for="i in count" :key="i" class="item" >
      <div  style="width: 100%;height: 250px">
            <img :src="require('../../assets/images/pic_001.jpg')" style="width: 100% ;height: 100%" alt="">
      </div>
      <div style="margin: 10px 0px">
        <span style="color: red;margin-left: 10px">¥1000.00</span>
        <span style="float: right;margin-right: 8px">xxx付款</span>
      </div>
      <div style="margin-left: 10px;font-size: 14px">
          介绍........
      </div>
      <div style="margin-top: 10px;margin-left: 10px">
        <span><i class="el-icon-s-shop"></i>xxxx店铺</span><span style="float: right;margin-right: 8px">发货地</span>
      </div>
    </span>


  </div>
</div>
</template>

<script>
export default {
  name: "SearchPage",
  props:['keyword'],
  data () {
    return {
      count: 40,
      oneClass:''
    }
  },
  methods: {
    load () {
      var t2 = document.body.scrollHeight;
      var t1 = document.documentElement.scrollTop || document.body.scrollTop;
      var t = t2 - t1;
      if(t<1400){
        this.count+=5
      }
    },
    selectAll(){
       this.oneClass='select'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.load)
    this.selectAll()
  },
}

</script>

<style scoped>
.item{
  display: inline-block;
  height: 400px;
  width: 240px;
  margin: 0px 8px 15px 8px;
  border: 1px solid #ededed;
}
#filter{
  height: 100px;
  border: 1px solid red;
}
#context{
  height: auto;
  /*display: flex;*/
  /*justify-content: space-between;*/
}
.select{
  background-color: #755be7;
  color: white;
}
#menu{
  height: 50px;
  width: 100%;
  margin-top: 10px;
  display: inline-block;
}
#menu #item span{
  display: inline-block;
  font-size: 18px;
  padding: 8px 15px;
}
#menu #item span:hover{
  background-color: #755be7;
  color: white;
  cursor: pointer;
}
#menu #hr{
  height: 2px;
  background: #755be7;
}
#root{
  height: 500px;
  width: 100%;
  background-color: white;
  border-radius: 18px 18px 0 0;
  color: #748a97;
}
#root .infinite-list{
  height: 500px;
  border: lavender 1px solid;
}



</style>