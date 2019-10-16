<!--统一分页组件-->
<template>
  <div class="paging">
    <div class="paging-body">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="total"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    //数据总数
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPage: 1, //页码
      pagesize: 10, //每页数据量
      pageSizes: [10, 20, 30, 50] //每页数量选择器
    };
  },
  methods: {
    //每页数量选择器变化
    handleSizeChange(val) {
      //   this.currentPage = 1;
      //   this.pagesize = val;
      //   this.getList();
      this.$emit("handlePaging", 1, val);
    },
    //页码变化
    handleCurrentChange(val) {
      //   this.currentPage = val;
      //   this.getList();
      this.$emit("handlePaging", val, this.pagesize);
    }
  }
};
</script>
<style lang='scss' scoped>
.paging {
  display: flex;
  justify-content: flex-end;
  .paging-body {
    padding: 5px 0 12px 0;
    margin-right: 3%;
  }
}
</style>
<!--
运用实例,直接放在 el-table 下面

<paging :total="total" @handlePaging='handlePaging'></paging>

total: 0,//数据总数

handlePaging(currentPage,pagesize){
        console.log('currentPage',currentPage,'pagesize',pagesize)
        //this.getList(currentPage,pagesize);
    },
-->