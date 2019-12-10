<template>
  <div class="container">
    <div class="top_index">
      <p
        :class="['top_item',activeIndex === index?'active':'']"
        v-for="(item,index) in categoryData"
        :key="index"
        @click="handleScroll(index)"
      >{{item}}</p>
    </div>
    <div id="position1"></div>
    <div class="img">
      <div class="page-header">
        <p>公司介绍</p>
        <p>Company Introduction</p>
      </div>
      <div style="width:997px;margin:0 auto;">
        <el-image :src="about1">
          <div slot="placeholder">
            <img src="static/loading.gif" alt="load" />
          </div>
        </el-image>
      </div>
    </div>
    <div id="position2"></div>
    <div class="img">
      <div class="page-header">
        <p>公司资质</p>
        <p>quality certification</p>
      </div>
      <div style="width:952px;margin:0 auto;">
        <el-image :src="about2">
          <div slot="placeholder">
            <img src="static/loading.gif" alt="load" />
          </div>
        </el-image>
      </div>
    </div>
    <div id="position3"></div>
    <div class="img">
      <page3></page3>
    </div>
    <div id="position4"></div>
    <div class="img specialBG">
      <div class="page-header">
        <p>战略大事记</p>
        <p>We demand not only quantity but also quality</p>
      </div>
      <el-image :src="about4">
        <div slot="placeholder">
          <img src="static/loading.gif" alt="load" />
        </div>
      </el-image>
    </div>
    <div id="position5"></div>
    <el-image :src="about5">
      <div slot="placeholder">
        <img src="static/loading.gif" alt="load" />
      </div>
    </el-image>
  </div>
</template>
<script>
import page3 from "./aboutPage3.vue";
import { isDate } from "util";
export default {
  name: "aboutIndex",
  components: {
    page3
  },
  data() {
    return {
      about1: require("@/assets/img/about/about_1.png"),
      about2: require("@/assets/img/about/about_2.jpg"),
      about4: require("@/assets/img/about/about_4.png"),
      about5: require("@/assets/img/about/about_5.png"),
      showAbout1: false,
      categoryData: ["公司介绍", "公司资质", "战略部署", "战略大事记","战略规划"], //显示右侧列表的内容
      positionArr: [], //存放右侧列表导航的具体位置
      activeIndex: 0 //当前要到的导航位置
    };
  },
  mounted() {
    this.categoryData.forEach((item, index) => {
      this.positionArr.push(
        document.querySelector("#position" + (index + 1)).offsetTop
      );
    });
    window.onscroll = this.throttle(this.handleWindowScroll);
    this.handleLoadSlow(500);
  },
  methods: {
    handleScroll(index) {
      window.scrollTo(0, this.positionArr[index]);
      this.handleWindowScroll();
    },
    handleLoadSlow(time) {
      let timer = setInterval(() => {
        let arr = [],
          isDone = false;
        this.categoryData.forEach((item, index) => {
          arr.push(document.querySelector("#position" + (index + 1)).offsetTop);
        });
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== this.positionArr[i]) {
            this.positionArr = arr;
            break;
          } else if (arr[i] == this.positionArr[i] && i === arr.length - 1) {
            isDone = true;
          }
        }
        if (isDone) {
          clearInterval(timer);
          this.handleWindowScroll();
        }
      }, time);
    },
    handleWindowScroll() {
      let height = window.pageYOffset;
      for (let i = 0; i < this.positionArr.length; i++) {
        if (height < this.positionArr[0]) {
          this.activeIndex = 0;
          break;
        } else if (
          height >= this.positionArr[i] &&
          (height < this.positionArr[i + 1] || !this.positionArr[i + 1])
        ) {
          this.activeIndex = i;
          break;
        }
      }
    },
    throttle(fn, wait = 50) {
      let previous = 0;
      return function(...args) {
        let now = +new Date();
        if (now - previous > wait) {
          previous = now;
          fn.apply(this, args);
        }
      };
    },
    loadImgEnd() {
      this.showAbout1 = true;
    }
  },
  destroyed() {
    window.onscroll = null;
  }
};
</script>
<style lang="scss" scoped>
.container {
  .top_index {
    position: fixed;
    top: 20%;
    right: 20px;
    background: rgba(54, 174, 234, 0.7);
    border-radius:5px; 
    z-index: 2;
    color: white;
    .top_item {
      line-height: 30px;
      font-size: 15px;
      padding: 5px 10px;
      cursor: pointer;
    }
    .top_item.active,
    .top_item:hover {
      color:rgba(0, 206, 239, 1);
      background: white; /* fallback for old browsers */
      box-shadow: 0 0 5px #888;
      // background: -webkit-linear-gradient(
      //   to right,
      //   #a7bfe8,
      //   #6190e8
      // ); /* Chrome 10-25, Safari 5.1-6 */
      // background: linear-gradient(
      //   to right,
      //   #a7bfe8,
      //   #6190e8
      // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      border-left: solid 5px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      margin-left: -5px;
    }
  }
  .page-header {
    @include pageHeader();
    p:last-child {
      line-height: 30px;
    }
  }
  .img.specialBG {
    background: #f9faff;
    img {
      position: relative;
      left: -80px;
    }
  }
  .img {
    line-height: 0;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .img:first-child {
    text-align: center;
    img {
      width: 1200px;
    }
  }
}
#position1 + div {
  min-height: 640px;
}
#position2 + div {
  min-height: 910px;
}
#position4 + div {
  min-height: 622px;
}
</style>
