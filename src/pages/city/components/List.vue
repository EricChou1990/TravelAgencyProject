<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">current city</div>
                    <div class="button-list">
                        <div class="button-wrapper" >
                            <div class="button">{{this.$store.state.city}}</div>
                        </div>        
                    </div>
            </div>
            <div class="area" >
                <div class="title border-topbottom">hot city</div>
                <div class="button-list">
                    <div class="button-wrapper"
                    v-for="item of hot" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                    >

                        <div class="button">{{item.name}}</div>
                    </div> 
                         
                </div>
            </div>
            <div class="area" v-for="(item,index) of cities" :key="index"  :ref="index">
                <div class="title border-topbottom">{{index}}</div> 
                <div class="item-list">
                    <div class="item border-bottom" 
                    v-for="innerItem of item" 
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>   
            </div>
            
        </div>                    
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hot: Array,
        cities:Object,
        letter:String
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods:{
        handleCityClick (city){
           // alert(city)
            this.$store.commit('bindCity',city)       //触发commit方法 把city作为参数传过去
             this.$router.push('/')        // 跳转回首页
        }
    },
    watch:{
        letter (){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                console.log(element)
                this.scroll.scrollToElement(element)
            }

        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before 
          border-color:#ccc           //产生一像素边框
        &:after
          border-color:#ccc
    .border-bottom
            &:before
                border-color:#ccc
    .list
        overflow :hidden
        position:absolute
        top:80px
        bottom :0
        left 0
        right :0
        .title
            line-height : 22px
            background :#eee
            padding-left :10px
            color :#666
            font-size :13px
    
        .button-list
            overflow :hidden
            padding: 5px 30px 5px 5px
            .button-wrapper
                width:33.33%
                float:left
                .button
                    padding: 2px 0px
                    margin:5px
                    border: 1px solid #ccc
                    border-radius:3px
        .item-list
            .item
                line-height :38px
                text-align :left
                padding-left :10px
        
</style>

