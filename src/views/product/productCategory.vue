<template>
    <div class="container">
        <div class="category">
            <div class="category_list" @click="handleClick(item)" v-for="(item,index) in categoryData" :key="index" :class="{'active':activePic.includes(item)}">
                <span>{{item}}</span>
            </div>
            <!-- <img src="@/assets/img/product/product_category.png" alt=""> -->
        </div>
        <div class="content">
            <div class="img_wrapper" v-for="(item,index) in content" :key="index">
                <el-image @click="choose(index,item.name)" :src="item.img" alt="" fit="cover">
                    <template #placeholder>
                        <el-image :src="placeHolderImg"></el-image>
                    </template>
                </el-image>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'productCategory',
    data(){
        return{
            placeHolderImg:'./static/image.png',
            categoryData:['数据产品','质量管理','智慧校园','C端应用'],
            activePic:['数据产品'],
            content1:[
                {img:'./static/type/p3.jpg',name:'数据产品'},
                {img:'./static/type/p4.jpg',name:'数据产品'},
                {img:'./static/type/P17.jpg',name:'数据产品'},
                {img:'./static/type/p6.jpg',name:'数据产品'},
                
                {img:'./static/type/p7.jpg',name:'智慧校园'},
                {img:'./static/type/p1.jpg',name:'智慧校园'},
                {img:'./static/type/p9.jpg',name:'智慧校园'},
                {img:'./static/type/p5.jpg',name:'智慧校园'},

                {img:'./static/type/p11.jpg',name:'质量管理'},
                {img:'./static/type/p2.jpg',name:'质量管理'},
                {img:'./static/type/p10.jpg',name:'质量管理'},
                {img:'./static/type/p12.jpg',name:'质量管理'},

                {img:'./static/type/p13.jpg',name:'C端应用'},
                {img:'./static/type/p14.jpg',name:'C端应用'},
                {img:'./static/type/p15.jpg',name:'C端应用'},
                {img:'./static/type/p16.jpg',name:'C端应用'},
            ],
        }
    },
    watch:{
        '$route':{
            handler(n,o){
                if(!!n.query.load){
                    this.activePic = [unescape(n.query.load)]; 
                }
            },
            immediate:true,
        }
    },
    computed:{
        content(){
            let arr = this.content1.filter(item=>{
                return item.name == this.activePic[0];
            })
            return arr;
        }
    },
    mounted(){
        let name = sessionStorage.getItem('load')
        if(!!unescape(name)){
            this.$router.replace({path:'/product',query:{load:name}})
        }   
        this.initImage()
    },
    methods:{
        initImage(){

        },
        choose(index,name){
            this.$emit('chooseType',{type:index,name})
        },
        handleClick(name){
            this.activePic = [name];
            sessionStorage.setItem('load',escape(name))
            this.$router.replace({path:'/product',query:{load:escape(name)}})
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
  background: rgb(249, 250, 255);
  text-align: center;
  padding: 10px 0 80px 0;
  .category {
      box-sizing: border-box;
      padding: 15px 0;
      background: rgb(249, 250, 255);
      .category_list{
          width: 180px;
          height: 60px;
          margin: 0 20px;
          display: inline-block;
        //   transition: transform 0.5s;
          cursor: pointer;
          span{
              line-height: 60px;
            //   color: rgb(201, 201, 204);
            color: #afafb3;
          }
          background: url('../../assets/img/product/product_bg_n.jpg');
          background-size: 100% 100%;
      }
      .category_list.active{
          background: url('../../assets/img/product/product_bg_active.jpg');
          transform: scale(1.2);
          span{
              color: #fff;
          }
      }
  }
}
.content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    img{
        cursor: pointer;
        transition: transform 0.5s; 
    }
    img:hover{
        transform: scale(1.1);
    }
    .img_wrapper{
        box-sizing: border-box;
        width: 540px;
        height: 300px;
        display: inline-block;
        overflow: hidden;
        margin: 10px 30px;
        img{
            width: 100%;
        }
    }
}
</style>
<style scoped>
.img_wrapper>>>img{
    transition: transform 0.3s;
}
.img_wrapper>>>img:hover{
    transform-origin: center;
    transform: scale(1.1);
}
</style>
