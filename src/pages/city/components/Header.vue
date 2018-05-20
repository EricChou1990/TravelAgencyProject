<template>
    <div class="header">
        choose city
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position: relative
        height : 40px
        line-height  : 40px
        overflow:hidden
        color :#fff
        background : $bgColor
        font-size :16px
        .header-back
            position :absolute
            top: 0
            left :0
            width:32px
            text-align:center
            font-size:20px  
            color:#fff          
</style>
