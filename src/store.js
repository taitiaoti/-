import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/util/bzaxios'
import apis from '@/apis/apis'

Vue.use(Vuex)

// 封装get请求
const loadAction = (commit,payload,mutationName)=>{
  axios.get(payload.api,{to:payload.to,from:payload.from})
  .then((resp)=>{
     var resp = resp.data.data;
     commit(mutationName,resp)
  })
}

export default new Vuex.Store({
  state: {
    musicTypes:'',         //音乐类型
    dailyList:'',          //日历背景图
  },
  mutations: {
    // 将请求的数据储存到state里
    FINDMUSICTYPES(state,payload){
      // console.log(payload)
      state.musicTypes = payload;
    },
    FINDMUSIC(state,payload){
      console.log(payload)
    },
    FINDDAILY(state,payload){
      state.dailyList = payload;
    }
  },
  actions: {
    // 查询音乐类型
    findMusicTypes({commit},payload={}){
      payload.api = apis.findMusicTypes;
      loadAction(commit,payload,'FINDMUSICTYPES')
    },
    // 查询音频列表
    findMusic({commit},payload={}){
      payload.api = apis.findMusic;
      loadAction(commit,payload,'FINDMUSIC')
    },
    // 查询日历背景图
    findDaily({commit},payload){
      payload.api = apis.findDailyBackground;
      console.log(payload)
      loadAction(commit,payload,'FINDDAILY')
    }
  }
})
