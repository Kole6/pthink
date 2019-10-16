<!--我们的优势-->
<template>
  <div class="page4">
    <div class="page-header">
      <p>我们的优势</p>
      <p>we demand not only quantity but also quantity</p>
    </div>
    <div class="page-yan">
      <div class="yan-el">
        深耕教育
        <div class="yan-line">
          <div class="lineAnimate"></div>
        </div>
        <p>十九年的教育行业积累，案例丰富，视角凝炼</p>
      </div>
      <div class="yan-el">
        应用广泛
        <div class="yan-line">
          <div class="lineAnimate"></div>
        </div>
        <p>公司是十八个省级教育行政部门的技术服务合作伙伴，在全国有较好的区域联动资源和条件，全国积累客户数超过5000，超过40w＋的人群关注</p>
      </div>
      <div class="yan-el">
        顶层优势
        <div class="yan-line">
          <div class="lineAnimate"></div>
        </div>
        <p>参与教育部教育信息化规划设计，并中标国家级业务系统，具有顶层设计能力和核心业务主干系统护航</p>
      </div>
      <div class="yan-el">
        专家引领
        <div class="yan-line">
          <div class="lineAnimate"></div>
        </div>
        <p>拥有全国顶尖业务专家团队和一流的数据研究机构,对教育类产品设计和数据挖掘有引领优势</p>
      </div>
      <div class="qiu"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.page4 {
  border: 1px rgba(131, 36, 36, 0) solid;
  background-color: #f9faff;
  .page-header {
    @include pageHeader();
  }
  .page-yan {
    @include gobalWidth();
    .qiu {
      width: 584px;
      height: 400px;
      background: url("../../assets/img/guanwang/3bg.png") no-repeat;
      background-size: 100% 100%;
      margin: 40px auto 80px auto;
    }
    .yan-el {
      width: 350px;
      position: absolute;
      line-height: 35px;
      font-size: 18px;
      font-weight: 700;
      .yan-line {
        width: 100%;
        height: 3px;
        background-color: rgba(131, 36, 36, 0);
        margin-bottom: 10px;
        .lineAnimate {
          background: linear-gradient(to right, #00eaf8, #0762fe);
          width: 0px;
          height: 100%;
          margin: 0 auto;
        }
      }
      p {
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
      }
      &:hover {
        color: rgb(0, 206, 239);
        .lineAnimate {
          width: 100%;
          transition: width 0.8s;
          -webkit-transition: width 0.8s;
        }
      }
      &:nth-child(1) {
        margin-top: 10px;
        margin-left: 40px;
        text-align: right;
      }
      &:nth-child(2) {
        margin-top: 250px;
        margin-left: 40px;
        text-align: right;
      }
      &:nth-child(3) {
        margin-top: 20px;
        margin-left: 780px;
      }
      &:nth-child(4) {
        margin-top: 290px;
        margin-left: 780px;
      }
    }
  }
}
</style>