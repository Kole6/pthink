<!---->
<template>
  <div class="container">
    <div class="page-header">
      <p>联系我们</p>
      <p>Now please contact us so that We wish you the casters hand</p>
    </div>
    <div class="content_wrapper text_center">
      <div class="content">
        <div class="content_left">
          <p
            v-for="(item,index) in companyData"
            :key="index"
            class="item"
            @mouseenter="handleEnter(index)"
            :class="{'active':currentIndex === index}"
          >
            <span>{{item.name}}</span>
          </p>
        </div>
        <div class="content_right">
          <template v-if="!showOtherCompany">
            <div class="map" id="baiduMap">
            </div>
            <div class="detail">
              <div>
                <img src="../../assets/img/hr.png" alt="">
              </div>
              <p class="name">{{detailInfo.name}}</p>
              <p>地址:{{detailInfo.address}}</p>
              <p class="list">
                <i class="iconfont icondianhua1"></i>
                <span>{{detailInfo.tel}}</span>
              </p>
              <p class="list">
                <i class="iconfont iconyouxiang"></i>
                <span>{{detailInfo.mail}}</span>
              </p>
              <p class="list">
                <i class="iconfont iconchuanzhen"></i>
                <span>{{detailInfo.fax}}</span>
              </p>
              <p class="list">
                <i class="iconfont icongongsiyoubian"></i>
                <span>{{detailInfo.zipCode}}</span>
              </p>
            </div>
          </template>
          <template v-else>
            <div :key="Math.random()" class="other">
              <p class="other_item" v-for="(item,index) in companyData[currentIndex].content" :key="`${index}a`">{{item}}</p>
            </div>
            <div class="detail">
              <div>
                <img src="../../assets/img/hr.png" alt="">
              </div>
              <p class="list">
                <i class="iconfont icondianhua1"></i>
                <span>{{detailInfo.tel}}</span>
              </p>
              <p class="list">
                <i class="iconfont iconyouxiang"></i>
                <span>{{detailInfo.mail}}</span>
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
    data() {
      return{
        companyData:[
          {name:'上海总部',city:'上海市',geo:[121.545118,31.282655],address:'上海市杨浦区隆昌路619号8号楼南A10',tel:'021-62866809',mail:'fengongsi@pthink.com.cn',fax:'021-62866829',zipCode:'200090'},
          {name:'南京研发中心',city:'南京市',geo:[118.917717,32.084141],address:'南京市栖山区紫东路1号紫东创意园A7-5楼',tel:'025-83627393',mail:'fengongsi@pthink.com.cn',fax:'021-61508305',zipCode:'210012'},
          {name:'广东分公司',city:'广州市',geo:[113.329163,23.155424], address:'广东省广州市天河区林和西路161号中泰国际广场B座33F',tel:'13020193006',mail:'fengongsi@pthink.com.cn',fax:'021-61508305',zipCode:'510610'},
          {name:'重庆分公司',city:'重庆市',geo:[106.515991,29.615792],address:'重庆市渝北区财富大道2号财富大厦A座28-2',tel:'13020193006',mail:'fengongsi@pthink.com.cn',fax:'021-61508305',zipCode:'401121'},
          {name:'北京分公司',city:'北京市',geo:[116.379745,40.049025],address:'北京市海淀区永泰庄北路1号中关村东升国际创业园6号楼',tel:'13020193006',mail:'fengongsi@pthink.com.cn',fax:'021-61508305',zipCode:'100192'},
          {name:'江西分公司',city:'南昌市',geo:[116.029635,28.674568],address:'江西省南昌市南昌县天祥大道紫阳国际名品中心2层208号商铺',tel:'13020193006',mail:'fengongsi@pthink.com.cn',fax:'021-61508305',zipCode:'330095'},
          {name:'各子分公司',content:['江西分公司','黑龙江分公司','新疆分公司','吉林分公司','云南分公司','贵州分公司','四川分公司',],address:'',tel:'13020193006',mail:'fengongsi@pthink.com.cn',fax:'',zipCode:''},
        ],
        currentIndex:0,
        map:'',
        showOtherCompany:false,
      }
    },
    computed:{
      detailInfo(){
        return this.companyData[this.currentIndex];
      }
    },
    mounted(){
      if(BMap){
        this.setCountry(this.companyData[0].geo,this.companyData[0]);
      }
    },
    methods:{
      handleEnter(index){
        this.currentIndex = index;
        if(!!this.companyData[index].geo){
          this.showOtherCompany = false;
          this.$nextTick(()=>{
            this.setCountry(this.companyData[index].geo,this.companyData[index]);
          })
        }else{
          this.showOtherCompany = true;
          
        }
      },
      setCountry(arr,data){
        this.map = new BMap.Map("baiduMap");
        this.map.centerAndZoom(new BMap.Point(arr[0],arr[1]), 16);
        this.map.setCurrentCity(data.city);

        let point = new BMap.Point(arr[0],arr[1]);
        let marker = new BMap.Marker(point);

        this.map.addOverlay(marker);
        let opts = {
          width : 200,     // 信息窗口宽度
          height: 70,     // 信息窗口高度
          title : data.name , // 信息窗口标
        }
        let infoWindow = new BMap.InfoWindow(data.address, opts); 
        marker.addEventListener("click", function(e){
          this.map.openInfoWindow(infoWindow,point); //开启信息窗口
        })
        

        this.map.addControl(new BMap.NavigationControl());
        this.map.addControl(new BMap.ScaleControl({offset: new BMap.Size(80, 20)}));
        this.map.enableScrollWheelZoom(true);
      }
    }
};
</script>
<style lang='scss' scoped>
@import url("../../assets/font/iconfont.css");
.container {
  box-sizing: border-box;
  background-color: #f9faff;
  .page-header {
    @include pageHeader();
  }
}
.text_center {
  text-align: center;
}
.title {
  font-size: 28px;
  padding: 25px 0 10px 0;
  font-weight: bold;
}
.desc {
  padding-bottom: 10px;
}
.content_wrapper {
  // height: 75vh;
  height: 490px;
  padding: 15px 0 35px 0;
}
.content {
  background-color: #fff;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  box-shadow: 0 0 10px rgba($color: gray, $alpha: 0.5);
  // background: rgba($color: #000000, $alpha: 0.2);
  height: 100%;
  .content_left {
    display: inline-block;
    width: 25%;
    margin-right: 5%;
    .item {
      background: linear-gradient(to right, white 0%, rgb(240, 241, 246) 100%);
      padding: 15px 0;
      position: relative;
      cursor: pointer;
    }
    .item::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      border-width: 26px;
      border-style: solid;
      border-color: white white white transparent;
    }
    .item.active {
      background: rgb(54, 174, 234);
    }
  }
  .content_right {
    display: inline-block;
    width: 70%;
    height: 100%;
    vertical-align: top;
    margin: 0;
    padding: 0;
    text-align: left;
    .map {
      box-sizing: border-box;
      padding: 15px 15px 0 15px;
      width: 780px;
      height: 310px;
      margin-top: 10px;
    }
    .detail {
      .name {
        color: rgb(30, 45, 100);
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
      .name + p {
        margin-bottom: 5px;
        font-size: 14px;
        
      }
      .list {
        width: 50%;
        display: inline-block;
        margin: 3px 0;
        i {
          font-size: 22px;
          color: #606266;
        }
      }
      span {
        color: #606266;
        display: inline-block;
        margin-left: 10px;
      }
    }
  }
}
.other{
  // padding: 50px 150px 130px 0;
  padding: 5% 0 0 10%;
  width: 780px;
  height: 310px;
  // column-count: 2;
  // -moz-column-count: 2;
  // -webkit-column-count: 2;

}
.other p{
    font-size: 16px;
    line-height: 28px;

    // color: #1e2d64;
    // font-size: 20px;
    // font-weight: bold;
    // margin: 0 0 10px 0;
    // text-align: center;
    // width: 50%;
    // display: inline-block;
}
</style>