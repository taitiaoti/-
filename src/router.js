import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'home'},
    {
      path:'/home',
      name:'home',
      component:()=>import(/* webpackChunkName: "home" */ "@/components/Home"),
      children:[
        {
          path:'daily',
          name:'daily',
          component:()=>import(/* webpackChunkName:"daily" */ "@/components/Daily/Daily")
        },
        {
          path:'newMessage',
          name:'newMessage',
          component:()=>import(/* webpackChunkName:'newMessage' */ "@/components/newMessage/newMessage")
        },
        {
          path:'types',
          name:'types',
          component:()=>import(/* webpackChunkName:'types' */ "@/components/Types/Type"),
          children:[
            {
              path:'addNewMusicType',
              name:'addNewMusicType',
              component:()=>import(/* webpackChunkName:'addNewMusicType' */ "@/components/Types/addNewMusicType")
            }
          ]
        },
        {
          path:'music',
          name:'music',
          component:()=>import(/* webpackChunkName:'music' */ "@/components/Music/Music")
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:()=>import(/* webpackChunkName:'login' */ "@/components/Login/Login")
    }
  ]
})
