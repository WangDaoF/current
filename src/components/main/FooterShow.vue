<template>
<div>
  <div id="one">
    <span>阿里巴巴集团</span>
    <el-divider direction="vertical"></el-divider>
    <span>淘宝网</span>
    <el-divider direction="vertical"></el-divider>
    <span>天猫</span>
    <el-divider direction="vertical"></el-divider>
    <span>聚划算</span>
    <el-divider direction="vertical"></el-divider>
    <span>全球速卖通</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里巴巴国际交易市场</span>
    <el-divider direction="vertical"></el-divider>
    <span>1688</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里妈妈</span>
    <el-divider direction="vertical"></el-divider>
    <span>飞猪</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里云计算</span>
    <el-divider direction="vertical"></el-divider>
    <span>AliOS</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里通信</span>
    <el-divider direction="vertical"></el-divider>
    <span>一淘</span>
    <el-divider direction="vertical"></el-divider>
    <span>万网</span>
    <el-divider direction="vertical"></el-divider>
    <span>高德</span>
    <el-divider direction="vertical"></el-divider>
    <span>UC</span>
    <el-divider direction="vertical"></el-divider>
    <span>友盟</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里安全</span>
    <el-divider direction="vertical"></el-divider>
    <span>大麦网</span>
    <el-divider direction="vertical"></el-divider>
    <span>钉钉</span>
    <el-divider direction="vertical"></el-divider>
    <span>支付宝</span>
    <el-divider direction="vertical"></el-divider>
    <span>优酷</span>
    <el-divider direction="vertical"></el-divider>
    <span>土豆</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里健康</span>
    <el-divider direction="vertical"></el-divider>
    <span>阿里影业</span>
    <el-divider direction="vertical"></el-divider>
    <span>网商银行</span>
    <el-divider direction="vertical"></el-divider>
  </div>
  <div id="fg"></div>
  <div id="two">
    <span>关于淘宝</span>
    <span>营销中心</span>
    <span>廉政举报</span>
    <span>联系客服</span>
    <span>开放平台</span>
    <span>诚征英才</span>
    <span>联系我们</span>
    <span>隐私权政策</span>
    <span>法律声明</span>
    <span>知识产权</span>
    <span>不当竞争举报</span>
    <span>满意度意见征集</span>
    <el-divider direction="vertical"></el-divider>
    <span>&copy; 无版权,借鉴<a href="https://www.taobao.com/" target="_blank">淘宝</a></span>
  </div>
  <br>
  <div id="three">
    <span>增值电信业务经营许可证：浙B2-20080224</span>
    <el-divider direction="vertical"></el-divider>
    <span>增值电信业务经营许可证（跨地区）： B2-20150210</span>
    <el-divider direction="vertical"></el-divider>
    <span>浙网文【2022】0403-017号</span>
    <el-divider direction="vertical"></el-divider>
    <span>浙江省网络食品销售第三方平台提供者备案：浙网食A33010001</span>
    <el-divider direction="vertical"></el-divider>
    <span>互联网药品信息服务资格证书（浙）-经营性-2018-0010</span>
    <el-divider direction="vertical"></el-divider>
    <span>短消息类服务接入代码使用证书：号【2016】00154-A01</span>
    <el-divider direction="vertical"></el-divider>
    <span>信息网络传播视听许可证：1109364号</span>
    <el-divider direction="vertical"></el-divider>
    <span>出版物网络交易平台服务经营备案号：新出发浙备字第002号</span>
    <el-divider direction="vertical"></el-divider>
    <span>浙公网安备 33010002000078号</span>
    <el-divider direction="vertical"></el-divider>
    <span>浙B2-20080224-1</span>
    <el-divider direction="vertical"></el-divider>
    <span>广播电视节目制作经营许可证（浙）字第01012号</span>
    <el-divider direction="vertical"></el-divider>
    <span>市场名称登记证：工商网市字3301004120号</span>
    <el-divider direction="vertical"></el-divider>
    <span>医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号</span>
    <el-divider direction="vertical"></el-divider>
  </div>
  <div id="pic">
    <img src="../../assets/images/footerpng.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: "FooterShow"
}
</script>

<style scoped>
#one,#two,#three{
  width: 90%;
  color: #999999;
  font-size: 12px;
  line-height: 25px;
}
#two span{
  margin-right: 16px;
}
#one{
  margin-top: 10px;
}
#one span:hover{
  cursor: pointer;
  color: #755be7;
}
#fg{
  margin: 8px 0;
  background: 0 0;
  border-top: 1px solid #e8eaec;
}
#pic{
  width: 100%;
  height: 100%;
}
img{
  width: 100%;
  height: 100%;
}
</style>