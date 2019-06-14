<template>
    <div id="uploadMusic">
        <el-dialog
            title="新增音频"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <el-form ref="musicList" :model="musicList" :rules="rules" label-width="80px">
              <el-form-item label='类型' prop='musicType'>
                  <el-input v-model="musicList.musicType"></el-input>
              </el-form-item>
              <el-form-item label='音频'>
                  <input type="file"/>
              </el-form-item>
              <el-form-item label='音频图标'>
                  <input type="file"/>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:true,
            musicList:{
                musicType:''
            },
            rules:{
                musicType:[
                    {required:true,message:'类型不能为空',trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        handleClose(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
