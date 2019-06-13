import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/util/bzaxios'
import apis from '@/apis/apis'

Vue.use(Vuex)

// 封装get请求
const loadAction = (commit,payload,mutationName)=>{
  axios.get(payload.api).then((resp)=>{
     var resp = resp.data.data;
     commit(mutationName,resp)
  })
}

export default new Vuex.Store({
  state: {
    musicTypes:''         //音乐类型
  },
  mutations: {
    // 将请求的数据储存到state里
    FINDMUSICTYPES(state,payload){
      console.log(payload)
      state.musicTypes = payload;
    }
  },
  actions: {
    // 查询音乐类型
    findMusicTypes({commit},payload={}){
      payload.api = apis.findMusicTypes;
      loadAction(commit,payload,'FINDMUSICTYPES')
    }
  }
})
