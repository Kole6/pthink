<template>
  <div>
    <!-- <el-button size="mini" @click="$router.go(-1)">返回</el-button> -->
    <div class="back" @click="$router.go(-1)">返回</div>
    <div class="section">
      <pageImg :query="query"></pageImg>
    </div>
    <div class="section">
      <page1 :query="query"></page1>
    </div>
    <div class="section">
      <page2 :query="query"></page2>
    </div>
    <div class="section">
      <page3 :query="query"></page3>
    </div>
  </div>
</template>
<script>

import page1 from "./productPage1.vue";
import page2 from "./productPage2.vue";
import page3 from "./productPage3.vue";
import pageImg from './productImg.vue'

export default {
  components: {
    page1,
    page2,
    page3,
    pageImg,
  },
    props:{
        query:{
            type:Object,
            required:true,
        }
    },

};
</script>
<style lang="scss" scoped>
.back{
    width: 60px;
    position: fixed;
    bottom: 80px;
    left: 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    line-height: 1.8;
    color: white;
    background: #36eacc;
    cursor: pointer;
}
</style>