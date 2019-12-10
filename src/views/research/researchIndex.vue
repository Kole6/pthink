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
export default {
  name: "researchIndex",
  components: {
    page1,
    page2,
    page3
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>