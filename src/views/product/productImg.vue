<template>
  <div>
    <div class="img_wrapper">
      <div class="img_content">
        <p class="title">{{titleContent[0].title}}</p>
        <p class="desc" v-html="titleContent[0].text"></p>
        <el-carousel :interval="5000" type="card" arrow="never" height="300px">
          <el-carousel-item v-for="(item,i) of picContent" :key="i">
            <img :src="item.img" class="picture" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import {picData,titleData} from './product.js'
export default {
  name: "productImg",
  props:{
    query:{
      type:Object,
      default(){
        return{
          type:'0',
          name:'数据产品'
        }
      }
    }
  },
  data() {
    return {
      picData:picData,
      titleData:titleData,
    };
  },
  computed:{
    picContent(){
      return this.picData.filter(item=>{
        return item.name==this.query.name&&item.index==this.query.type
      })
    },
    titleContent(){
      return this.titleData.filter(item=>{
        return item.name == this.query.name && item.index == this.query.type
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.img_wrapper {
  background: #36aeea;
  padding-bottom:55px;
  padding-top: 20px;
  .img_content {
    width: 1200px;
    margin: 0 auto;
    color: white;
    .title {
      padding: 0 50px;
      font-size: 28px;
      line-height: 60px;
      text-align: center;
    }
    .desc {
      padding: 0 50px;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 50px;
      text-indent: 2em;
    }
  }
  .picture {
    width: 100%;
    height: 100%;
  }
}
</style>
