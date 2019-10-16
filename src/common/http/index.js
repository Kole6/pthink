import axios from 'axios'
import URLSearchParams from 'url-search-params';
import {GET, POST,HTTP_ROOT,HTTP_TIMEOUT} from '../config/http-config';

const baseConfig = (axios) => {
  axios.defaults.timeout = HTTP_TIMEOUT;
  axios.defaults.baseURL = HTTP_ROOT
};

const transformRequest = (axios) => {
  axios.defaults.transformRequest = [function (data, headers) {
    // 添加 Authorization 头信息
    Object.assign(headers, {
      'token': window.localStorage.getItem("token")
    });

    if (data instanceof FormData) {
      return data;
    }

    // 忽略 'PUT', 'POST', 'PATCH' 请求
    if (data === undefined) {
      return;
    }
    if (!data.emulateJSON) {
      headers['Content-Type'] = 'application/json;charset=UTF-8';
      return JSON.stringify(data);
    }
    // 处理请求体编码
    headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

    let params = new URLSearchParams();
    Object.keys(data).forEach(function (key) {
      params.append(key, data[key]);
    });
    return params;
  }];
};

// intercept requests or responses before they are handled by then or catch
const addRequestInterceptors = (axios) => {
  axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // 发送 request 前发生异常（可能是 自定义的 transformRequest、interceptors，request 信息不完整，甚至 axios 框架本身）
    console.error('[request error] ' + error);
    return Promise.reject(error);
  });
};

const addResponseInterceptors = (axios) => {
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // 处理 response 时发生异常（包括请求超时，但不包括服务端正常返回的 非2xx 响应）
    console.error('[response error] ' + error);
    return Promise.reject(error);
  });
};

const config = (Vue) => {
  baseConfig(axios);
  transformRequest(axios);
  addRequestInterceptors(axios);
  addResponseInterceptors(axios);
  //accessInVue(Vue, axios);
};

const api = ({
  url,
  method = POST,
  params = {},
  emulateJSON = false,
  timeout = false,
  successCallback,
  errorCallback
}) => {
  let reqConf = {
    method,
    url
  };
  if (method === POST && emulateJSON) {
    params.emulateJSON = true;
  }
  if (method === GET) {
    params.timestamp = new Date().getTime();
  }

  reqConf[method === POST ? 'data' : 'params'] = params;
  if (timeout) {
    axios.defaults.timeout = 100000;
  }

  axios(reqConf).then((response) => {
    // 业务级成功
    successCallback && successCallback(response.data);
  }).catch((error) => {
    if (error.response) {
      // 服务端异常（返回的 HTTP 状态码非 2xx）
      errorCallback && errorCallback(error.response);
    } else {
      // 客户端代码异常（request 预处理、 successCallback 执行报错）或 请求超时
      console.error('[Error]', error.message);
    }
    console.error(error.config);
  });
};

const upload = ({
  url,
  formData,
  successCallback,
  errorCallback
}) => {
  axios.post(url, formData)
    .then(function (response) {
      successCallback && successCallback(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        // 服务端异常（返回的 HTTP 状态码非 2xx）
        errorCallback && errorCallback(error.response);
      } else {
        // 客户端代码异常（request 预处理、 successCallback 执行报错）或 请求超时
        console.error('[Error]', error.message);
      }
    });
};


export default {
  config,
  api,
  upload
};