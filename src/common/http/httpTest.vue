<!--提供http请求参照例子-->
<template>
  <div>
    <div>{{resultData}}</div>
    <div>165166</div>
  </div>
</template>
<script>
export default {
  methods: {
    getServerData() {
      /*
        GET
        method不写默认POST ，要加引号
        不用 import 其他东西
      */

      this.$HTTP.api({
        url: "myjson/bins/1hayj6",
        method: "GET",
        params: {
          id: 15165
        },
        successCallback: function(result) {
          // if(result.status==200){
          // }else{
          // }
        }.bind(this)
      });
    },

    getPostData() {
      /*
        POST
        method不写默认POST ，要加引号
        emulateJSON不写默认false，在params为application/json格式对象时，用true
      */
      this.$HTTP.api({
        url: "myjson/bins/1hayj6",
        method: "POST",
        emulateJSON: true,
        params: {
          id: 15165
        },
        successCallback: function(result) {
          // if(result.status==200){
          // }else{
          // }
        }.bind(this)
      });
    },

    //登陆的例子
    loginButton() {
      this.$HTTP.api({
        url: "/login/toLogin",
        method: "POST",
        params: {
          username: this.userName,
          password: this.password
        },
        successCallback: function(data) {
          if (data.code == 0) {
            window.localStorage.setItem("name", data.data.name);
            window.localStorage.setItem("username", data.data.username);
            window.localStorage.setItem("schoolCode", data.data.schoolCode);
            window.localStorage.setItem("userId", data.data.userId);
            window.localStorage.setItem("token", data.data.token);
            window.localStorage.setItem("userType", data.data.userType);
            window.localStorage.setItem(
              "menuTrees",
              JSON.stringify(data.data.menuTrees)
            );
            this.$router.push({ path: "/indexSchool" });
          } else {
            this.$message({
              type: "error",
              message: data.msg
            });
          }
        }.bind(this)
      });
    }
  },
  data() {
    return {
      resultData: "httpTest"
    };
  },
  mounted() {
    this.getServerData();
  }
};
</script>
<style lang='scss' scoped>
</style>