<!--
通用上传文件组件
可以设置参数和请求头token
-->
<template>
  <div class="teach-upload">
    <div class="up-body">
      <!-- :action="uploadUrl(upUrl)" -->
      <el-upload
        drag
        :show-file-list="false"
        :action="uploadUrl(upUrl)"
        :on-error="uploadError"
        :on-success="uploadSuccess"
        :before-upload="beforeAvatarUpload"
        :headers="headers"
        :data="params"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">{{msg}}</div>
        <div class="el-upload__tip" slot="tip" v-show="example">
          <a :href="example">点击下载模板示例文件</a>
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { HTTP_ROOT } from "@/common/config/http-config";
export default {
  props: {
    upShow: {
      type: Boolean,
      default: true
    },
    upUrl: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: "提示：请上传正确的文件格式，每次最多上传一个文件."
    },
    example: {
      //模板地址
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default() {
        return {
          type: ""
        };
      }
    }
  },
  data() {
    return {
      // upUrl: "",
      // params: {},
      // msg: "提示：请上传正确的文件格式，每次最多上传一个文件.",
      // example: "",
      action2:
        "http://58.240.82.126:12080/jssvs/baseInfo/ZzXxYxdpxx/import-excel", // 文件上传地址
      dialogVisibleUpload: false,
      fileList: [], //文件存放地方
      active: 0, //步骤
      show: true,
      errorUpload: false,
      allow: ["xls", "xlsx", "doc", "docx"],
      headers: {
        // token: "uums:e9e4eb3512d754dbd8b3a5802f185fcd",
        token: window.localStorage.getItem("token"),
        Accept: "application/json, text/plain, */*"
      }
    };
  },
  methods: {
    //拼接上传地址
    uploadUrl(url) {
      return HTTP_ROOT + url;
    },
    //上传成功回调
    uploadSuccess: function(response, file, fileList) {
      //   console.log("%c上传已执行 返回值：", "color:green", response);
      this.$emit("uploadSuccess", response);
    },
    // 上传错误回调
    uploadError: function(err, file, fileList) {
      this.$message.error("上传失败，请重试！");
    },
    // 上传前文件判断
    beforeAvatarUpload(file) {
      //   let fileType = file.name.split(".")[1];
      //   if (!(fileType === "xls" || fileType === "xlsx" || fileType === "csv")) {
      //     this.$message({
      //       message: "上传文件只能是 xls、xlsx、csv 格式!",
      //       type: "warning"
      //     });
      //     return false;
      //   }
      //   let isLt2M = file.size / 1024 / 1024 < 2;
      //   if (!isLt2M) {
      //     this.$message("上传模板大小不能超过 2MB!");
      //     return false;
      //   }
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.teach-upload {
  .up-body {
    margin: auto;
    width: 360px;
  }
}
</style>
<!--
运用实例,直接放在 el-table 下面
<el-button type="primary" size="small" @click="handleUpload" plain>导入</el-button>

<el-dialog title="文件上传" :visible.sync="up.upShow" width="600px">
      <upload
        :upUrl="up.upUrl"
        :params="up.params"
        :example="up.example"
        @uploadSuccess="uploadSuccess"
      ></upload>
    </el-dialog>

import upload from "../../../components/init/upload";
export default {
  components: {
    upload
  },

up: {
        upShow: false,
        upUrl: "/test",
        params: { type: "" },
        example:
          "http://58.240.82.126:12080/jssvs/zzXxXqxxController/upload-error-data?excelName=%E6%A0%A1%E5%8C%BA%E4%BF%A1%E6%81%AF_20190410142716520.xls"
      },


handleUpload() {
      this.up.upShow = true;
    },
    uploadSuccess(response) {
      console.log("上传已执行 返回值：", response);
      this.up.upShow = false;
    },
-->