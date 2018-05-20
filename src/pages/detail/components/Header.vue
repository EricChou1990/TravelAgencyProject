<template>
<div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
         <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div 
    class="header-fixed" 
    v-show="!showAbs"
    :style="opacityStyle"
    >
        <router-link to="/" >
         <span class="iconfont header-fixed-back">&#xe624;</span>
        
    </router-link>  
     detail 
    </div>
</div>
    
</template>


<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle : {
                opacity : 0
            }
        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop
        if(top > 60 ){
            let opacity = top/140
            opacity = opacity > 1 ? 1 : opacity     //让opacity最大不超过1
            this.opacityStyle = {
                opacity : opacity         //将渐变值赋给成员变量
            }
            this.showAbs = false
        }else
        {
            this.showAbs = true
        }

           // console.log(document.documentElement.scrollTop)
        }
    },
    activated () {
        //因为用了keep alive 所以页面只要一被展示  activated这个钩子就会被执行
        window.addEventListener('scroll',this.handleScroll)  //将scroll事件 与 handleScroll这个函数绑定   
    },
    deactivated () {
        window.removeEventListener('scroll',this.handleScroll)      //一旦这个页面不被展示（切换到其他页面）  需要解绑监听函数
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position :absolute
        left : 10px
        top: 10px
        width: 40px
        height : 40px
        line-height :40px
        border-radius: 20px
        background :rgba(0,0,0,.8)
        .header-abs-back
            color :#fff
            font-size:20px
     .header-fixed
        z-index:2
        position: fixed
        top:0
        left 0
        right :0
        height : 40px
        line-height  : 40px
        overflow:hidden
        color :#fff
        background : $bgColor
        font-size :16px
        .header-fixed-back
            position :absolute
            top: 0
            left :0
            width:32px
            text-align:center
            font-size:20px  
            color:#fff      
    
</style>
