import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util/bzaxios'     //导入二次封装的axios
import './apis/apis'        //导入api接口
import 'reset-css'          //清除默认样式
//导入element-ui
import ElementUI from 'element-ui'    
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 导入mixin
import './mixin'
// 导入自定义组件
import bzTable from '@/components/commons/bzTable'
Vue.component('bz-table',bzTable)

Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.path === '/login'){
    next();
  }else{
    var token = localStorage.getItem('token');
    if(token){
      next()
    }else{
      next({path:'/login',query:{redirect:to.path}})
    }
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
