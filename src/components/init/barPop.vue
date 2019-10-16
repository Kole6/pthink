<!--柱状图-->
<template>
  <div class="page">
    <router-link to="home">Home</router-link>
    <el-card>
      <div class="pageContent">
        <!-- 图表组件 -->
        <div class="area">
          <div class="area-top">仅显示的柱状图</div>
          <div class="area-content">
             <bar-chart :chartId="charts1.chartId" 
                      :xAxisData="charts1.xAxisData"
                      :opinionData="charts1.opinionData"
                      :echartStyle="charts1.echartStyle" 
                      >
            </bar-chart>
          </div>
        </div>
        <div class="area">
          <div class="area-top">可点击柱状图</div>
          <div class="area-content">
             <bar-click :chartId="charts2.chartId" 
                      :xAxisData="charts2.xAxisData"
                      :opinionData="charts2.opinionData"
                      :echartStyle="charts2.echartStyle" 
                      @currentEchartData='currentEchartData'
                      >
          </bar-click>
          </div>
        </div>
        
      </div>
    </el-card>
    <br>
  </div>
</template>
<script>
import barChart from "./bar.vue";
import barClick from "./barClick.vue";
export default {
  components: {
    barChart,
    barClick
  },
  data() {
    return {
       charts1 :{
          chartId: "parCharts1",
          echartStyle: {
            height: "420px",
            width: "100%"
          },
          xAxisData: ['项目经理', '安卓开发', 'ios开发', '产品经理', '测试', 'web前端'],
          opinionData:[12, 20, 15, 8, 7, 11],
      },
      charts2 :{
          chartId: "parCharts2",
          echartStyle: {
            height: "420px",
            width: "100%"
          },
          xAxisData: ['项目经理', '安卓开发', 'ios开发', '产品经理', '测试', 'web前端'],
          opinionData:[12, 20, 15, 8, 7, 11],
      },
    }
  },
  methods: {
    currentEchartData(name,id,param){
      this.$message(name)
    }
  }
};
</script>
<style lang='scss' scoped>
.page {
  color: #000;
  padding: 0 20px 0 20px;
  .pageContent {
    width: 98%;
    margin: 20px auto;
    .area {
      // border: 1px solid darkblue;
      display: inline-block;
      vertical-align: top;
      margin-bottom: 20px;
      width: calc(50% - 14px);
      height: 480px;
      margin-right: 10px;
      background-color: #fff;
      .area-top {
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
        height: 50px;
        color: black;
        padding-top: 20px;
        padding-left: 30px;
        font-size: 18px;
        line-height: 45px;
        font-weight: bold;
        .bottom {
          border: 1px solid #f1f1f1;
          margin-left: 520px;
        }
      }

      .area-top:hover {
        color: #4da1ff;
      }
      .area-content {
        height: 424px;
        // border: 1px solid seagreen;
        width: 100%;
      }
    }
    .area-all {
      width: 100%;
    }
  }
}
</style>
