<template>
    <div id="dailyList">
        <ul>
            <li v-for="(item,index) in dailyList" :key="index+item">
                <img :src="url+item.imgURL"/>
                <p>{{item.description.title}}</p>
                <p>{{item.description.content}}</p>
                <p>{{item.description.author}}</p>
                <!-- <p>{{item.daily}}</p> -->
                <div>
                    <el-button type='danger'>删除</el-button>
                </div>
            </li>
        </ul>
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
        ...mapState(['dailyList'])
    }
}
</script>

<style lang="scss" scoped>
    #dailyList{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        padding: 20px;
        box-sizing: border-box;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 300px;
                height: 550px;
                border: 1px solid lightgray;
                margin: 5px;
                img{
                    width: 300px;
                    height: 400px;
                }
                p{
                    margin: 10px 0;
                    text-align: center;
                }
                div{
                    text-align: center;
                }
            }
        }
    }
</style>

