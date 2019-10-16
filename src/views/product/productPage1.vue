<template>
<!-- 产品特色 -->
  <div>
    <div class="container">
      <div class="title">
        <p>产品特色</p>
        <!-- <p>根据不同应用场景，提供应用、计算、分析节点等不同配置，满足定制化需求。</p> -->
      </div>
      <div class="content">
        <img src="@/assets/img/product/product_bg.png" alt>
        <div class="list_wrapper">
          <div class="list_content">
            <div class="list" v-for="(item,index) in textContent" :key="index">
              <p class="list_title">{{item.title}}</p>
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {specialData} from './product.js'
export default {
  name: "productPage1",
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
        textData:specialData,
    };
  },
  computed:{
    textContent(){
      return this.textData.filter(item=>{
        return this.query.name == item.name && this.query.type == item.index
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  .title {
    @include pageHeader;

    p:last-child {
      color: rgb(83, 96, 116);
    }
  }
  .content {
    padding: 50px 0;
    img {
      width: 50%;
    }
    .list_wrapper {
      width: 50%;
      height: calc(100% - 120px);
      display: inline-block;
      padding: 60px 0;
      vertical-align: top;
      .list_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @for $i from 2 through  5{
          .list:nth-of-type(#{$i}){
            margin-left: -5% * ($i - 1);
          }
        }
        // .list:nth-of-type(2) {
        //   margin-left: -5%;
        // }
        .list_title {
          font-size: 14px;
          margin-bottom: 10px;
          font-weight: bold;
          position: relative;
        }
        .list_title::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          background: black;
          border-radius: 50%;
          position: absolute;
          top: 6px;
          left: -15px;
        }
        .list_title + p {
          font-size: 12px;
          padding-right: 20%;
        }
      }
    }
  }
}

@media screen and(max-width:1900px) {
  .container {
    .content {
      height: 430px;
    }
  }
}
@media screen and(min-width: 1900px) {
  .container {
    .content {
      height: 600px;
    }
  }
}
</style>
