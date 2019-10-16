<!--
通用上传按钮组件
可以用于文件 上传/查看/删除 
可以携带 token / params

accept=".doc,.docx,.pdf,.png,.jpg" 可以限制上传文件类型,
如果有禁止上传类型，可以在beforeUpload()中通过 file.type 控制
限制上传大小可以在 beforeUpload()中通过 file.size
disabled 可以控制
-->
<template>
<!-- :class="{'upload-btn':disabled}" -->
  <div :class="{'upload-btn':disabled}" >
    <el-upload
      multiple
      :action="uploadUrl(upUrl)"
      :limit="limit"
      :file-list="fileList"
      :disabled="disabled"
      :headers="headers"
      :data="params"
      :on-error="uploadError"
      :on-success="uploadSuccess"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :on-preview="handleSee"
    >
      <el-button size="small" type="primary" v-if="isEmpty(btn)">{{btn}}</el-button>
      <div slot="tip" class="el-upload__tip" v-if="isEmpty(tip)">{{tip}}</div>
    </el-upload>
  </div>
</template>
<script>
import { HTTP_ROOT_FILE_CENTER } from "@/common/config/http-config";
export default {
  props: {
    upUrl: {
      type: String,
      default: ""
    },
    limit: {
      type: Number,
      default: 3
    },
    tip: {
      type: String,
      default: ""
    },
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      // upUrl:'',
      //   limit: 3,
      //   fileListTest: [
      //     {
      //       name: "文件1.docx",
      //       url:
      //         "http://58.240.82.126:19112/fileCenter/upload/20181123/201811231345211598.docx"
      //     },
      //     {
      //       name: "文件2.docx",
      //       url:
      //         "http://58.240.82.126:19112/fileCenter/upload/20181123/201811231345211598.docx"
      //     }
      //   ],
        // tip: "",
        // fileList:[],
        // disabled: false,
        // params: {},
      action: "https://jsonplaceholder.typicode.com/posts/",
      btn: "点击上传",
      headers: {
        token: window.localStorage.getItem("token"),
        Accept: "application/json, text/plain, */*"
      }
    };
  },
  filters: {
    defaultFalse(value) {
      //默认返回flase
      if (value) {
        return false;
      } else {
        return value;
      }
    },
    defaultTrue(value) {
      //默认返回flase
      if (value == undefined) {
        return true;
      } else {
        return value;
      }
    }
  },
  methods: {
    //拼接上传地址
    uploadUrl(upUrl) {
      return HTTP_ROOT_FILE_CENTER + upUrl;
    },
    //判断对象或字符串是否为空或不存在
    isEmpty(str) {
      if (str == undefined || str == null) {
        return false;
      } else {
        return true;
      }
    },

    //上传文件之前
    beforeUpload: function(file) {
      // const isJPG = file.type === 'image/jpg';
      //   const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      //   if (!isLt2M) {
      //     this.$message.error("上传头像图片大小不能超过 2MB!");
      //   }
      //   return isLt2M;
      return true; //reture true才能上传
    },

    // 上传错误
    uploadError: function(err, file, fileList) {
      this.$message({ message: "上传失败，请重试！", type: "warning" });
    },

    //上传成功后的回调
    uploadSuccess: function(response, file, fileList1) {
      //response为上传返回数据
      //   console.log("result", JSON.stringify(response));
      //   console.log("fileList1", JSON.stringify(fileList1));
      //   this.fileList = fileList1;
      this.$emit("uploadSuccess", response, file, fileList1);
      this.$message({ message: "上传成功！", type: "success" });
    },
    // 上传移除
    handleRemove(file, fileList1) {
      this.$emit("uploadRemove", file, fileList1);
      //   this.fileList = fileList1;
      // console.log('file', JSON.stringify(file),'fileList', JSON.stringify(this.fileList));
      this.$message({ message: "移除成功！", type: "success" });
    },

    //查看上传文件
    handleSee(file) {
      window.open(file.url);
      // console.log('file',JSON.stringify(file))
      // file.url 就是下载地址
      // 如果是图片直接使用 list-type="picture" 展示，不要使用:on-preview
      // window.open('http://58.240.82.126:19112/fileCenter/upload/20181123/201811231345211598.docx')
    }
  }
};
</script>
<style lang='scss' scoped>
.upload-btn {
  .el-button--primary {
    color: #fff;
    background-color: #c5c5c5;
    border-color: #c5c5c5;
    cursor: no-drop;
  }
}
</style>
<!--
运用实例
<uploadBtn
            :fileList="upBtn.fileList"
            :upUrl="upBtn.upUrl"
            :tip="upBtn.tip"
            :limit="upBtn.limit"
            :disabled="upBtn.disabled"
            :params="upBtn.params"
            @uploadSuccess="uploadBtnSuccess"
            @uploadRemove="uploadBtnRemove"
          ></uploadBtn>

import uploadBtn from "@/components/init/uploadBtn";
export default {
  components: {
    uploadBtn
  },

upBtn: {
        fileList: [
          {
            name: "文件1.docx",
            url:
              "http://58.240.82.126:19112/fileCenter/upload/20181123/201811231345211598.docx"
          }
        ],
        upUrl: "",
        tip: "最多上传3份文件.",
        limit: 3,
        disabled: false,
        params: {}
      },

uploadBtnSuccess(response, file, fileList1) {
      console.log(response);
    },
    uploadBtnRemove(file, fileList1) {
      console.log(fileList1);
    }
-->