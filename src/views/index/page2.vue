<!--首页图片+我们的产品-->
<template>
  <div>
    <div class="scoll-body">
      <el-carousel :interval="4000" arrow="always" :height="elCarHeight">
        <el-carousel-item v-for="(item,i) of picList" :key="i" >
          <img :src="item" class="up_pic" alt  @click="handleImgClick(i)"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="page2">
      <div class="page-header">
        <p>我们的产品</p>
        <p>we demand not only quantity but also quality</p>
      </div>
      <div class="page-horse">
        <!-- <img :src="require(`../../assets/img/guanwang/xu/xu2.jpg`)" alt> -->
        <div class="title8">
          <div class="page2-content">
            <!-- <div class="page2-Pro pageQuan href_pro_1" > -->
            <router-link
              :to="{path:'/product',query:{load:transform('数据产品')}}"
              tag="div"
              class="page2-Pro pageQuan href_pro_1"
            >
              <div class="page2-proImgDiv">
                <img class="page2-proimg-a" src="../../assets/img/index/i-pro-round1.png" />
                <img class="page2-proimg-b" src="../../assets/img/index/i-pro-round3-normal.png" />
                <img class="page2-proimg-c" src="../../assets/img/index/i-pro-round2.png" />
                <img class="page2-quan" src="../../assets/img/index/i-pro-round2-2.png" />
                <img class="page2-proimg-d" src="../../assets/img/index/pro1.png" />
              </div>

              <div class="page2-profont">
                <br />
                <span class="page2-profont-1">数据产品</span>
                <br />
                <br />
                <span class="page2-profont-2">
                  整合数据资源，打造数据采集、处理、检测、
                  预警、应急指挥于一体的可视化平台，
                  真正做到“用数据说话、用数据决策、用数据创新”
                </span>
              </div>
            </router-link>
            <!-- </div>	 -->
            <!-- <div class="page2-Pro-div-2 pageQuan href_pro_2" > -->
            <router-link
              :to="{path:'/product',query:{load:transform('智慧校园')}}"
              tag="div"
              class="page2-Pro-div-2 pageQuan href_pro_2"
            >
              <div class="page2-proImgDiv">
                <img class="page2-proimg-a" src="../../assets/img/index/i-pro-round1.png" />
                <img class="page2-proimg-b" src="../../assets/img/index/i-pro-round3-normal.png" />
                <img class="page2-proimg-c" src="../../assets/img/index/i-pro-round2.png" />
                <img class="page2-quan" src="../../assets/img/index/i-pro-round2-2.png" />
                <img class="page2-proimg-d" src="../../assets/img/index/pro2.png" />
              </div>

              <div class="page2-profont">
                <br />
                <span class="page2-profont-1">智慧校园</span>
                <br />
                <br />
                <span class="page2-profont-2">打破业务与数据“孤岛”，实现校内资源的共建共享，互通互联，提升教育教学的精细化和智能化水平</span>
              </div>
            </router-link>
            <!-- <div class="page2-Pro-div-3 pageQuan href_pro_3" > -->
            <router-link
              :to="{path:'/product',query:{load:transform('质量管理')}}"
              tag="div"
              class="page2-Pro-div-3 pageQuan href_pro_3"
            >
              <div class="page2-proImgDiv">
                <img class="page2-proimg-a" src="../../assets/img/index/i-pro-round1.png" />
                <img class="page2-proimg-b" src="../../assets/img/index/i-pro-round3-normal.png" />
                <img class="page2-proimg-c" src="../../assets/img/index/i-pro-round2.png" />
                <img class="page2-quan" src="../../assets/img/index/i-pro-round2-2.png" />
                <img class="page2-proimg-d" src="../../assets/img/index/pro3.png" />
              </div>

              <div class="page2-profont">
                <br />
                <span class="page2-profont-1">质量管理</span>
                <br />
                <br />
                <span
                  class="page2-profont-2"
                >搭建人才培养质量保证体系，通过数据应用、监测预警、挖掘分析，为管理者提供数据决策支持，实现常态化的质量规范管理</span>
              </div>
            </router-link>
            <router-link
              :to="{path:'/product',query:{load:transform('C端应用')}}"
              tag="div"
              class="page2-Pro-div-4 pageQuan href_pro_4"
            >
              <div class="page2-proImgDiv">
                <img class="page2-proimg-a" src="../../assets/img/index/i-pro-round1.png" />
                <img class="page2-proimg-b" src="../../assets/img/index/i-pro-round3-normal.png" />
                <img class="page2-proimg-c" src="../../assets/img/index/i-pro-round2.png" />
                <img class="page2-quan" src="../../assets/img/index/i-pro-round2-2.png" />
                <img class="page2-proimg-d" src="../../assets/img/index/pro4.png" />
              </div>

              <div class="page2-profont">
                <br />
                <span class="page2-profont-1">C端应用</span>
                <br />
                <br />
                <span class="page2-profont-2">以移动电子证为核心主线，整合教育产业链产品资源，汇聚用户学习、工作、生活轨迹数据，挖掘数据价值、预测发展需求</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      elCarHeight: "100vh - 70px",
      picList: [
        require(`../../assets/img/guanwang/banner/banner1.jpg`),
        require(`../../assets/img/guanwang/banner/banner8.jpg`),
        require(`../../assets/img/guanwang/banner/banner6.jpg`),
        require(`../../assets/img/guanwang/banner/banner7.jpg`),
        require(`../../assets/img/guanwang/banner/banner3.jpg`),
        require(`../../assets/img/guanwang/banner/banner4.jpg`),
        require(`../../assets/img/guanwang/banner/banner5.jpg`),
      ]
    };
  },
  mounted() {
    this.elCarHeight = document.body.clientWidth / 2.37 + "px";
  },
  methods: {
    handleImgClick(index){
      // 可信教育一证通
      if(index === 1){
        this.$router.push({path:'/product',query:{type:3,name:'C端应用'}})
      }
    },
    transform(text) {
      if (!!text) {
        return escape(text);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.page2 {
  background-color: #f9faff;
  .page-header {
    @include pageHeader();
  }
  .page-horse {
    @include gobalWidth();
    // border: 1px solid saddlebrown;
    height: 500px;
    width: 1200px;
    position: relative;
    .title8 {
      position: absolute;
      color: rgba(0, 206, 239, 1);
      font-size: 32px;
      font-family: "微软雅黑", "PingFang-SC-UltraLight", "宋体";
      line-height: 21px;
      top: 12%;
      opacity: 1;
      text-align: center;
      width: 100%;
      height: 80%;
      .page2-content {
        width: 75%;
        height: 100%;
        left: 0;
        right: 0;
        position: relative;
        margin: 0 auto;
        .pageQuan {
          height: 100%;
          width: 22%;
          position: absolute;
          float: left;
          text-align: left;
          overflow: hidden;
          cursor: pointer;
          /*background-color: rgba(255,255,255,0.5);*/
          &:hover {
            background-image: linear-gradient(
              -180deg,
              rgba(7, 103, 254, 0) 0%,
              rgba(4, 119, 251, 0.1) 100%
            );
            /*background-color: rgba(255,255,255,0.05);*/
          }
          .page2-proimg-a {
            width: 60%;
            @keyframes mycolor {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          }
          .page2-proimg-b {
            width: 53.4%;
            top: 2%;
          }
          .page2-proimg-c {
            display: none;
            width: 44.4%;
            top: 4%;
            @keyframes mycolor1 {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          }
          &:hover .page2-proimg-c {
            display: inline;
            animation: mycolor1 1s linear infinite;
          }
          &:hover .page2-proimg-a {
            animation: mycolor 1s linear infinite;
          }
          .page2-quan {
            width: 44.4%;
            top: 4%;
          }
          .page2-proimg-d {
            width: 15%;
            cursor: pointer;
            top: 11%;
          }
        }
      }
      .page2-profont {
        text-align: center;
        width: 92%;
        margin: 70% auto;
        margin-bottom: 0;
        .page2-profont-1 {
          font-size: 18px;
          color: black;
          font-weight: bold;
        }
        .page2-profont-2 {
          font-size: 14px;
          color: #9ca8b9;
        }
      }
    }
  }
}
.page2-Pro-div-2 {
  left: 50%;
}
.page2-Pro-div-3 {
  left: 25%;
}
.page2-Pro-div-4 {
  left: 75%;
}
.pageQuan img {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.scoll-body {
  background-color: #f9faff;
  .up_pic {
    width: 100%;
  }
}
</style>