<!--新朋程大数据-->
<template>
  <div class="page3">
    <div class="page-header">
      <p>新朋程大数据</p>
      <p>Pthink Big Data</p>
    </div>
    <div class="content">
      <div class="content_list">
        <div class="inner_content content_one">
          <p class="one"><img src="../../assets/img/img1.png" alt=""></p>
          <p class="two">国家级平台数量</p>
          <p class="three">
            <span>2</span>个 <span class="case">全国中等职业学校管理信息系统 <br> 职业院校人才培养工作状态数据管理系统</span> 
          </p>
        </div>
      </div>
      <div class="content_list map_bg">
        <div class="inner_content content_three">
          <p class="one"> <span>省平台部署</span></p>
          <p class="two spec_two"> 
            <a><span>18</span>个</a>
          </p>
        </div>
      </div>
      <div class="content_list">
        <div class="inner_content content_two">
          <p class="one"><img src="../../assets/img/img2.png" alt=""></p>
          <p class="two">
            <span>校端用户数量</span>
            <span>and</span>
            <span>常态数据采集用户</span>
          </p>
          <p class="three spec_three">
            <span >4000+</span>
            <span>1000+</span>
          </p>
        </div>
      </div>
      <div class="content_list">
        <div class="inner_content content_four">
          <p class="one"><img src="../../assets/img/img3.png" alt=""></p>
          <p class="two">
            <span>媒体关注量&nbsp;</span> 
            <span>and</span> 
            <span>&nbsp;C端用户人群</span> 
          </p>
          <p class="three">
            <span>40万+</span>
            <span>40万+</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.page3 {
  background: url("../../assets/img/guanwang/2bg.jpg") no-repeat;
  background-size: 100% 100%;

  .page-header {
    padding: 20px 100px;
    @include pageHeader();

    p:nth-child(1) {
      color: #fff;
    }

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
.content {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  padding: 0 60px 30px 60px;
  .content_list {
    display: inline-block;
    vertical-align: top;
    width: 480px;
    height: 210px;
    background: red; 
    margin: 10px 30px;
    cursor: default;
    .inner_content {
      margin: 30px 0 0 60px;
      .one {
        line-height: 35px;
        color: rgb(159, 168, 190);
        span{
          line-height:initial;

        }
      }

      .two {
        line-height: 44px;
        color: rgb(219, 242, 248);
        font-size: 18px;
        span:nth-of-type(2){
          margin: 0 15px;
          // color: rgb(121, 132, 182);
          color: white;
        }
      }
      .spec_two{
        // background: url('../../assets/img/bg.png') no-repeat;
        filter:alpha(opacity=50); 
        background-position: 41%;
        color: rgb(29, 46, 102);
        padding-top: 12px;
        height: 100px;
        margin-top: 20px;
        a{
          position: relative;
          top: -16px;
        }
        a span{
          margin-left: 150px;
          margin-right: 15px;
          font-size: 48px;
          font-weight: bold;
        }
      }

      .three {
        line-height: 45px;
        color: white;
        span:first-child{
          font-size: 38px;
          margin-right: 20px;
        }
        span:nth-of-type(2){
          font-size: 38px;
          margin-left: 40px;
        }
        span.case{
          display: inline-block;
          font-size: 12px;
          line-height: 16px;
        }
      }
      .spec_three{
        span:nth-of-type(1){
          display:inline-block;
          width: 106px;
        }
      }
    }

    .page-number {
      height: 110px;
      padding: 5px 0;
      @include gobalWidth();
    }

    .page-horse {
      height: 425px;
      @include gobalWidth();
    }
    // padding-top: 30px;
    // padding-left: 100px;
    // padding: 30px 0 0 100px;
  }
  .content_list.map_bg{
    background: url('../../assets/img/map.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .content_list:hover{
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  .content_list:nth-of-type(4n + 1) {
    background: rgb(9, 184, 215);
  }

  .content_list:nth-of-type(4n + 2) {
    // background: white;
    // margin-top: 45px;
  }
  .content_list:nth-of-type(4n + 3) {
    background: rgb(53, 79, 166);
  }


  .content_list:nth-of-type(4n) {
    background: rgb(239, 125, 0);
    background: url('../../assets/img/bg2.png');
    // margin-top: 45px;
  }
}
.content_wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: rgb(54, 174, 234);
}
</style>