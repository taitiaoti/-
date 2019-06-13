import Vue from 'vue'

Vue.mixin({
    methods:{
        // 路由跳转
        pushview(item){
            this.$router.push({path:item.path,name:item.name,query:item.query,params:item.params})
        },
        post(url,params){
            return this.$http.post(url,params)
            .then((resp)=>{
                console.log(resp)
                this.$message({
                    type:resp.data.success?'success':'danger',
                    message:resp.data.message
                })
            })
        },
        // 对话框提示
        operatorConfirm(message,action){
            return this.$confirm('您确定要'+message+'吗?','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'danger'
            }).then(()=>{
                return action()
            }).catch(()=>{
                this.$message({
                    type:'info',
                    message:'取消'+message
                })
            })
        }
    }
})