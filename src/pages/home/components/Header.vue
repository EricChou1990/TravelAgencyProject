<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
            </div>  
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            Search...
            </div>
        <router-link to='/city'>
            <div class="header-right">
            {{this.$store.state.city}}
             <span class="iconfont arrow-icon">&#xe64a;</span>
        </div> 
        </router-link>    
    </div>
</template>

><script>
export default {
    name: 'HomeHeader',
    props: {
        city:String                 //从此处获得从父组件传来的值 city
    }
}
</script>

<style  lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
    display:flex
    line-height :43px
    text-align :left
    background :$bgColor
    color:#fff
    .header-left
        width:50px
        float:left
        .back-icon
            text-align:center
            font-size:20px
    .header-input
        flex:1
        height :32px
        line-height :32px
        background :#fff
        border-radius:5px
        margin-top :6px
        margin-left :10px
        padding-left:10px
        color:#ccc
    .header-right
        color:#fff
        min-width:52px
        padding-left :5px
        padd-right :5px
        float:right
        text-align:center
        .arrow-icon
            font-size:12px

   
</style>


