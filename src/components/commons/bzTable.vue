<template>
    <div id="bzTable" :style={width:width}>
        <div class="tab-header">
            <span style="color:red;fontSize:18px">{{title}}</span>
            <slot name="tab-header"></slot>
        </div>
        <div class="tab-content">
            <slot name="tab-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        width:{
            default:'100%'
        },
        title:{
            default:'提示'
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab-header{
        width: 100%;
        height: 44px;
        border: 1px solid lightgray;
        border-radius: 5px;
        line-height: 44px;
        padding:0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
</style>
