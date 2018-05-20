<template>
    <div>
        <div class="title">Recommend</div>
        <ul>
            <router-link 
            class="item border-bottom" 
            v-for="(item,index) of list" 
            :key=index
            tag = "li"
            :to="'/detail/' + item.id"
            >
               
                <img class="item-img" :src="item.imgUrl">
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">check detail</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props : {
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
    .item
        text-align :left
        display :flex
        min-height :94px  
        overflow : hidden
        .item-img
            width: 85px
            height : 85px
            padding : 5px
        .item-info
            flex :1
            padding :5px
            .item-title
                line-height :27px
                font-size :16px
                ellipsis
            .item-desc
                line-height : 20px
                color :#ccc
            .item-button
                line-height :12px
                margin-top:10px 
                background :#ff9300
                padding:5px
                border-radius:3px
                color:#fff


</style>
