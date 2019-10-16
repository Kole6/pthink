<template>
  <span class="tree-expand">
    <span class="tree-label" v-if="DATA.isEdit">
      <div class="edits">
        <el-input
          class="edit"
          size="mini"
          :ref="'treeInput'+DATA.id"
          @keyup.enter.native="nodeEditPass(STORE,DATA,NODE)"
          v-model="DATA.name"
        ></el-input>
        <i class="icon iconfont" @click="nodeEditPass(STORE,DATA,NODE)">&#xe627;</i>
      </div>
    </span>
    <template v-else>
      <span class="tree-label" @click="tool(STORE,DATA,NODE)">
        <span>{{DATA.name}}</span>
      </span>
      <span>
        <span class="tree-btn" v-show="!DATA.isEdit">
          <i v-show="edit"  class="icons iconfont" @click.stop="nodeAdd(STORE,DATA,NODE)">&#xe726;</i>
          <i class="icons iconfont" @click.stop="nodeEdit(STORE,DATA,NODE)">&#xe655;</i>
          <i class="icons iconfont" @click.stop="nodeDel(STORE,DATA,NODE)">&#xe78d;</i>
           <!-- v-if="NODE.level!=1" -->
        </span>
      </span>
    </template>
  </span>
</template>
<script>
export default {
  props: ["NODE", "DATA", "STORE"],
  data() {
    return {
      edit: true,
      isEdits: 1
    };
  },
  mounted() {
    this.nodeAdd1(this.STORE, this.DATA, this.NODE);
    // console.log('node',this.NODE)
  },
  methods: {
    addTree: function(pid, name, type,s,d,n) {
        this.$message('添加')
    //   http.api({
    //     url: "zzXxXnjgController/listOrgTree",
    //     method: POST,
    //     params: {
    //       parentId: pid,
    //       name: name,
    //       type: type
    //     },
    //     successCallback: function(data) {
    //       if (data.status == "200") {
    //         this.$message({
    //           type: "success",
    //           message: "新增树节点成功!"
    //         });
    //         this.$emit("setNodeParam",data.data) 
    //         this.$emit("nodeAdd", s, d, n);
    //       } else {
    //         this.$message({
    //           type: "error",
    //           message: data.msg
    //         });
    //       }
    //     }.bind(this)
    //   });
    },
    updateTree: function(id, name, type) {
        this.$message('修改')
    //   http.api({
    //     url: "zzXxXnjgController/update",
    //     method: POST,
    //     params: {
    //       id: id,
    //       name: name,
    //       type: type
    //     },
    //     successCallback: function(data) {
    //       if (data.status == "200") {
    //         this.$message({
    //           type: "success",
    //           message: "修改树节点成功!"
    //         });
    //       } else {
    //         this.$message({
    //           type: "error",
    //           message: data.msg
    //         });
    //       }
    //     }.bind(this)
    //   });
    },

    tool(s, d, n) {
      this.isEdits = d.id;
    },
    nodeAdd1(s, d, n) {
      if (n.level == 3) {
        this.edit = false;
      }
    },
    nodeAdd(s, d, n) {
      //新增
      this.$emit("nodeAdd", s, d, n);
      // this.addTree(d.id, "新增节点", Number(d.type) + 1,s,d,n);
      // this.$emit("nodeAdd", s, d, n);
    },
    nodeEdit(s, d, n) {
      d.isEdit = true;
      //编辑
      this.$emit("nodeEdit", s, d, n);
      console.log(s,d,n)
    },
    nodeDel(s, d, n) {
      //删除
      this.$emit("nodeDel", s, d, n);
    },
    nodeEditPass(s, d, n) {
      d.isEdit = false;
      this.updateTree(d.id, d.name, d.type);
    }
  }
};
</script>
<style>
.tree-expand .tree-btn {
  display: none;
  margin-left: 10px;
}
.expand-tree .is-current > .el-tree-node__content .tree-btn,
.expand-tree .el-tree-node__content:hover .tree-btn {
  display: inline-block;
}
.edits {
  width: 120px;
  height: 25px;
}
</style>


