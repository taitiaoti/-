<template>
    <div>
        <el-dialog
            title="设置日历"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form ref="DailyList" label-width="80px">
              <el-form-item label='日期'>
                  <el-input v-model="DailyList.daily"></el-input>
              </el-form-item>
              <el-form-item label='点赞'>
                  <el-input type='number' v-model="DailyList.liked"></el-input>
              </el-form-item>
              <el-form-item label='作者'>
                  <el-input v-model="description.author"></el-input>
              </el-form-item>
              <el-form-item label='名字'>
                  <el-input v-model="description.title"></el-input>
              </el-form-item>
              <el-form-item label='描述'>
                  <el-input v-model="description.content"></el-input>
              </el-form-item>
              <el-form-item label='图片'>
                  <input type="file" @change="fileData"/>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="setDaily">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:true,
            DailyList:{
                daily:'',
                liked:'',
                dailyIMG:''
            },
            description:{
                author:'',
                title:'',
                content:''
            }
        }
    },
    methods:{
        handleClose(){
            this.$router.go(-1)
        },
        fileData(ev){
            this.DailyList.dailyIMG = ev.target.files[0]
        },
        // 设置日历背景图
        setDaily(){
            // console.log(this.DailyList,this.description)
            // console.log(this.DailyList.dailyIMG)
            var fd = new FormData();
            fd.append('daily',this.DailyList.daily);
            fd.append('dailyIMG',this.DailyList.dailyIMG);
            fd.append('liked',this.DailyList.liked);
            fd.append('description',JSON.stringify(this.description));
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };
            this.post(this.$apis.setDailyBackground,fd,config)
            .then((resp)=>{
                this.$router.go(-1)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
