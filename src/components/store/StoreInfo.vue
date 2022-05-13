<template>
  <div>
    <ol >
      <li>Current的第一家店铺</li>
      <li style="margin-top: 40px;">
        <span>
          <span>描&nbsp; 述</span>
          <span>0.0-</span>
        </span>
        <span>
          <span>服&nbsp; 务</span>
          <span>0.0-</span>
        </span>
        <span>
          <span>物&nbsp; 流</span>
          <span>0.0-</span>
        </span>
      </li>
      <li style="margin-top: 10px">
          <el-button type="primary" plain size="small ">进店逛逛</el-button>
          <el-button type="info" plain size="small ">收藏店铺</el-button>
      </li>
    </ol>
    <div id="service" >
      <div>客服中心</div>

        <div  class="service-item">
          店铺客服:&nbsp;&nbsp;
          <el-link type="primary" plain  >来聊聊</el-link>
        </div>
        <div  class="service-item">
          投诉中心:&nbsp;&nbsp;
          <el-link type="info" plain style="color: red">出问题了?</el-link>
        </div>
    </div>
    <div id="example" >
      <el-tabs :stretch="true" v-model="activeExample">
        <el-tab-pane label="热销榜" name="first">
          <ul>
            <li v-for="i in 5" :key="i"  class="item" >
              <div style="height: 55px;padding:10px">
                  <div class="img">
                    <img style="width: 100%;height: 100%" src="../../assets/images/pic_001.jpg" alt="">
                  </div>
                  <div class="info">
                        <h4>商品标题</h4>
                        <div class="pic">¥0.00</div>
                  </div>
                <div class="number">
                  已售<span style="color:#cc9977 ">0</span>笔
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="好评榜" name="second">
          <ul>
            <li v-for="i in 5" :key="i"  class="item" >
              <div style="height: 55px;padding:10px">
                <div class="img">
                  <img style="width: 100%;height: 100%" src="../../assets/images/pic_001.jpg" alt="">
                </div>
                <div class="info">
                  <h4>商品标题</h4>
                  <div class="pic">¥0.00</div>
                </div>
                <div class="number">
                  已收藏<span style="color:#cc9977 ">0</span>笔
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreInfo",
  data(){
    return{
      activeExample:'first'
    }
  }
}
</script>

<style scoped>
.number{
  display: inline-block;
  height: 50px;width: 80px;
  overflow: hidden;
  float: right;
  color: #9b9ba2
}
.pic{
  color: red;
  font-size: 18px;
  margin-top: 5px;
}
.info{
  display: inline-block;
  height: 50px;
  width: 80px;
  overflow: hidden;
  margin-left: 10px;
}
.img{
  height: 50px;
  width: 50px;
  display: inline-block;
}
.item{
  border-bottom: 1px solid #e4e7ed;
}
.item:hover{
  cursor: pointer;
  background-color: #f9f9f9;
}
.service-item{
  padding-left: 50px;
  font-size: 15px;
  color: #9a9aa1;
  margin-top: 10px;
}
*{
  margin:0px;
  padding:0px;

}
ol,#service,#example {
  width: auto;
  height: 200px;
  border:1px solid #e6e6e6;
  margin: 0px 10px;
}
#service{
  margin-top: 10px;
  height: 120px;
}
ol>li:first-child,#service>div:first-child{
  height: 50px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
ol>li:nth-of-type(2)>span{
  display: inline-block;
  width: 45px;
  margin: 0px 10px;
  color: #9a9aa1;
}
ol>li:nth-of-type(2)>span>span{
  display: inline-block;
  margin-top: 10px;
}
ol>li:nth-of-type(2)>span>span:last-child{
  color: red;
}
ol>li:nth-of-type(2),ol>li:nth-of-type(3){
  text-align: center;
}
li{
  list-style: none;
}
#example{
  margin-top: 10px;
  height: 500px;
}
</style>