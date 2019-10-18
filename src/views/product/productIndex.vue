<!--官网首页-->
<template>
  <div>
    <template v-if="showCategory">
      <category @chooseType="handleChoose($event)"></category>
    </template>
    <template v-else>
      <div :options="options" ref="fullpage" v-if="reFresh">
        <page-content :query="query"></page-content>
        <!-- <el-button size="mini" @click="$router.go(-1)">返回</el-button>
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
        </div> -->
      </div>
    </template>
  </div>
</template>
<script>
import page1 from "./productPage1.vue";
import page2 from "./productPage2.vue";
import page3 from "./productPage3.vue";
import category from "./productCategory.vue";
import pageImg from './productImg.vue'
import pageContent from './productContent.vue'
// import page5 from "./page5.vue";
// import page6 from "./page6.vue";
// import bottom from './bottomInfo.vue';
export default {
  name: "productIndex",
  components: {
    pageContent,
    page1,
    page2,
    page3,
    category,
    pageImg,
    // page4,
    // page5,
    // page6,
    // bottom,
  },
  data() {
    return {
      query:null,
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
        ],
      },
      showCategory:true,
      reFresh:true,
    };
  },
  watch:{
    '$route':{
      handler(n,o){
        // 不携带参数，显示种类
        if(Object.keys(n.query).length === 0 || !!n.query.load){
          this.showCategory = true;
        }else{
          // 携带参数，对参数类型进行判断
          if( (!!n.query.type || n.query.type === 0) && !!n.query.name){
            this.query = n.query;
            window.scroll(0,0)
            this.handleChoose(n.query)
          }
        }
      },
      immediate:true,
    }
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      // console.log(destination);
    },
    handleChoose(type){
      this.query = type;
      this.$router.push({path:'/product',query:type})
      this.showCategory = false;
      this.handleRefresh();
    },
    handleRefresh(){
      this.reFresh=false
      this.$nextTick(()=>{
        this.reFresh = true;
      })
    }
  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>
<style lang='scss' scoped>
.back{
  position: sticky;
  top: 10px;
  z-index: 3;
  width: 50px;
  background: yellow;
}
</style>