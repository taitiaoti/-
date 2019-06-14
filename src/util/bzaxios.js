import Vue from 'vue'
import axios from 'axios'

// 配置基础路径,在不同环境下发起的基础路径不同
// axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
console.log(process.env)

// 配置拦截器
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log("config",config);
    var token = localStorage.getItem("token");
    config.headers.common['Authorization'] = "Bearer "+token;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
//响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

var bzaxios = {
    get:function(url,params){
        return axios.get(url,{params:params})
        // console.log("get请求")
    },
    post:function(url,params){
        return axios.post(url,params)
        // console.log('post请求')
    }
}

Vue.prototype.$http = bzaxios;
export default bzaxios;