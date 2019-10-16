<!--案例展示-->
<template>
  <div class="page5" ref="page5">
    <div class="page-header">
      <p>案例展示</p>
      <p>A case study shows the applicability of the method</p>
    </div>
    
    <div class="page-number">
      <div class="content">
        <div class="item">
          <img src="../../assets/img/img6.png" alt="">
          <p>
            <section>
              <countTo ref="number1" :startVal='0' :endVal='count.count1' :duration='duration' :autoplay="false"></countTo>个
            </section>
            <section>国家级部署平台</section>
          </p>
        </div>
        <div class="item">
          <img src="../../assets/img/img7.png" alt="">
          <p>
            <section><countTo ref="number2" :startVal='0' :endVal='count.count2' :duration='duration' :autoplay="false"></countTo></section>
            <section>省级平台部署</section>
          </p>
        </div>
        <div class="item">
          <img src="../../assets/img/img8.png" alt="">
          <p>
            <section><countTo ref="number3" :startVal='0' :endVal='count.count3' :duration='duration' :autoplay="false"></countTo>+</section>
            <section>用户数</section>
          </p>
        </div>
      </div>
      <!-- <img :src="require(`../../assets/img/guanwang/xu/xu1.png`)" alt> -->
    </div>
    <div class="page-horse">
      <div class="horse">
        <el-carousel :interval="3000" type="card" height="350px">
          <el-carousel-item v-for="(item,i) of picList" :key="i">
            <!-- <router-link :to="item.to"> -->
              <img :src="item.img" alt @click="handleRouter(item)">
            <!-- </router-link> -->
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
export default {
  components:{countTo},
  data() {
    return {
      picList: [
        {to:{path:'/product',query:''},img:require(`../../assets/img/guanwang/product/p1.jpg`)},
        {to:{path:'/product',query:{type:0,name:'数据产品'}},img:require(`../../assets/img/guanwang/product/p2.jpg`)},
        {to:{path:'/product',query:{type:1,name:'数据产品'}},img:require(`../../assets/img/guanwang/product/p3.jpg`)},
        {to:{path:'/product',query:{type:1,name:'C端应用'}},img:require(`../../assets/img/guanwang/product/p4.jpg`)},
      ],
      top:0,
      hasPlayed:false,//是否播放过数字动画
      innerHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
      duration:3000,
      count:{
        count1:2,
        count2:18,
        count3:4000,
      }

    };
  },
  watch:{
    top(n){
      // 当数字高过窗口100时，播放动画
      if(this.innerHeight - n > 100 && !this.hasPlayed){
        this.hasPlayed = true;
        this.numberScroll();
      }
    }
  },
  mounted(){
    window.onscroll =()=>{
        this.$refs['page5'] && (this.top = this.$refs['page5'].getBoundingClientRect().top)
    }
  },  
  methods: {
    numberScroll(){
      // 将ref元素进行遍历调用开始数字动画方法
      Object.keys(this.$refs).forEach(ele=>{
        this.$refs[ele] && this.$refs[ele].start && this.$refs[ele].start()
      })
    },
    handleRouter(item){
      // if(item.to.query.name === '智慧校园'){
      //   return ;
      // }
      // 直接进入产品详细页面
      if(item.to.query){
        this.$router.push({path:item.to.path,query:item.to.query})
      }
    }
  },
  destroyed(){
    window.onscroll=()=>{};
  }
};
</script>
<style lang='scss' scoped>
.page5 {
  background-color: #fff;
  .page-header {
    @include pageHeader();
  }
  .page-number {
    height: 110px;
    padding: 5px 0;
    @include gobalWidth();
    .content{
      box-sizing: border-box;
      width:1200px;
      margin: 25px auto;
      padding: 0 90px;
      display: flex;
      justify-content: space-around;
      .item{
        width: 160px;
        p{
          display: inline-block;
          // vertical-align: top;
          position: relative;
          top: -8px;
          margin-left: 5px;
          section:first-child{
            font-size: 22px;
            color: rgb(255, 177, 56);
          }
          section:last-child{
            font-size: 14px;
            color: rgb(119, 119, 128);
          }
        }
      }
    }
  }
  .page-horse {
    height: 425px;
    @include gobalWidth();
  }
}
</style>