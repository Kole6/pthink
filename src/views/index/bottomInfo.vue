<template>
  <div>
    <div class="bottom_wrapper text_center">
      <div class="bottom_content">
        <div class="bottom_c_top">
          <div class="bottom_c_left">
            <img src="@/assets/img/footer-logo.png" alt>
            <p class="bottom_c_left_title" @click="handleRouter({type:1,name:'智慧校园'})">智慧立方校园管理</p>
            <p class="bottom_c_left_title" @click="handleRouter({type:1,name:'数据产品'})">校本数据中心</p>
            <p class="bottom_c_left_title" @click="handleRouter({type:0,name:'质量管理'})">智慧魔方质量监测</p>
            <!-- KPI决策平台 -->
            <p class="bottom_c_left_title" @click="handleRouter({type:3,name:'C端应用'})">可信教育一证通</p>
          </div>
          <div class="bottom_c_middle">
            <p
              class="descprition"
            >上海新朋程数据科技发展有限公司是一家专业从事教育信息化业务的高科技公司，是职业教育大数据领域的开拓者与领军者，专注职业教育数据与信息化服务，是职业教育领域多个国家级、省市级数据通道系统建设单位，其业务包含国家级省市级职业教育大数据平台、职业院校管理信息系统、智慧校园、创享云等多类系统，拥有20多项自主软件产品，一项数据技术专利，2018年荣获国家级职业教育教学成果一等奖。新朋程凭借其扎实的技术能力、深厚的行业积淀和引领市场的专业产品，成为当下职业教育国家级业务系统主干数据通道和数据入口。</p>
            <p class="icon_style">
              <el-tooltip content="021-62866809">
                <a href="javascript:void();">
                  <i class="iconfont iconlianxi1" title="电话"></i>
                </a>
              </el-tooltip>
              <a target='_blanks' href="tencent://message/?uin=2182411508&Site=&Menu=yes">
                <i  class="iconfont iconicon_qq" title="QQ"></i>
              </a>
              <a target="_blanks" href="https://weibo.com/"> 
                <i class="iconfont iconweibo" title="微博"></i>
              </a>
              <a  href="mailto:service@pthink.com.cn">
                <i class="iconfont iconmsnui-email" title="邮件"></i>
              </a>
            </p>
          </div>
          <div class="bottom_c_right">
            <div class="item">
              <span>
                <img src="../../assets/img/wx1.png" alt>
              </span>
            </div>
            <div class="item">
              <span>
                <img src="../../assets/img/wx3.png" alt>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright_wrapper">
      <div class="copyright_content">
        <div>
          <p>上海新朋程数据科技发展有限公司</p>
          <p>COPYRIGHT &copy; Pthink Info CO.All Right Reserved.</p>
        </div>
        <div>
          <img src="../../assets/img/img4.png" alt>
          <img src="../../assets/img/img5.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottomInfo",
  data() {
    return {};
  },
  methods: {
    handleRouter(query){
      this.$router.push({path:'/product',query})
    },
  }
};
</script>
<style lang="scss" scoped>

@import url("../../assets/font/iconfont.css");
.bottom_wrapper {
  background: rgb(24, 174, 234);
  height: 210px;
  padding-top: 20px;
}
.bottom_content {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.bottom_c_top {
  height: 40%;
  display: flex;
  justify-content: space-around;
  .bottom_c_left {
    width: 30%;
    text-align: left;
    img {
      padding-bottom: 10px;
    }
    .bottom_c_left_title {
      display: inline-block;
      margin-top: 10px;
      cursor: pointer;
      width: 50%;
      color: #fff;
      font-size: 16px;
      line-height: 1.6;
    }
    .bottom_c_left_title:hover {
      color: rgb(34, 64, 120);
    }
  }
  .bottom_c_middle {
    width: 67%;
    padding-left: 30px;
    .descprition {
      word-break: break-all;
      text-align: left;
      text-indent: 2em;
      color: #fff;
      line-height: 1.6;
      font-size: 14px;
    }
    .icon_style {
      display: flex;
      margin-top: 20px;
      span,
      a {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        background: gray;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      span:hover,
      a:hover {
        background: rgb(0, 206, 239);
      }
      i {
        color: white;
        font-size: 16px;
      }
    }
  }
  .bottom_c_right {
    width: 30%;
    color: white;
    display: flex;
    flex-direction: row-reverse;
    .item {
      width: 80px;
      height: 80px;
      margin-left: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        width: 80px;
        height: 80px;
        img {
          width: 100%;
        }
      }
    }
  }
}
.copyright_wrapper {
  height: 60px;
  background: rgb(22, 142, 205);
  .copyright_content {
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    div:first-child {
      color: white;
      font-size: 14px;
      p:nth-of-type(1) {
        margin-top: 10px;
      }
      p:nth-of-type(2) {
        margin-top: 7px;
        // margin: 12px 0;
      }
    }
    div:last-child {
      display: flex;
      align-items: center;
    }
  }
}
</style>

