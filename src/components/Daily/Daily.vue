<template>
    <div id="daily">
        <bz-table width='70%' title="日历管理">
            <template slot="tab-header">
                <div>
                    <el-button type='primary' size='mini' @click="pushview({name:'setDailyBackground'})">设置</el-button>
                </div>
            </template>
            <template slot="tab-content">
                <div>
                    <p class="fingDaily">查询日历背景图</p>
                    <el-form label-width='80px'>
                        <el-form-item label='起始日期'>
                            <el-input v-model="dateInfo.from" placeholder='请输入起始日期'></el-input>
                        </el-form-item>
                        <el-form-item label='结束日期'>
                            <el-input v-model="dateInfo.to" placeholder='请输入结束日期'></el-input>
                        </el-form-item>
                    </el-form>
                    <div style="textAlign:center">
                        <el-button type='primary' style="width:100px" @click="findDaily">查询</el-button>
                    </div>
                </div>
            </template>
        </bz-table>
        <router-view/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dateInfo:{
                to:'',
                from:''
            }
        }
    },
    methods:{
        // 查询日历背景图
        findDaily(){
            this.$router.push({name:'dailyList'})
            this.$store.dispatch('findDaily',this.dateInfo)
        }
    }
}
</script>

<style lang="scss" scoped>
    .fingDaily{
        width: 100%;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 20px;
    }
</style>
