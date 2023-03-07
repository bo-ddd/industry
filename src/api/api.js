import axios from "axios"

const instance = axios.create({
    baseURL : '/api',
    timeout:5000,
    headers:{'content-type' : 'application/json'}
})


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(config.headers){
      config.headers.token = sessionStorage.getItem('token');
    }
    
  return config;
}, function (error) {
  return Promise.reject(error);
})

const getPostConfig = function () {
  return {
    headers: {
      contentType: "application/json",
      token: sessionStorage.getItem('token'),
    }
  }
}

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  if (response.data.status == 401) {
    this.$router.push('/')
  }
  return response;
}, function (error) {
  return Promise.reject(error);
})

  export const loginApi = function (payload = {}) {
    //payload 是不是服务端要的入参
    //就是网页的预览
    return instance.post('/auth/login', payload ,getPostConfig())
  }
  //获取用户信息
  export const getUserListApi = function (payload = {}) {
    return instance.get('/user', payload ,getPostConfig())
  }