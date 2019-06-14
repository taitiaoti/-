<template>
    <div id="types">
        <bz-table width="70%" title="音乐类型">
            <template slot="tab-header">
                <div>
                    <el-button type="primary" size="mini" @click="pushview({name:'addNewMusicType'})">新增</el-button>
                </div>
            </template>
            <template slot="tab-content">
                <div class='typeList'>
                    <p class="typeTitle">类型图标</p>
                    <p class="typeTitle">音乐类型</p>
                    <p class="typeTitle">操作</p>
                </div>
                <div v-for="(item,index) in musicTypes" :key='index+item' class='typeList'>
                    <img :src="url+item.icon"/>
                    <p style="lineHeight:80px">
                        {{item.type}}
                    </p>
                    <div style="lineHeight:80px">
                        <el-button type='danger' @click="deleteMusicType(item)">删除</el-button>
                    </div>
                </div>
            </template>
        </bz-table>
        <router-view/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            url:'http://localhost:3000'
        }
    },
    computed:{
        ...mapState(['musicTypes'])
    },
    created(){
        // 通过dispatch在vuex里发送获取所有类型的请求
        this.$store.dispatch('findMusicTypes')
    },
    methods:{
        // 删除音乐类型
        deleteMusicType(item){
            // console.log(item._id)
            var action = ()=>{
                this.post(this.$apis.deleteMusicType,{_id:item._id})
                .then((resp)=>{
                    this.$store.dispatch('findMusicTypes')
                }) 
            }
            this.operatorConfirm('删除',action)
        }
    }
}
</script>

<style lang="scss" scoped>
    .typeList{
        display: flex;
        justify-content: space-around;
        margin: 30px 0;
        padding: 10px 0;
        border-bottom: 1px solid lightgray;
        box-sizing: border-box;
        .typeTitle{
            font-size: 20px;
        }
    }
    img{
        width: 80px;
        height: 80px;
    }
</style>
