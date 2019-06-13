<template>
    <div id="addNewMusicType">
        <el-dialog
            title="新增音乐类型"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form ref="musicType" :model="musicType" :rules="rules" label-width="80px">
              <el-form-item label="音乐类型" prop='type'>
                <el-input v-model="musicType.type" @change="getIcon($event)"></el-input>
              </el-form-item>
              <el-form-item label="类型图标">
                <input type='file' @change="getIcon($event)"/>
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
      getIcon(ev){
        // console.log(ev.target.files)
        var files = ev.target.files;
        this.musicType.icon = files[0].name;
      },
      // 点击上传
      addNewMusicType(){
        console.log(this.musicType)
        var fd = new FormData();
        fd.append('type',this.musicType.type);
        fd.append('icon',this.musicType.icon);
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }
        axios.post(this.$apis.addNewMusicType,fd,config)
        .then((resp)=>{
          console.log(resp)
        })
      }
    }
}
</script>

<style lang="scss" scoped>
   
</style>
