<template>
  <div class="container">
    <div class="content">
      <img src="@/assets/img/research/research_pic1.png" alt />
      <div class="desc">
        <p class="title">朋程研究院</p>
        <p
          class="title_paragraph"
        >朋程大数据研究院（简称"研究院") 是由新朋程发起成立，凝聚知名教育专家、功勋院校长、信息化专家、行业企业专家、名师工匠、数据研究机构等多元智力主体组成的教育研究机构。</p>
        <p
          class="title_paragraph"
        >研究院致力于以社会力量开展教育教学研究，从第三方评价机构的视角推动教育教学质量提升，促进教育改革和发展。目前，研究院已自主研发了职业教育数据库及AI分析系统，参与了多项部级职业教育质量与大数据相关课题研究，长期与上海市教育科学研究院职成教研究所、华东师范大学职成教研究所等全国著名教育研究机构及众多著名教育专家，高水平院校、知名企业合作。</p>
        <p
          class="title_paragraph"
        >研究院以校企深度融合模式与用户共同发展，凝聚行业情英设计研发有引领价值的优质产品，在全国范围内搭建良好的售后服务保障体系，积极参与职业教育领域的重大赛事、活动和会议。拥有职业教育最具影响力的互联网平台 ― 职教圈。具备40W＋的主流媒体信息和调研通道，已逐步建立了牢固的品牌凝聚力和影响力，不断创新行业标准与内涵，为职业院校教育教学改革发展添砖加瓦。</p>
      </div>
    </div>
    <div class="bottom_wrapper">
      <div class="bottom">
        <div class="button list wy-noPoint">
          <span>业务范围</span>
        </div>
        <div
          v-for="(item,index) in listData"
          :key="index"
          @click="handleClick(item,index)"
          :class="['list angular6',active===index?'active':'']"
        >
          <div>
            <img :src="item.img" alt />
            <p>{{item.name}}</p>
          </div>
        </div>
        <!-- 最后的三个点 -->
        <!-- <div class="list last">
                <span></span>
                <span></span>
                <span></span>
        </div>-->
      </div>
    </div>
    <div style="height:320px">
      <transition name="pic" appear>
        <div class="pic_wrapper" v-show="showPic">
          <el-image :src="currentPic" alt style="height:315px">
            <template #placeholder>
              <el-image :src="placeHolderImg"></el-image>
            </template>
          </el-image>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "researchPage1",
  data() {
    return {
      placeHolderImg: "static/loading.gif",
      listData: [
        {
          name: "教育教学咨询",
          img: require("@/assets/img/research/research_bg1.png")
        },
        {
          name: "诊改咨询",
          img: require("@/assets/img/research/research_bg2.png")
        },
        {
          name: "数据服务",
          img: require("@/assets/img/research/research_bg3.png")
        },
        {
          name: "专项培训",
          img: require("@/assets/img/research/research_bg4.png")
        },
        {
          name: "信息化规划",
          img: require("@/assets/img/research/research_bg5.png")
        }
      ],
      picList: [
        require("@/assets/img/research/detail_p1.jpg"),
        require("@/assets/img/research/detail_p2.jpg"),
        require("@/assets/img/research/detail_p3.jpg"),
        require("@/assets/img/research/detail_p4.jpg"),
        require("@/assets/img/research/detail_p5.jpg")
      ],
      active: 0,
      showPic: true,
      picIndex: 0
    };
  },
  computed: {
    currentPic() {
      return this.picList[this.picIndex];
    }
  },
  methods: {
    handleClick(item, index) {
      this.showPic = false;
      this.active = index;
      setTimeout(() => {
        this.picIndex = index;
        this.showPic = true;
      }, 400);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: rgb(249, 250, 255);
  padding: 30px 0 50px 0;
  .content {
    width: 1200px;
    margin: 0 auto;
    .desc {
      box-sizing: border-box;
      display: inline-block;
      vertical-align: top;
      padding-top: 50px;
      padding-left: 30px;
      width: calc(100% - 320px);
      .title {
        font-size: 22px;
        font-weight: bold;
        line-height: 46px;
      }
      .title_paragraph {
        font-size: 14px;
        line-height: 24px;
        text-indent: 2em;
      }
    }
  }
  .bottom_wrapper {
    width: 1200px;
    margin: 0 auto;
    .bottom {
      margin: 0 auto;
      text-align: center;
      .list {
        display: inline-block;
        cursor: pointer;
      }
      .last {
        width: 60px;
        text-align: center;
        span {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgb(179, 184, 203);
          margin-left: 3px;
        }
      }
      .button {
        width: 120px;
        height: 45px;
        // background: rgba(0, 0, 0, 0.2);
        text-align: center;
        border: solid 2px rgb(192, 196, 213);
        border-radius: 25px;
        margin-right: 20px;
        cursor: pointer;
        span {
          line-height: 45px;
          color: rgb(204, 206, 219);
        }
      }
      .angular6 {
        width: 150px;
        height: 170px;
        background: url("../../assets/img/research/bg.png") no-repeat;
        position: relative;
        vertical-align: middle;
        div {
          text-align: center;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        p {
          font-size: 14px;
          white-space: nowrap;
          color: rgb(84, 86, 100);
        }
      }
      .angular6.active {
        background: url("../../assets/img/research/bg_active.jpg") no-repeat;
        background-size: 100%;
        p {
          color: #fff;
        }
      }
    }
  }
  .pic_wrapper {
    width: 800px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    padding-top: 20px;
    img {
      max-width: 100%;
    }
  }
}

.pic-enter-active {
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 0.7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.pic-leave-active {
  animation-name: zoomOut;
  -webkit-animation-duration: 1s;
  animation-duration: 0.7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.pic-enter,
.pic-leave-to {
  opacity: 0;
}
.pic-enter-to,
.pic-leave {
  opacity: 1;
}

@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
</style>
