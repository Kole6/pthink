<!--page1-->
<template>
  <div class="scollpage">
    <div class="scoll-header">
      <div class="scoll-top">
        <img src="..\..\assets\img\logo.png" alt>
        <div class="menu">
          <ul class="menu_ul">
            <li class="flip">
              <router-link to='/home'>首页</router-link>
              <!-- <a href="#">首页</a> -->
            </li>
            <li class="flip flip_list">
              <router-link to='/product'>产品</router-link>
              <!-- <a href="#"></a> -->
              <div class="menu_list web">
                <ul class="list_ul">
                  <li v-for="(item,index) in marqueeList" :key="index" @click="handleBtn(src)">
                    <span class="text" :to=item.src >{{item.text}}</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="flip">
              <router-link to="/research">朋程研究院</router-link>
              <!-- <a href="#">朋程研究院</a> -->
            </li>
            <li class="flip flip_list1">
              <router-link to="/about">关于我们</router-link>
              <!-- <a href="#">关于我们</a> -->
              <div class="menu_list sem">
                <ul class="list_ul">
                  <li v-for="(item,index) in tabledate" :key="index" @click="handleBtn(src)">
                    <span class="text" :to=item.src >{{item.text}}</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="flip">
              <a target="_blank" href="http://www.sjxtfw.com/">技术服务平台</a>
            </li>
          </ul>
          <button>
            <a target="_blank" href="http://zzdc.zyjyzg.org/dc/login.action">产品下载</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      marqueeList:[
        {
          text:"智慧校园",
          src:""
        },
        {
          text:"智慧魔方",
          src:""
        }
      ],
      tabledate:[
        {
          text:"公司介绍",
          src:""
        },
        {
          text:"联系我们",
          src:""
        }
      ],
      picList: [
      ],
      isShowPic:true,
    };
  },
  watch:{
  },
  mounted(){
  },
  methods: {
    handleBtn(src){
        this.$router.push({
              path:src,
            });
    }
  }
}
</script>
<style lang='scss' scoped>
.scollpage {
  .scoll-header {
    height: 70px;
    background-color: #36aeea;
    .scoll-top {
      @include gobalWidth();
      position: relative;
      img{
        padding-top: 5px;
      }
      button {
        float: right;
        background: #fff;
        padding: 10px 20px;
        color: #36aeea;
        border: none;
        position: absolute;
        right: 00px;
        top: 20px;
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
        a{
          color: #36aeea;
        }
      }
      .menu {
        float: right;
        margin: 15px;
        font-size: 16px;
        .menu_ul {
          position: absolute;
          right: 200px;
          // top: 26px;
          .flip {
            float: left;
            padding: 10px 30px;
            height: 30px;
            line-height: 30px;
            a {
              color: #fff;
              padding-bottom: 4px;
            }
            a:hover {
              border-bottom: 2px solid #fff;
            }
            .active {
              border-bottom: 2px solid #fff;
            }
            .menu_list{
                  cursor: pointer;
                  border-radius: 3px;
                  margin-top: 8px;
                  margin-left: -8px;
                  position: absolute;
                  z-index: 9999;
                  display: none;
                  width: 210px;
                  background: #fff;
                  font:16px/40px MicrosoftYaHei;
                  .list_ul{
                    width: 100%;
                    border-radius: 0 0 5px 5px;
                    li{
                      padding-left: 10px;
                      &:hover{
                        background: #36aeea;
                        color: #fff;
                      }
                    }
                  }
            }
          }
          // .flip_list{
          //   &:hover .web{
          //     display: block;
          //   }
          // }
          // .flip_list1{
          //   &:hover .sem{
          //     display: block;
          //   }
          // }
        }
      }
    }
  }
}
</style>