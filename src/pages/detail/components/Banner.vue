<template>
    <div>
        <div class="banner" @click="handleBannerClick">
        <img class="banner-img" :src="bannerImg">
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            
        </div>
    </div>
    <common-gallery :imgs="bannerImgs" v-show="showGallery"  @close="handleGalleryClose">

    </common-gallery>
    </div>
</template>


<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name: 'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:Array
    },
    data () {
        return {
            showGallery: false
            
        }
    },
    methods:{
        handleBannerClick () {
            this.showGallery = true
        },
        handleGalleryClose () {
            this.showGallery = false
            console.log("asd")
        } 
    },
    components:{
         CommonGallery 
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position :relative
        overflow :hidden
        height :0
        padding-bottom :55%
        .banner-img
            width :100%
        .banner-info
            display :flex
            position :absolute
            left :0
            right :0
            bottom :0
            line-height :30px
            color :#fff
            .banner-title
                flex:1 
                
                text-align :left
            .banner-number
                padding :0px 20px
                height :16px
                line-height :16px
                border-radius:10px
                background :rgba(0,0,0,.8)
                font-size :12px
                .banner-icon
                    font-size:12px
</style>
