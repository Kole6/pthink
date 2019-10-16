export const GET = 'GET';
export const POST = 'POST';
export const HTTP_TIMEOUT = 20000;

//魔方3.0后端地址
export const HTTP_ROOT = APP_HTTP_ROOT != '' ? APP_HTTP_ROOT :
    (process.env.NODE_ENV === 'production' ? 'http://localhost:8081/cube-api' : 'http://localhost:8081/cube-api');

//校端后台管理地址
export const HTTP_ROOT_ADMIN = APP_HTTP_ROOT != '' ? APP_HTTP_ROOT :
    (process.env.NODE_ENV === 'production' ? 'http://192.168.20.182:8080/public-admin-server' : 'http://192.168.20.182:8080/public-admin-server');

//文件上传地址
export const HTTP_ROOT_FILE_CENTER = APP_HTTP_ROOT != '' ? APP_HTTP_ROOT :
    (process.env.NODE_ENV === 'production' ? 'http://192.168.20.182:8080/fileCenter' : 'http://192.168.20.182:8080/fileCenter');

    //登录要传的学校编码
export const SCHOOL_CODE ="3632000063"

//登录要传的项目编码proid
export const PRO_ID ="2"