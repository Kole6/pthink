<!--官网产品页-->
<template>
  <div>
    <!--产品总页-->
    <template v-if="showCategory">
      <category></category>
    </template>
    <!--产品内页-->
    <template v-else>
      <div ref="fullpage" v-if="reFresh">
        <!--一般产品页-->
        <template v-if="showPageContent">
          <page-content :query="query"></page-content>
        </template>
        <!--特殊产品页-->
        <template v-else>
          <div class="back" @click="$router.go(-1)">返回</div>
          <div style="max-width:1200px;margin:0 auto;">
            <el-image :src="imgUrl" @load="loadImgEnd">
              <div slot="placeholder">
                <img src="static/loading.gif" alt="load" />
              </div>
            </el-image>
          </div>
          <div style="max-width:1200px;margin:0 auto;" v-if="imgshow2">
            <el-image :src="imgUrl2">
              <div slot="placeholder">
                <img src="static/loading.gif" alt="load" />
              </div>
            </el-image>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import category from "./productCategory.vue";
import pageContent from "./productContent.vue";
export default {
  name: "productIndex",
  components: {
    pageContent,
    category
  },
  data() {
    return {
      imgUrl: "",
      imgUrl2: "",
      query: null,
      showCategory: true,
      reFresh: true,
      showPageContent: true,
      imgshow2: false
    };
  },
  watch: {
    $route(to, from) {
      this.init(to.query);
    }
  },
  methods: {
    handleChoose(query) {
      // 特殊页面处理  ['智慧立方校园管理','可信教育一证通App']
      if (
        (query.type == "0" && query.name == "C端应用") ||
        (query.type == "5" && query.name == "智慧校园")
      ) {
        this.showPageContent = false;
        this.imgshow2 = false;
        if (query.name == "智慧校园") {
          this.imgUrl = "static/type/special2_1.jpg";
          this.imgUrl2 = "static/type/special2_2.jpg";
        } else {
          this.imgUrl = "static/type/special1_1.jpg";
          this.imgUrl2 = "static/type/special1_2.jpg";
        }
      } else {
        this.showPageContent = true;
      }
      this.$router.push({ path: "/product", query: query });
    },

    init(query) {
      window.scroll(0, 0);
      if (Object.keys(query).length === 0 || "load" in query) {
        this.showCategory = true;
      } else {
        this.showCategory = false;
        if ((!!query.type || query.type === 0) && !!query.name) {
          this.query = query;
          this.handleChoose(query);
        }
      }
    },

    loadImgEnd() {
      this.imgshow2 = true;
    }
  },
  created() {
    this.init(this.$route.query);
  }
};
</script>
<style lang='scss' scoped>
.back {
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