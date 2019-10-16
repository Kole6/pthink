<template>
  <div class="container">
    <div class="title">
      <p>成果案例</p>
      <p>Achievement Case</p>
    </div>
    <div class="content_wrapper">
      <div class="content">
        <div class="list">
          <p class="title">国家级课题与项目</p>
          <p class="item">“职业教育评估系统架构与高职院校下轮评估实施方案的研究与实践”课题组成员</p>
          <p class="item">教育部职业院校教学工作诊断与改进方案研制组成员</p>
          <p class="item">全国中等职业学校人才培养工作状态数据管理系统开发、技术支持单位</p>
          <p class="item">与广州工程职业技术学院合作研究高职院校人才培养工作状态数据系统分析模型</p>
          <p class="item">国务院教育督导委员会办公室职业教育督导评估课题组成员</p>
          <p class="item">教育部“金教工程”职业教育信息化系统需求设计与咨询单位</p>
          <p class="item">全国中职数据中心与数据监测</p>
          <p class="item">教育部“教育服务于监管体系信息化建设”项目职业教育学校管理信息系统建设</p>
          <p class="item">教育部职业院校教学工作诊断与改进专家委员会委员单位</p>
        </div>
        <div class="list">
          <p class="title">数据平台类合作案例</p>
          <p class="item">与诊改专家、上海市教委、职业院校四方合作研发学校质量保证体系信息化系统，并在多个职业院校应用</p>
          <p class="item">承建上海、广东、贵州、云南、广西、湖北、重庆、黑龙江等十几个省级职业院校人才培养状态数据系统研发</p>
          <p class="item">为上海、天津、江苏等多个省市规划省级职业教育数据中心建设</p>
          <p class="item">参与多所职业院校智慧校园建设</p>
          <p class="item">十余个省市级职业院校人才培养状态数据系统平台与数据监测</p>
        </div>
        <div class="list">
          <p class="title">咨询服务类项目案例</p>
          <p class="item">国务院教育督导委员会办公室职业院校督导评估数据运算与排名分析</p>
          <p class="item">上海市中等职业教育综合管理服务平台建设规划咨询与方案设计</p>
          <p class="item">贵州、上海、重庆、广东等省级质量年报、专项数据分析报告编制</p>
          <p class="item">中国物流&电子商务专业竞争力排行榜</p>
          <p class="item">中国物流&电子商务就业风向标</p>
          <p class="item">贵州省职业教育公共实训中心规划设计</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "researchPage3",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.container{
  background: rgb(249,250,255);
}
.title {
  @include pageHeader;
  p:last-child {
    color: rgb(193, 190, 206);
  }
}
.content {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  margin-top: 20px;
  .list {
    display: inline-block;
    width: 320px;
    height: 500px;
    margin: 0 20px;
    padding: 0 20px 20px 20px;
    vertical-align: top;
    background: rgb(246,245,251);
    .title {
      font-size: 16px;
      line-height: 36px;
      font-weight: bold;
    }
    .item{
      // text-indent: 2em;
      font-size: 13px;
      line-height: 22px;
      margin: 7px 0;
      color: #2c3e50c7;
    }
    .item::before{
      content:'';
      display: inline-block;
      width: 5px;
      height: 5px;
      margin-right:7px;
      vertical-align: 2px;
      border: 1px solid gray;
      border-radius: 5px;
    }
    .item:hover{
      cursor: default;
      color: rgb(23,207,239);
    }
  }
}
</style>
