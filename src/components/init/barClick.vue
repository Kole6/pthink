<!-- 自定义 echart 柱状图组件 -->
<template>
  <div>
    <!-- echart表格 -->
    <div :id="chartId"  
         class="pieChart" 
         :style="echartStyle" >
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'barChart'
    },
    // 样式
    echartStyle: { 
       type: Object,
    },
    // 数据
    opinionData: {
      type: Array,
      default() {
        return []
      }
    },
    xAxisData:{
        type:Array,
        default() {
            return []
        }
    }
  },
  data(){
    return {
      // chartId:'barChart',
      opinionData:[],
      echartStyle:{}
    }
  },
  mounted(){
    this.$nextTick(function() {
      this.drawPie();
    })
  },
  methods: {
    // 监听扇形图点击
    eConsole(param) {
      // 向父组件传值
      this.$emit("currentEchartData", param.name,this.chartId,param);
      // setAgain()
    },
    // 重新渲染
    setAgain(){
      this.charts.setOption(this.getPieOption(),true);
      console.log("重新渲染")
    },
    // 绘制饼状图
    drawPie(){
      this.charts = this.$echarts.init(document.getElementById(this.chartId));
      this.charts.on("click", this.eConsole);
      let pieOption = this.getPieOption();
      this.charts.setOption(pieOption);
    },
    getPieOption(){
      let pieOption = {};
      let chartId = this.chartId;
      pieOption.tooltip = {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'     
        }
      },
      pieOption.xAxis = {
        type: 'category',
        axisLabel: {
          interval:0,
          // rotate:45
        },
        data: this.xAxisData
      },
      pieOption.yAxis = {
        type: 'value',
        "name": "（分）",
        "min": 0,
        "max": 100,
        "interval": 20,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        },
        "axisLine": {
          "show": false
        },
      },
      pieOption.series = [{
                  data: this.opinionData,
                  type: 'bar',
                  barWidth : 45, //柱状图宽度
                  itemStyle: {
                    normal: {
                        color: function(params) {
                            //根据chartId返回颜色
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            var colorList1 = [
                              '#4da1ff','#4da1ff','#4da1ff','#4da1ff','#4da1ff','#4da1ff',
                              '#4da1ff','#4da1ff','#4da1ff','#4da1ff','#4da1ff','#4da1ff',
                              '#4da1ff','#4da1ff','#4da1ff','#4da1ff','#4da1ff','#4da1ff'
                            ];
                            var colorList2 = [
                              '#ffb511','#00d0b3','#4da1ff','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#f54f4a'
                            ];
                            var colorList3 = [
                              '#f54f4a','#f54f4a','#f54f4a','#f54f4a','#f54f4a','#f54f4a',
                              '#f54f4a','#f54f4a','#f54f4a','#f54f4a','#f54f4a','#f54f4a',
                              '#f54f4a','#f54f4a','#f54f4a','#f54f4a','#f54f4a','#f54f4a'
                            ];
                            if(chartId=='parCharts1'){//蓝色
                                return colorList1[params.dataIndex]
                            }else if(chartId=='parCharts2'){//彩色
                                return colorList2[params.dataIndex]
                            }else if(chartId=='parCharts3'){//红色
                                return colorList3[params.dataIndex]
                            }else{
                                return colorList1[params.dataIndex]
                            }
                            
                        },
        　　　　　　　
                    }
                },
                  
              }]

     
      return pieOption;
    }
  },
  watch: {
    opinionData: function (val, oldVal) {
      this.$nextTick(function() {
        this.drawPie();
      });
    }
  }
}
</script>
 
<style lang="scss" scoped>
  .pieChart{
    width: 98%;
    z-index: 98;
  }
</style>