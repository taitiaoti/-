<template>
    <div id="types">
        <bz-table width="70%" title="音乐类型">
            <template slot="tab-header">
                <div>
                    <el-button type="primary" size="mini" @click="pushview({name:'addNewMusicType'})">新增</el-button>
                </div>
            </template>
            <template slot="tab-content">
                <div v-for="(item,index) in musicTypes" :key='index+item'>
                    <img :src="url+item.icon"/>
                    <span>
                        {{item.type}}
                    </span>
                    <el-button type='danger' @click="deleteMusicType(item)">删除</el-button>
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
            url:'http://localhost:3000/'
        }
    },
    computed:{
        ...mapState(['musicTypes'])
    },
    created(){
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
    
</style>
