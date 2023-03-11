import axios from "axios"

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'content-type': 'application/json' }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = sessionStorage.getItem('token');
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log('------------------')
  if (error.response.status == 401) {
    window.location.href = '/'
  }
  return Promise.reject(error);
})

export const loginApi = function (payload = {}) {
  //payload 是不是服务端要的入参
  //就是网页的预览
  return instance.post('/auth/login', payload,)
}
//获取用户信息
export const getUserListApi = function (payload = {}) {
  return instance.get('/user', payload)
}
//隐式登录
export const getToken = function (payload = {}) {
  return instance.post('/auth/token', payload,)
}
//用户注册
export const registerUserApi = function (payload = {}) {
  return instance.post('/auth/register', payload)
}
//查询当前的登录用户信息
export const queryUserProfileApi = function (payload = {}) {
  return instance.post('/auth/profile', payload)
}
//修改选择的用户信息
export const editUserInfoApi = function (userId, payload = {}) {
  return instance.patch('/user/'+ userId , payload)
}

