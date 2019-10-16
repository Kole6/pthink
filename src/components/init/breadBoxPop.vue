<template>
  <div class="bread">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>您的位置：</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>校级</el-breadcrumb-item> -->
        <el-breadcrumb-item  v-for="item of breadListLast" :key="item.path" :to=item.path>
          {{item.name}}
        </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="btn" @click="backUrl">
      返回
    </div>
  </div>
</template>
<script>
  export default {
    //面包屑解决方案,推荐项目初期构建使用v1.0方法,默认v2.0方法优先
    data() {
      return {
        //v1.0手动配置项（此方法需保证路由中间含有 breadBox）：breadListIm为路由与面包屑名称对应关系,breadLoadName为面包屑组件路由
        //v2.0手动配置项（此方法需保证路由参数含有 breadBoxId）：breadListParam为路由与面包屑名称对应关系,breadBoxIdName为路由参数名
        breadLoadName: '/breadBox',
        breadBoxIdName:'breadBoxId',
        breadListIm: [
          {
            path: '01',
            name: '一级'
          },
          {
            path: '02',
            name: '二级'
          },
          {
            path: '03',
            name: '三级'
          },
        ],
        breadListParam:{
          "box1":[{path:"/home/01",name:"一级01"},
              {path:"/home/02/01",name:"二级01"},
              {path:"/home/03/02/01",name:"三级01"}]
        },
        breadListLast: [],
      };
    },
    methods: {
      backUrl() { //退回上一层url
        this.$store.commit('MAJOR_BIG_CHANG',2)
        let length = this.breadListLast.length
        this.$router.push({
          path:this.breadListLast[length-2].path
        })
      },
      loadChange() {
        this.breadListLast = []
        //获取参数breadBoxId值
        let breadBoxId = this.$route.query[this.breadBoxIdName]
        if( undefined == breadBoxId || breadBoxId == null || '' == breadBoxId ){
          if (this.$route.path.indexOf(this.breadLoadName) === -1) {
            console.log('面包屑路由地址breadLoadName没有配置正确！')
          } else {
            let breadListAgo = this.$route.path.split(this.breadLoadName)
            // let breadListAgo = '/index/indexSchool/breadBox/01/02/03'.split(this.breadLoadName)
            let breadList = breadListAgo[1].split('/')
            let obje = {}
            let breadIndex = ''
            //删除掉数组的前1个，提升遍历性能
            breadList.splice(0, 1)
            //考虑到顺序问题，先遍历breadList,再遍历breadListIm
            for (let p of breadList) {
              for (let q of this.breadListIm) {
                if (p === q.path) {
                  breadIndex += '/' + q.path
                  obje.path = breadListAgo[0] + this.breadLoadName + breadIndex
                  obje.name = q.name
                  this.breadListLast.push(obje)
                  obje = {}
                }
              }
            }
          };
        }else{
          this.breadListLast =  this.breadListParam[breadBoxId]
        }
        // 打印路由配置
        // console.log(JSON.stringify(this.breadListLast)) 
      }
    },
    watch: {
      $route(to, from) {
        this.loadChange()
      }
    },
    mounted: function () {
      this.loadChange()
    }
  };
</script>
<style lang="scss" scoped>
.bread{
  background-color:white;
  width: calc(100% - 20px); 
  padding-top:20px; 
  padding-bottom:20px; 
  padding-left:20px; 
  .btn{
    height: 35px;
    width: 60px;
    background-color: rgb(255,186,0);
    color: white;
    font-size: 14px;
    line-height: 35px;
    border-radius: 5px;
    text-align: center;
    float: right;
    margin-top:-25px;
    margin-right:60px; 
    cursor: pointer;
  }
  .btn:hover{
    background-color: rgb(255, 220, 0);
  }
}
</style>