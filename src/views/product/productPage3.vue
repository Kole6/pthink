<template>
  <div class="container">
    <div class="title">
      <p>成果案例</p>
      <p>we demand not only quantity but also quality</p>
    </div>
    <div class="content_wrapper">
      <div class="content">
        <div class="list" v-for="(item,index) in caseContent" :key="index">
          <el-popover placement="right" title trigger="hover">
            <img :src="item.img" alt style="max-height: 90vh;max-width:60vw;">
            <div
              slot="reference"
              class="list-img"
              :style="{ background: `url('${item.img}') no-repeat`,'background-size': '100%'}"
            ></div>
          </el-popover>
          <div class="desc">
            <p>{{item.title}}</p>
            <!-- <template v-if="item.text.length>130">
                            <el-tooltip effect="light" placement="bottom">
                                <template slot="content">
                                    <p v-html="item.text" style="width:600px;word-break: break-all;"></p>
                                </template>
                                <p v-html="item.text"></p>
                            </el-tooltip>
            </template>-->
            <p v-html="item.text"></p>
          </div>
        </div>
        <!-- <div class="list">
                    <img src="@/assets/img/product/product_bg6.png" alt="">
                    <div class="desc">
                        <p>上海市贸易职业学校通过系统实现学校内部各业务线</p>
                        <p>上海市贸易职业学校通过系统实现学校内部各业务线（教务、学生工作、人事、行政、资产等）管理工作的电子化、信息化．构建了统一的各部门协同工作系统。学校业务管理人员摆脱了人工操作与管理．学生可以及时了解自已的在校情况、学习情况、就业情况等信息．并可以参与学校的学生网上选课、学生评价老师等活动，教师可以通过系统完成例如上传教案、网上录入成绩等日常工作．班主任了解学生违纪情况加强学生管理．实习指导老师实现对顶岗实习学生状况跟踪．学校领导通过系统掌握学校关键指标情况、综合分析事业部门、各业务线的工作进度．实现了及时掌握全校的运行状态，辅助领导对校园事物进行决策分析。</p>
                    </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import { caseData } from "./product.js";
export default {
  name: "productPage3",
  props: {
    query: {
      type: Object,
      default() {
        return {
          type: "0",
          name: "数据产品"
        };
      }
    }
  },
  data() {
    return {
      caseData: caseData,
      imgShow: true
    };
  },
  computed: {
    caseContent() {
      return this.caseData.filter(item => {
        return this.query.name == item.name && this.query.type == item.index;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  .title {
    @include pageHeader;
    p:last-child {
      color: rgb(83, 96, 116);
    }
  }
  .content {
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    .list {
      padding: 0 70px;
      margin-bottom: 50px;
      .list-img {
        width: 220px;
        height: 120px;
        display: inline-block;
      }
      .desc {
        vertical-align: top;
        box-sizing: border-box;
        display: inline-block;
        width: calc(100% - 220px);
        overflow: hidden;
        padding-left: 30px;
        p:first-child {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        p:last-child {
          // max-height: 90px;
          font-size: 13px;
          line-height: 22px;
          text-indent: 2em;

          // overflow : hidden;
          // text-overflow: ellipsis;
          // display: -webkit-box;
          // -webkit-line-clamp: 4;
          // -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
