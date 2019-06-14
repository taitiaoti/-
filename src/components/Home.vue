<template>
    <div id="Home">
        <div class="navBar">
            <ul>
                <li 
                v-for="(item,index) in navList" :key="index" 
                @click="pushview(item,index)"
                :class="isActive==index?'active':''">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActive:-1,
            navList:[
                {title:'日历管理',name:'daily'},
                {title:'留言管理',name:'newMessage'},
                {title:'类型管理',name:'types'},
                {title:'音频管理',name:'music'}
            ]
        }
    },
    methods:{
        pushview(item,index){
            this.$router.push({name:item.name})
            this.isActive = index;
        }
    }
}
</script>

<style lang="scss" scoped>
    #Home{
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
        .navBar{
            width: 20%;
            min-width: 300px;
            height: 100%;
            background: rgb(245, 243, 243);
            ul{
                width: 100%;
                height: 100%;
                padding: 30px 10px 0 10px;
                box-sizing: border-box;
                li{
                    width: 100%;
                    height: 44px;
                    border-bottom: 1px solid lightgray;
                    line-height: 44px;
                    padding-left: 5px;
                    box-sizing: border-box;
                    border-radius: 5px;
                }
            }
        }
        .content{
            width: 80%;
            height: 100%;
            padding: 20px 20px 0 20px;
            overflow-y: scroll;
            position: relative;
        }
        .active{
            background: cyan;
            color: white;
        }
    }
</style>
