import Vue from 'vue'

var apis = {
    // 登录
    checkDynamicCode:'checkDynamicCode',            //动态验证码
    signin:"signin",                                //系统登录

    // 音乐类型管理
    findMusicTypes:"music/findMusicTypes",         //查询音乐类型接口
    addNewMusicType:"music/addNewMusicType",       //新增类型
    deleteMusicType:"music/deleteMusicType",       //删除类型
}

Vue.prototype.$apis = apis;
export default apis;