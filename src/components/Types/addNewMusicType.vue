<template>
    <div id="addNewMusicType">
        <el-dialog
            title="新增音乐类型"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form ref="musicType" :model="musicType" :rules="rules" label-width="80px">
              <el-form-item label="音乐类型" prop='type'>
                <el-input v-model="musicType.type"></el-input>
              </el-form-item>
              <el-form-item label="类型图标">
                <input type='file' @change="fileData($event)"/>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="addNewMusicType">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        dialogVisible: true,
        musicType:{
          type:'',
          icon:''
        },
        rules:{
          type:[
            {required:true,message:'音乐类型不能为空',trigger:'blur'}
          ],
          icon:[
            {required:true,message:'类型图标不能为空',trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      handleClose(){
        var action = ()=>{
          this.$router.go(-1)
        }
        this.operatorConfirm('退出新增',action)
      },
      // 获取要上传的文件
      fileData(ev){
        // console.log(ev.target.files)
        var files = ev.target.files;
        this.musicType.icon = ev.target.files[0];
      },
      // 点击上传
      addNewMusicType(){
        // 校验
        this.$refs['musicType'].validate((vaild)=>{
          if(vaild){
            // 创建FormData
            var fd = new FormData();
            // 将文件添加到FromData里
            fd.append('type',this.musicType.type);
            fd.append('icon',this.musicType.icon);
            // 设置请求头
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            }
            // 发送请求
            axios.post(this.$apis.addNewMusicType,fd,config)
            .then((resp)=>{
              // console.log(resp)
              // 新增成功后重新发起查询数据请求,跳转到上一个页面
              this.$store.dispatch('findMusicTypes')
              this.$router.go(-1)
            })
          }else{
            console.log('校验失败')
          }
        })
      }
    }
}
</script>

<style lang="scss" scoped>
   
</style>
