<!--官网首页-->
<template>
  <div>
    <template v-if="showCategory">
      <category @chooseType="handleChoose($event)"></category>
    </template>
    <template v-else>
      <div ref="fullpage" v-if="reFresh">
        <page-content :query="query" v-if="!showSpecialPage"></page-content>
        <template v-else>
          <div class="back" @click="$router.go(-1)">返回</div>
          <div style="text-align:center;">
            <img :src="imgUrl" alt="" style="width:100%;max-width:1200px;">
          </div>
        </template>
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
export default {
  name: "productIndex",
  components: {
    pageContent,
    page1,
    page2,
    page3,
    category,
    pageImg,
  },
  data() {
    return {
      imgUrl:'',
      query:null,
      showCategory:true,
      reFresh:true,
      showSpecialPage:false,
    };
  },
  watch:{
    '$route':{
      handler(n,o){
        // 不携带参数，显示种类   
        if(Object.keys(n.query).length === 0 || 'load' in n.query){
          this.showCategory = true;
        }else{
          // 携带参数，对参数类型进行判断
          if( (!!n.query.type || n.query.type === 0)  && !!n.query.name){
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
    handleChoose(query){
      // 对单独的页面进行特殊处理            
      // let arrText = ['智慧立方校园管理','可信教育一证通App']
      //  可信教育一证通     ||     智慧立方校园管理
      if((query.type=='0'  && query.name=='C端应用') || (query.type == '5' && query.name == '智慧校园')){
        if(query.type == '5' && query.name == '智慧校园'){
          this.imgUrl = 'static/type/special_2.jpg'
        }else{
          this.imgUrl = 'static/type/special.jpg'
        }
        this.showSpecialPage = true;
      }else{
        this.showSpecialPage = false;
      }
      this.query = query;
      this.$router.push({path:'/product',query:query})
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