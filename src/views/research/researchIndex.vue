<!--官网首页-->
<template>
  <div>
    <div>
      <div class="section">
        <page1></page1>
      </div>
      <div class="section">
        <page2></page2>
      </div>
      <div class="section">
        <page3></page3>
      </div>
      
    </div>
  </div>
</template>
<script>
import page1 from "./researchPage1.vue";
import page2 from "./researchPage3.vue";
import page3 from "./researchPage2.vue";
// import page4 from "./page4.vue";
// import page5 from "./page5.vue";
// import page6 from "./page6.vue";
// import bottom from './bottomInfo.vue';
export default {
  name: "researchIndex",
  components: {
    page1,
    page2,
    page3,
    // page4,
    // page5,
    // page6,
    // bottom,
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
<style lang='scss' scoped>

</style>