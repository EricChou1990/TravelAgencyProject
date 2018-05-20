<template>
    <div>
        <div class="title">Choice for weekend</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) of list" :key=index>
               
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                   
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props: {
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
        @import '~styles/mixins.styl'
        .title
            text-align :left
            margin-top: 10px
            line-height :40px
            background :#eee
            text-indent: 10px
        .item-img-wrapper
            height :0
            overflow: hidden
            padding-bottom :33.9%
        
            .item-img
             width: 100%
       
        .item-info  
            padding:5px   
            text-align :left
            
            .item-title
                text-align :left
                line-height :27px
                font-size :16px
                ellipsis
            .item-desc
                text-align :left
                line-height : 20px
                color :#ccc
            


</style>
