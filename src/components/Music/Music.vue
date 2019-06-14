<template>
    <div id="music">
        <bz-table width='70%' title='音频管理'>
            <template slot="tab-header">
                <div>
                    <el-button type="primary" size="mini" @click="pushview({name:'uploadMusic'})">新增</el-button>
                </div>
            </template>
            <template slot="tab-content">
                <table>
                    <tr>
                        <th>名称</th>
                        <th>类型</th>
                        <th>上传日期</th>
                    </tr>
                </table>
            </template>
        </bz-table>
        <router-view/>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('findMusic')
    }
}
</script>

<style lang="scss" scoped>
    table{
        width: 100%;
        tr{
            display: flex;
            th{
                flex:1
            }
            td{
                flex:1
            }
        }
    }
</style>
