<template>
    <div id="login">
        <div id="loginContent">
            <h1 style="fontSize:30px;margin:20px 0;textAlign:center;">音乐管理</h1>
            <el-form label-width='80px' :model='userInfo' :rules='rules' ref='userInfo'>
                <el-form-item label='用户名 ' prop='username'>
                    <el-input v-model="userInfo.username"></el-input>
                </el-form-item>
                <el-form-item label='密码 ' prop='password'>
                    <el-input type='password' v-model="userInfo.password"></el-input>
                </el-form-item>
                <el-form-item label='验证码 ' prop='text'>
                    <el-input v-model="userInfo.text"></el-input>
                </el-form-item>
            </el-form>
            <p v-html="Data.data" style="textAlign:center" @click="checkDynamicCode"></p>
            <div id="loginBTN">
                <el-button type='primary' @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        // 自定义验证码验证
        var validatePass = (rule, value, callback) => {
            if (value.toLowerCase() !== this.Text.toLowerCase()) {
                    callback(new Error('验证码错误'));
                    this.checkDynamicCode();
                    this.userInfo.text = ''
                } else {
                    callback();
                }
            };
        return {
            Data:'',
            Text:'',
            userInfo:{
                username:'',
                password:'',
                text:''
            },
            rules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ],
                text:[
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        // 获取验证码
        checkDynamicCode(){
            this.$http.get(this.$apis.checkDynamicCode)
            .then((resp)=>{
                // console.log(resp.data.data)
                var resp = resp.data;
                this.Data = resp.data;
                this.Text = resp.data.text;
            })
        },
        // 登录
        login(){
            this.$refs['userInfo'].validate((vaild)=>{
                if(vaild){
                    // 校验通过
                    this.$http.post(this.$apis.signin,this.userInfo)
                    .then((resp)=>{
                        var resp = resp.data;
                        // 提示登陆成功
                        this.$message({
                            type:resp.success?'success':'danger',
                            message:resp.message
                        })
                        var token = resp.token;
                        if(resp.success){
                            /**
                             * 如果登录成功,就把token存到本地
                             * 如果没有设置重定向就默认跳转到home页面
                             * 如果有就跳转到指定的页面
                             */
                            localStorage.setItem('token',token);
                            var query = this.$route.query;
                            if(!query.redirect){
                                this.$router.push({name:'home'})
                            }else{
                                this.$router.push({path:query.redirect})
                            }
                        }else{
                            this.$message.Error('请检查用户名和密码')
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }else{
                    console.log('校验失败')
                }
            })
        }
    },
    created(){
        this.checkDynamicCode();
    }
}
</script>

<style lang="scss" scoped>
    #login{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        #loginContent{
            width: 400px;
            height: 400px;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px 5px lightgray;
            background: lightcyan;
        }
    }
    #loginBTN{
        text-align: center;
        margin-top: 20px;
        .el-button{
            width: 100px;
        }
    }
</style>
