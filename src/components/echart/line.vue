<!-- 自定义 echart 组件 -->
<template>
  <div>
    <!-- echart表格 -->
    <div :id="chartId"  class="pieChart" 
         :style="echartStyle" ></div>
  </div>
</template>
 
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: 'pieChart'
    },
    // 样式
    echartStyle: { 
       type: Object,
    },
    // 标题文本
    titleText: {
      type: String,
      default: ''
    },
    // 提示框键名
    tooltipFormatter: {
      type: String,
      default: ''
    },
    // 提示框标题
    seriesName: {
      type: String,
      default: ''
    },
    // 饼图半径(第一项内半径，第二项外半径)
    radius: {
      type: Array,
      default() {
        return ['0%', '65%']
      }
    },
    // // 设置饼的圆心坐标,不设置就会默认在中心的位置
    // center: {
    //   type: Array,
    //   default() {
    //     return ['60%', '50%']
    //   }
    // },
    // // 显示图例组件
    // showLegend: {
    //   type: Boolean,
    //   default: true
    // },
    // 图例组件
    legend: {
      type: Object,
      default(){
        return {}
      }
    },
    // 扇形区域数据
    // opinionData: {
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // }
    xAxisData:{
      type: Array,
      default() {
        return []
      }
    },
    opinionData: {
      type: Object,
      default() {
        return []
      }
    }
  },
  data(){
    return {}
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
      // this.$emit("currentEchartData1", param.name,this.chartId,param);
      // setAgain()
    },
    // 重新渲染
    setAgain(){
      // this.charts.setOption(this.getPieOption(),true);
      console.log("151")
    },
    // 绘制饼状图
    drawPie(){
      this.charts = this.$echarts.init(document.getElementById(this.chartId));
      // this.charts.on("click", this.eConsole);
      let pieOption = this.getPieOption();
      this.charts.setOption(pieOption);
    },
    getPieOption(){
      let pieOption = {};
      pieOption.tooltip = {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
      };
      pieOption.legend = this.legend;
      pieOption.xAxis = {
         type: 'category',
          boundaryGap: false,
          data: this.xAxisData
      };
      pieOption.yAxis =  {
        type: 'value',
        "name": "",
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
      };
      pieOption.series = [{
          name:this.legend.data[0],
          data: this.opinionData[0],
          type: 'line',
          smooth:true,
          lineStyle: {
            normal:{
              color: "#4da1ff"
            }
          },
          itemStyle: {
            normal:{
              color: "#4da1ff"
            }
          },
          areaStyle: {//注释则不显示区域
                  normal: {
                      color:'#e5eff9'
                  }
              },
          },
        {
          name:this.legend.data[1],
          data: this.opinionData[1],
          type: 'line',
          smooth:true,
          lineStyle: {
            normal:{
              color: "#ffb510"
            }
          },
          itemStyle: {
            normal:{
              color: "#ffb510"
            }
          },
          areaStyle: {
                  normal: {
                      color: '#fbf6b7'
                  }
              },
          }
        ]
     
      return pieOption;
    }
  },
  watch: {
    opinionData: function (val, oldVal) {
      this.drawPie();
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