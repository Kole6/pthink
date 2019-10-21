<template>
    <div class="container">
        <div class="title">
            <p>主要功能</p>
            <!-- <p>根据不同应用场景，提供应用、计算、分析节点等不同配置，满足定制化需求。</p> -->
        </div>
        <div class="content">
            <template v-if="functionData.length>4">
                <div class="left_arrow" >
                    <button @click="leftClick" type="button" :disabled="functionData[0] && functionContent[0] && functionData[0].num === functionContent[0].num" 
                    class="el-carousel__arrow el-carousel__arrow--left"><i class="el-icon-arrow-left"></i></button>
                </div>
                <div class="right_arrow" >
                    <button @click="rightClick" 
                    type="button" 
                    :disabled="functionData[functionData.length - 1] && functionContent[functionContent.length - 1] && functionData[functionData.length - 1].num === functionContent[functionContent.length - 1].num" 
                    class="el-carousel__arrow el-carousel__arrow--right">
                            <i class="el-icon-arrow-right"></i></button>
                </div>
            </template>
            <transition-group name="list_animation" tag="div" :class="[functionData.length<4?'flex':'']">
                <div class="list" v-for="(item , index) in functionContent" :key="item.num">
                    <p class="number">{{item.num || index+1}}</p>
                    <p>
                        <img :src="item.icon || defaultImg" alt="">
                    </p>
                    <p>{{item.title}}</p>
                    <p class="text">{{item.text}}</p>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
import {mainFunctionData} from './product.js'
export default {
    name:'productPage2',
    props:{
        query:{
            type:Object,
            default(){
                return{
                    type:'0',
                    name:'数据产品',
                }
            }
        },
    },
    data(){
        return{
            functionData:mainFunctionData.filter(item=>{
                return this.query.name == item.name && this.query.type == item.index
            }),
            defaultImg:require('@/assets/img/product/detail/icon_p1_2_2.png'),
            start:0,
            functionContent:[],
        }
    },
    mounted(){
        this.functionContent = this.functionData.slice(0,4)
    },
    methods:{
        leftClick(){
            if(this.start !== 0){
                this.functionContent.pop();
                this.functionContent.unshift(this.functionData[--this.start])
            }
        },
        rightClick(){
            if((this.start+5)<=this.functionData.length){
                this.start++
                this.functionContent.shift();
                this.functionContent.push(this.functionData[this.start+3])
            }

        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    box-sizing: border-box;
    background: rgb(246, 245, 251);
    .title{
        @include pageHeader;
        P:last-child{
            color: rgb(83, 96, 116);
        }
    }
    .content{
        // display: flex;
        // justify-content: center;
        position: relative;
        text-align: center;
        max-width: 1050px;
        margin: 0 auto;
        // white-space: nowrap;
        padding-top: 40px;
        padding-bottom: 70px;
        %arrow {
            width: 36px;
            height: 100%;
            position: absolute;
            top: 0;
            text-align: center;
        }
        .left_arrow{
            @extend %arrow;
            left:-75px;
            cursor: pointer;
        }
        .right_arrow{
            @extend %arrow;
            right: -75px;
        }
        .flex{
            display: flex;
            justify-content: space-around;
        }
        .list{
            // white-space: normal;
            vertical-align: top;
            box-sizing: border-box;
            display: inline-block;
            width: 260px;
            height: 485px;
            padding:0 25px 30px 25px;
            border-radius: 5px;
            text-align: center;
            .text{
                text-align: left;
            }
            /* 是否添加动画 */
            transition: all 0.5s;
            p:nth-of-type(3){
                font-size: 14px;
                // font-family: '黑体';
                font-weight: bold;
                line-height: 30px;
            }
            p:nth-of-type(4){
                font-size: 12px;
                line-height: 25px;
                color: rgb(151, 157, 171);
            }
            .number{  
                font-size: 60px;
                font-weight: 900;
                background-image:-webkit-linear-gradient(top,rgb(192,199,224),white); 
                -webkit-background-clip:text; 
                -webkit-text-fill-color:transparent; 
            }
            img{
                width: 115px;
                height: 120px;
            }
        }
        .list:hover{
            box-shadow: 0 2px 10px rgba(128, 128, 128,0.3);
            background: #fff;
            cursor: default;
        }
    }

}
.list_animation-enter{
  opacity: 0;
  transform: translateX(50px);
}
 .list_animation-leave-to{
  opacity: 0;
  transform: translateX(-50px);

 }
.list_animation-leave-active {
  position: absolute;
}
.el-carousel__arrow{
    height: 50px;
    width: 50px;
    background-color:#36aeea;
}
.el-carousel__arrow[disabled]{
    opacity: 0.2;
}
.el-carousel__arrow[disabled],.el-carousel__arrow[disabled] i{
    // opacity: 0.5;
    cursor: not-allowed;
}
.el-carousel__arrow:hover{
    background-color:#36aeea;

}
.el-icon-arrow-left,.el-icon-arrow-right{
    font-size: 28px;
}
</style>
