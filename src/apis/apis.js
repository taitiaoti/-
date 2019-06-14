import Vue from 'vue'

var apis = {
    // 登录
    checkDynamicCode:'checkDynamicCode',            //动态验证码
    signin:"signin",                                //系统登录

    // 音乐类型管理
    findMusicTypes:"music/findMusicTypes",         //查询音乐类型接口
    addNewMusicType:"music/addNewMusicType",       //新增类型
    deleteMusicType:"music/deleteMusicType",       //删除类型

    // 音频管理
    findMusic:"music/findMusic",                    //查询音频列表
    uploadMusic:"music/uploadMusic",                //新增音频
    updateMusicInfo:"music/updateMusicInfo",        //更新音频信息
    deleteMusic:"music/deleteMusic",                //删除音频

    // 日历管理
    setDailyBackground:"daily/setDailyBackground",  //设置日历
    findDailyBackground:"webapp/findDailyBackground",//查询日历背景图
}

Vue.prototype.$apis = apis;
export default apis;