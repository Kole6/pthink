/*
多页面通用接口调用存放
调用方式：直接使用 this.$HttpCommon.getDictByTypes()
*/
import http from '../http'
import {
  GET,
  POST,
  HTTP_ROOT_ADMIN,
  SCHOOL_CODE,
  PRO_ID
} from '../config/http-config';
export default {

  getAllDict(types, success) {

    // 字典表
    var dict = new Promise(function (resolve, reject) {
      http.api({
        url: "api/sjcj/sysdict/queryByType",
        method: POST,
        params: types,
        successCallback: function (data) {
          var resp = {};
          resp.dict = data.data;
          resolve(resp)
        }.bind(this)
      });
    });
    // 生成对象数组
    var dictOrder = [];
    var array = [dict];
    dictOrder.push("dict");
    for (let i in types) {
      if ("bm" == types[i]) {
        // 部门
        var bm = new Promise(function (resolve, reject) {
          http.api({
            url: HTTP_ROOT_ADMIN + "/api/sys/sysdept/getAllDeptSelect",
            method: "POST",
            params: {},
            successCallback: function (data) {
              var resp = {};
              resp.bm = data.data;
              resolve(resp)
            }.bind(this)
          });
        });
        array.push(bm);
        dictOrder.push("bm");
      } else if ("xq" == types[i]) {
        // 学期
        var xq = new Promise(function (resolve, reject) {
          http.api({
            url: HTTP_ROOT_ADMIN + "/api/sys/systeachterm/getAllTeachSelect",
            method: "POST",
            params: {},
            successCallback: function (data) {
              var resp = {};
              resp.xq = data.data;
              resolve(resp);
            }.bind(this)
          });
        });
        array.push(xq);
        dictOrder.push("xq");
      } else if ("bj" == types[i]) {
        // 班级
        var bj = new Promise(function (resolve, reject) {
          http.api({
            url: HTTP_ROOT_ADMIN + "/api/sys/sysclass/getAllClassSelect",
            method: "POST",
            params: {},
            successCallback: function (data) {
              var resp = {};
              resp.bj = data.data;
              resolve(resp)
            }.bind(this)
          });
        });
        array.push(bj);
        dictOrder.push("bj");
      } else if ("jyz" == types[i]) {
        // 教研组
        var jyz = new Promise(function (resolve, reject) {
          http.api({
            url: HTTP_ROOT_ADMIN + "/api/sys/systeachgroup/getTeachGroup",
            method: "POST",
            params: {},
            successCallback: function (data) {
              var resp = {};
              resp.jyz = data.data;
              resolve(resp);
            }.bind(this)
          });
        });
        array.push(jyz);
        dictOrder.push("jyz");
      } else if ("zy" == types[i]) {
        // 专业
        var zy = new Promise(function (resolve, reject) {

          http.api({
            url: HTTP_ROOT_ADMIN + "/api/sys/sysschoolmajor/getAllMajorSelect",
            method: "POST",
            params: {},
            successCallback: function (data) {
              var resp = {};
              resp.zy = data.data;
              resolve(resp);
            }.bind(this)
          });
        });
        array.push(zy);
        dictOrder.push("zy");
      }
    }
    Promise.all(
      // 需要异步一起执行的方法
      array
    ).then(res => {
      // res里面存放的是数组，上面有多少个方法就有多少个index，每个index是上面对应的方法的返回值
      var respInfo = {};

      for (let i in dictOrder) {
        if ("dict" == dictOrder[i]) {
          respInfo = res[i].dict;
        } else if ("bm" == dictOrder[i]) {
          respInfo.bm = res[i].bm;
        } else if ("xq" == dictOrder[i]) {
          respInfo.xq = res[i].xq;
        } else if ("bj" == dictOrder[i]) {
          respInfo.bj = res[i].bj;
        } else if ("jyz" == dictOrder[i]) {
          respInfo.jyz = res[i].jyz;
        } else if ("zy" == dictOrder[i]) {
          respInfo.zy = res[i].zy;
        }

      }
      success(respInfo);
    })
  },


}