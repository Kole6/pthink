<!---->
<template>
  <div>
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <page1></page1>
      </div>
      <div class="section">2 section</div>
      <div class="section">3 section</div>
      <div class="section">4 section</div>
      <div class="section">5 section</div>
      <div class="section">6 section</div>
    </full-page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        scrollingSpeed: 600,
        verticalCentered: false,
        scrollOverflow: true, //内容超过满屏后显示滚动条
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#fec401", "#1bcee6","#ee1a59"]
      }

      /*
      options: {
        licenseKey: null,
        // anchors: ['page1', 'page2', 'page3'], //路由后面添加参数
        verticalCentered: false, //定义每一页的内容是否垂直居中
        // afterLoad: this.afterLoad, //滚动到某一屏后的回调函数 
        scrollOverflow: true,//内容超过满屏后显示滚动条
        controlArrows: true, //是否通过箭头控制slide幻灯片
        loopHorizontal: true, //slide幻灯片是否循环滚动
        scrollBar: true, //true则是一滚动就是一整屏
        // onLeave: this.onLeave //滚动前的回调函数
      }
      */
    };
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      // console.log(destination);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

<!--
menu : '#menu'  //id=menu  来定制menu
-->