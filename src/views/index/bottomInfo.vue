<template>
  <div>
    <div class="bottom_wrapper text_center">
      <div class="bottom_content">
        <div class="bottom_c_top">
          <div class="bottom_c_left">
            <img src="@/assets/img/footer-logo.png" alt>
            <p class="bottom_c_left_title" @click="handleRouter({type:1,name:'智慧校园'})">智慧校园系统</p>
            <p class="bottom_c_left_title" @click="handleRouter({type:0,name:'质量管理'})">智慧魔方系统</p>
            <p class="bottom_c_left_title" @click="handleRouter({type:1,name:'质量管理'})">KPI决策平台</p>
            <p class="bottom_c_left_title" @click="handleRouter({type:1,name:'数据产品'})">校本数据中心</p>
          </div>
          <div class="bottom_c_middle">
            <p
              class="descprition"
            >上海新朋程数据科技发展有限公司是一家专业从事教学信息化建设与服务的高科技公司，公司自2009年成立以来，一直致力于教育类用户提供专业、贴合、深入地信息化服务和技术咨询。在数据平台、省市级学校管理平台、学校综合管理系统、学校质量管理系统、智能决策KPI和BI系统、评估评价类系统、教学互动系统上有多个自主成熟产品。公司目前已拥有二十多个软件著作权书和产品登记证，一项软件发明专利，并在通过软件企业认定，高新技术企业认证，ISO9001国际质量管理体系认证，是上海市研发公共服务平台成员单位。</p>
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

