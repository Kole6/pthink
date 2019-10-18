<!--官网首页-->
<template>
  <div>
    <div>
      <!-- <div class="section">
        <page1></page1>
      </div> -->
      <div class="section">
        <page2></page2>
      </div>
      <div class="section">
        <page3></page3>
      </div>
      <div class="section">
        <page4></page4>
      </div>
      <div class="section">
        <page5></page5>
      </div>
      <div class="section">
        <page6></page6>
      </div>
      <!-- <div class="section">
        <bottom></bottom>
      </div> -->
    </div>
  </div>
</template>
<script>
import page1 from "./page1.vue";
import page2 from "./page2.vue";
import page3 from "./page3.vue";
import page4 from "./page4.vue";
import page5 from "./page5.vue";
import page6 from "./page6.vue";
import bottom from './bottomInfo.vue';
export default {
  components: {
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    bottom,
  },
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        scrollingSpeed: 600,
        verticalCentered: false,
        scrollOverflow: true, //内容超过满屏后显示滚动条
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59"
        ]
      }
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