<template>
  <el-tree
    ref="expandMenuList"
    class="expand-tree"
    :data="setTree"
    node-key="id"
    getCurrentNode
    highlight-current
    :props="defaultProps"
    :expand-on-click-node="false"
    :render-content="renderContent"
    @node-click="handleNodeClick"
    :default-expand-all="true"
    :default-expanded-keys="defaultExpandKeys"
  ></el-tree>
</template>
<script>
import TreeRender from "./treeRender.vue";
export default {
  props: {
    maxexpandId: {
      type: Number,
      default: 2
    },
    setTree: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      non_maxexpandId: this.maxexpandId, //新增节点开始id(不更改)
      isLoadingTree: false, //是否加载节点树
      defaultProps: {
        children: "children",
        label: "name"
      },
      defaultExpandKeys: [], //默认展开节点列表
      nodeParam:{}
    };
  },
  mounted() {
    this.initExpand();
  }, 
  methods: {
    handleNodeClick(data, node, store) {
      // console.log(data, node, store)
      this.$emit("handleEditd", data);
      if (node.level == 3) {
        this.$emit("ids", data.id);
        // this.$router.push({ path: "targetManage", query: { pid: data.id } });
      }
    },
    initExpand() {
      //isLoadingTree用意也是在此
      this.setTree.map(a => {
        this.defaultExpandKeys.push(a.id);
      });
      this.isLoadingTree = true;
    },
    renderContent(h, { node, data, store }) {
      let that = this; //指向vue
      return h(TreeRender, {
        props: {
          DATA: data, //节点数据
          NODE: node, //节点内容
          STORE: store //完整树形内容
        },
        on: {
          //绑定方法
          nodeAdd: (s, d, n) => that.handleAdd(s, d, n),
          nodeEdit: (s, d, n) => that.handleEdit(s, d, n),
          nodeDel: (s, d, n) => that.handleDelete(s, d, n),
          setNodeParam:(param) => that.setNodeParam(param)
        }
      });
    },
    handleAdd(s, d, n) {
      //增加节点
      if (n.level >= 5) {
        this.$message.error("最多只支持五级！");
        return false;
      }
      //添加数据
      //console.log(d,111111111)
      if(d.children==null&&d.children==undefined){
        d.children = []
      }
      d.children.push({
        id:this.nodeParam.id,
        type:this.nodeParam.type,
        name: "新增节点",
        pid: d.id,
        dssjjgid: d.id,
        isEdit: false,
        children: []
      });
      //展开节点
      if (!n.expanded) {
        n.expanded = true;
      }
    },
    handleEdit(s, d, n) {
      //编辑节点
      //console.log(s, d, n);
    },
    handleDelete(s, d, n) {
      //删除节点
      //console.log(s, d, n);
      let that = this;
      let delNode = () => {
        let list = n.parent.data.children || n.parent.data,
          //节点同级数据，顶级节点时无children
          _index = 99999; //要删除的index
        list.map((c, i) => {
          if (d.id == c.id) {
            _index = i;
          }
        });
        let k = list.splice(_index, 1);
      };
      let isDel = () => {
        that.$confirm("是否删除此节点？", "提示", {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
           // debugger
            // http.api({
            //   url: "zzXxXnjgController/del",
            //   //method: GET,
            //   params: {
            //     id: d.id
            //   },
            //   successCallback: function(data) {
            //     if (data.status == "200") {
            //       this.$message({
            //         type: "success",
            //         message: "删除树节点成功!"
            //       });
            //       delNode();
            //     } else {
            //       this.$message({
            //         type: "error",
            //         message: data.msg
            //       });
            //     }
            //   }.bind(this)
            // });
          })
          .catch(() => {
            return false;
          });
      };
      //新增节点直接删除，否则要通过请求数据删除
      d.id > this.non_maxexpandId ? delNode():isDel();
    },
    setNodeParam(param){
      this.nodeParam = param
    }
  }
};
</script>
