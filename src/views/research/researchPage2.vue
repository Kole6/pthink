<template>
  <div class="container">
    <div class="title">
      <p>合作伙伴</p>
      <p>Cooperative Partner</p>
    </div>
    <div class="content_wrapper">
        <div class="category">
            <p>政府部门</p>
            <p>广东省教育厅、重庆市教委、贵州省教育厅、黑龙江省教育厅、云南省教育厅、天津市教委、教育部教育与管理信息中心、国务院教育督导会办公室。</p>
        </div>
        <div class="content">
            <div class="list" v-for="(item,index) in data1" :key="index">
                <div class="top">
                    <img :src="item.img" alt="">
                </div>
                <div class="bottom">
                    {{item.name}}
                </div>
            </div>
        </div>   
        <div class="category">
            <p>教科研领域</p>
            <p>上海市教育科学研究院、华东师范大学职业教育与成人教育研究所、同济大学职业技术教育研究所、上海市教育评估院、重庆市教育科学研究院。</p>
        </div>
        <div class="content">
            <div class="list" v-for="(item,index) in data2" :key="index">
                <div class="top">
                    <img :src="item.img" alt="">
                </div>
                <div class="bottom">
                    {{item.name}}
                </div>
            </div>
        </div>   
        <div class="category">
            <p>大数据技术领域</p>
            <p>上海市教委信息中心、九次方大数据信息集团、贵州大数据中心。</p>
            <!-- 上海市教委信息中心、九次方大数据信息集团、贵州大数据中心 -->
        </div>
        <div class="content">
            <div class="list" v-for="(item,index) in data3" :key="index">
                <div class="top">
                    <img :src="item.img" alt="">
                </div>
                <div class="bottom">
                    {{item.name}}
                </div>
            </div>
        </div>   

    </div>
  </div>
</template>
<script>
export default {
  name: "researchPage2",
  data() {
    return {
        data1:[
            {name:'广东省教育厅',img:require('@/assets/img/research/cooperative_1.png')},
            {name:'重庆市教育委员会',img:require('@/assets/img/research/cooperative_2.png')},
            {name:'黑龙江省教育厅',img:require('@/assets/img/research/cooperative_3.png')},
            {name:'贵州省教育厅',img:require('@/assets/img/research/cooperative_4.png')},
            {name:'天津市教委',img:require('@/assets/img/research/cooperative_5.png')},
            {name:'云南省教育厅',img:require('@/assets/img/research/cooperative_6.png')},
        ],
        data2:[
            {name:'上海市教育科学研究院',img:require('@/assets/img/research/cooperative_7.png')},
            {name:'重庆市教育评估院',img:require('@/assets/img/research/cooperative_8.png')},
            {name:'同济大学职业技术教育研究所',img:require('@/assets/img/research/cooperative_9.png')},
            {name:'上海市教育评估院',img:require('@/assets/img/research/cooperative_10.png')},
        ],
        data3:[
            {name:'上海市教委信息中心',img:require('@/assets/img/research/cooperative_12.png')},
            {name:'九次方大数据信息集团',img:require('@/assets/img/research/cooperative_11.png')},
        ],
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
    padding-bottom: 60px;
  .title {
    @include pageHeader;
    p:last-child {
      color: rgb(193, 190, 206);
    }
  }
  .content_wrapper{
      width: 1200px;
      margin: 0 auto;
      .category{
          p:first-child{
            font-size: 16px;
            font-weight: bold;
            line-height: 36px;
            margin-top: 15px;
            padding-left: 40px;
          }
          p:last-child{
              font-size: 14px;
              padding-left: 40px;
          }
      }
      .content{
          margin-top: 20px;
          .list{
              width: 220px;
              height: 170px;
              margin: 10px 40px;
              text-align: center;
              display: inline-block;
              .top{
                  box-sizing: border-box;
                  border: solid 1px rgb(214, 216, 231);
                  width: 100%;
                  height: 125px;
                  padding: 1px;
                  // overflow: hidden;
                  img{
                      width: 100%;
                  }
              }
              .bottom{
                  box-sizing: border-box;
                  width: 100%;
                  border: solid 1px rgb(214, 216, 231);
                  border-top: none;
                  font-size: 16px;
                  line-height: 50px;
              }
          }
      }
  }
}
</style>
