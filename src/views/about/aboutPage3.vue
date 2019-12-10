<template>
  <div class="container">
    <div class="page-header">
      <p>战略部署</p>
      <p>How can we utilize his knowledge and skill to our advantage</p>
    </div>
    <div class="content">
      <div class="list" v-for="(item,index) in data" :key="index"
      @mouseenter="active = index" 
      @mouseleave="active = undefined">
        <p class="img">
          <template v-if="active === index">
            <img :src="item.imgActive" alt>
          </template>
          <template v-else>
            <img :src="item.img" alt>
          </template>
        </p>
        <p class="text">{{item.text}}</p>
        <!-- <p class="button">
          <span>more</span>
        </p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutPage3",
  data() {
    return {
      data: [
        {
          text: "连接每一个与教育有关的C端,打通教育最后一公里",
          img: require("@/assets/img/about/about_icon_1.png"),
          imgActive:require("@/assets/img/about/about_icon_active_1.png"),
        },
        {
          text: "持续不断、合理合法与客户联动，并且最快速度部署",
          img: require("@/assets/img/about/about_icon_2.png"),
          imgActive:require("@/assets/img/about/about_icon_active_2.png"),
        },
        {
          text: "将资源、工具、应用、现金流、通过主通道与数亿C端连接并运营",
          img: require("@/assets/img/about/about_icon_3.png"),
          imgActive:require("@/assets/img/about/about_icon_active_3.png"),
        },
        {
          text:
            "对于每天在管道中流淌的伴随式数据进行记录、分析、应用，转为智力能量分享",
          img: require("@/assets/img/about/about_icon_4.png"),
          imgActive:require("@/assets/img/about/about_icon_active_4.png"),
        }
      ],
      active:undefined,
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.container {
  background: rgb(54, 174, 234);
  padding: 20px 0 80px 0;
  .page-header {
    @include pageHeader();
    color: white;
    p:last-child {
      color: white;
      line-height: 30px;
    }
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    .list {
      width: 265px;
      height: 450px;
      background: rgb(53, 79, 166);
      display: inline-block;
      vertical-align: top;
      margin-left: 15px;
      position: relative;
      .img {
        text-align: center;
        padding-top: 70px;
        padding-bottom: 20px;
      }
      .text {
        line-height: 20px;
        padding: 10px 40px;
        text-align: center;
        font-size: 14px;
        color: rgb(148, 154, 190);
      }
      .button {
        text-align: center;
        line-height: 50px;
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
        span {
          display: inline-block;
          width: 170px;
          // cursor: pointer;
          border: solid 1px rgb(215, 220, 237);
          color: rgb(215, 220, 237);
        }
      }
    }
  }
}
</style>
