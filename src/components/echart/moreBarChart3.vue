<!-- 自定义 echart 组件 -->
<template>
  <div>
    <!-- echart表格 -->
    <div :id="chartId" :style="echartStyle" class="barChart"></div>
  </div>
</template>
 
<script>
// import LinearGradient from '../../utils/js/echarts/color/linearGradient';
export default {
  props: {
    chartId: {
      type: String,
      default: "barChart"
    },
    // 样式
    echartStyle: {
      type: Object,
      default() {
        return { height: "400px", width: "100%" };
      }
    },
    xAxis: {
      type: Array,
      default() {
        return [];
      }
    },
    // 标题文本
    title: {
      type: String
    },
    // 数量和占比的纵坐标
    yName: {
      type: String,
      default() {
        return {};
      }
    },
    // 提示框键名
    tooltipFormatter: {
      type: String,
      default: ""
    },
    // 提示框标题
    seriesName: {
      type: String,
      default: ""
    },
    // 显示图例组件
    showLegend: {
      type: Boolean,
      default: true
    },
    // 图例组件
    legend: {
      type: Object,
      default() {
        return {};
      }
    },
    // 图表的位置
    grid: {
      type: Object,
      default() {
        return {};
      }
    },
    // 区域数据
    opinionData: {
      type: Array,
      default() {
        return [];
      }
    },
    opinionData1: {
      type: Array,
      default() {
        return [];
      }
    },
    // 饼状图数据
    legrendpos: {
      type: Number,
      default: 50
    },
    barWidths: {
      type: Number,
      default: 15
    },
    type: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawBar();
    });
  },
  methods: {
    // 监听扇形图点击
    eConsole(param) {
      // 向父组件传值
      // console.log("3333333")
      // console.log(param);
      // var code=param.data.code
      console.log("param.data", param);
      sessionStorage.setItem("zyName2", param.name);
      this.$emit("currentEchartData", param.data);
    },
    // 绘制饼状图
    drawBar() {
      this.charts = this.$echarts.init(document.getElementById(this.chartId));
      this.charts.on("click", this.eConsole);
      let option = this.getOption();
      this.charts.setOption(option, true);
      window.addEventListener("resize", this.charts.resize);
    },
    getOption() {
      let lengends = [];
      let SeriesTotal = [];
      //表示折线图
      var ItemLine = function() {
        return {
          name: "",
          type: "line",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          data: [],
          yAxisIndex: 1
        };
      };
      //表示柱状图
      var ItemBar = function() {
        return {
          name: "",
          type: "bar",
          dataIndex: "2",
          barWidth: 20,
          data: [],
          itemStyle: {
            normal: {
              barBorderRadius: [100, 100, 0, 0]
            }
          },
          label: {
            normal: {
              show: true,
              position: "top", // 标签的位置
              textStyle: {
                fontSize: 16 // 文字的字体大小
              },
              formatter: "{c}"
            }
          }
        };
      };
      //表示柱状图
      var ItemPie = function() {
        return {
          type: "pie",
          radius: ["0%", "50%"], // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是饼,不是环形
          center: ["50%", "50%"], // 设置饼的圆心坐标,不设置就会默认在中心的位置
          selectedMode: "single",
          data: [], // 扇形区域数据
          label: {
            // 饼图图形上的文本标签
            normal: {
              show: true,
              position: "outer", // 标签的位置
              textStyle: {
                fontWeight: 500,
                fontSize: 12 // 文字的字体大小
              },
              formatter: "{b} \n{d}%"
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  "#8BC34A",
                  "#23AAEA",
                  "#FFA31C",
                  "#BA68C8",
                  "#EF5350",
                  "#1D4C9E",
                  "#FFFF00",
                  "#006633",
                  "#8BC34A"
                ];
                return colorList[params.dataIndex];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        };
      };
      var ItemPie1 = function() {
        return {
          type: "pie",
          radius: ["60%", "70%"], // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是饼,不是环形
          center: ["50%", "50%"], // 设置饼的圆心坐标,不设置就会默认在中心的位置
          selectedMode: "single",
          data: [], // 扇形区域数据
          label: {
            // 饼图图形上的文本标签
            normal: {
              show: true,
              position: "outer", // 标签的位置
              textStyle: {
                fontWeight: 500,
                fontSize: 12 // 文字的字体大小
              },
              formatter: "{b} \n{d}%"
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  "#8BC34A",
                  "#23AAEA",
                  "#FFA31C",
                  "#BA68C8",
                  "#EF5350",
                  "#1D4C9E",
                  "#FFFF00",
                  "#006633",
                  "#8BC34A"
                ];
                return colorList[params.dataIndex];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        };
      };
      if (this.type == "pie") {
        for (let k in this.opinionData) {
          //给legend赋值
          lengends.push(this.opinionData[k].name);
        }
        for (let k in this.opinionData1) {
          //给legend赋值
          lengends.push(this.opinionData1[k].name);
        }
        let itemLine = new ItemPie();
        itemLine.data = this.opinionData;
        SeriesTotal.push(itemLine);
        if (this.opinionData1 !== "") {
          let itemLine1 = new ItemPie1();
          itemLine1.data = this.opinionData1;
          SeriesTotal.push(itemLine1);
        }

        // console.log(SeriesTotal);
      } else if (this.type == "line") {
        for (let k in this.opinionData) {
          //给legend赋值
          lengends.push(this.opinionData[k].name);
          //核心，给series赋值，分开包装的思想。
          let itemLine = new ItemLine();
          var colorList = ["#00BCD4", "#8BC34A", "#FFA31C"];
          itemLine.name = this.opinionData[k].name;
          itemLine.data = this.opinionData[k].value;

          itemLine.itemStyle = {
            normal: {
              color: colorList[k]
            }
          };
          SeriesTotal.push(itemLine);
        }
      } else {
        for (let k in this.opinionData) {
          //给legend赋值
          lengends.push(this.opinionData[k].name);
          //核心，给series赋值，分开包装的思想。
          var itemBar = new ItemBar();
          var colorList = [
            "#00BCD4",
            "#8BC34A",
            "#FFA31C",
            "#BA68C8",
            "#EF5350"
          ];
          itemBar.name = this.opinionData[k].name;
          itemBar.data = this.opinionData[k].value;
          itemBar.itemStyle = {
            normal: {
              color: colorList[k]
            }
          };
          SeriesTotal.push(itemBar);
        }
      }
      let option = {};
      if (this.type !== "pie") {
        option.xAxis = [
          {
            type: "category",
            axisLabel: {
              interval: 0, // 横轴信息全部显示
               rotate: 10, // 20度角倾斜显示
              textStyle: { color: "#333", fontSize: 12 }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(42, 95, 207, 1)",
                width: 1
              }
            },
            data: this.xAxis
          }
        ];
        option.yAxis = [
          {
            show: true,
            position: "left",
            type: "value",
            name: this.yName,
            nameGap: 20,
            axisLabel: {
              textStyle: { color: "#333", fontSize: 15 }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(42, 95, 207, 1)",
                width: 1
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: ["#24378e"],
                width: 1,
                type: "solid"
              }
            }
          },
          {
            type: "value",
            nameGap: 20,
            position: "left",
            name: this.yName,
            axisLabel: {
              textStyle: { color: "#333", fontSize: 15 }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(42, 95, 207, 1)",
                width: 1
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: ["#24378e"],
                width: 1,
                type: "solid"
              }
            }
          }
        ];
      }
      option.title = {
        text: this.title,
        textStyle: {
          fontSize: 14
          // fontWeight: 600
        },
        left: 50,
        top: 40
      };
      (option.legend = {
        textStyle: { fontSize: 15, color: "#333" },
        bottom: 0,
        data: lengends,
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 20
      }),
        (option.grid = {
          top: 100,
          bottom: 80,
          right: 100,
          left: 100
        });
      option.tooltip = {};

      option.series = SeriesTotal;
      return option;
    }
  },
  watch: {
    opinionData: function(val, oldVal) {
      this.$nextTick(function() {
        this.drawBar();
      });
    },
    title: function() {
      if (this.charts) {
        this.charts.dispose();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.barChart {
  width: 100%;
}
</style>