<!--table操作图标-->
<template>
  <div class="icon-table">
    <a class="topic_title" :title="icon" @click="handleClick">
      <span class="icon iconfont" v-html="tiaoIcon(icon)"></span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    icon: String
  },
  data() {
    return {
      iconList: [
        { iconName: "查看", iconFont: "&#xe61b;" },
        { iconName: "编辑", iconFont: "&#xe655;" },
        { iconName: "审核", iconFont: "&#xe665;" },
        { iconName: "删除", iconFont: "&#xe78d;" },
        { iconName: "重置", iconFont: "&#xe712;" },
        { iconName: "设置", iconFont: "&#xe62b;" }
      ]
    };
  },
  methods: {
      tiaoIcon(ic){
          for(let i of this.iconList){
              if(ic == i.iconName){
                  return i.iconFont
              }
          }
      },
      handleClick(){
          this.$emit('click')
      }
  }
};
</script>
<style lang='scss' scoped>
.icon-table {
  display: inline;
  padding-right: 4px;
  a {
    cursor: pointer;
    .iconfont {
      color: $globalMainColor;
      &:hover{
          color: rgb(0, 126, 189);
      }
    }
  }
}
</style>