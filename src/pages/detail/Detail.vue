<template>
    <div>

        <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="galleryImgs"
        ></detail-banner>
        <deatil-header></deatil-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>

</template>


<script>
import DetailBanner from './components/Banner'
import DeatilHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components :{
        DetailBanner,
        DeatilHeader,
        DetailList
    },
    data () {
        return  {
            sightName : '',
            bannerImg : '',
            galleryImgs:[],
            list : []
        }
    },
    methods : {
        getDetailInfo () {
             axios.get('/api/detail.json',{
                 params: {
                     id: this.$route.params.id                //这样写 axios.get('/api/detail.json?id=' + this.$route.params.id) 效果一样
                 }
             }).then(this.handleGetDataSucc)     
        },
         handleGetDataSucc(res) {
             res = res.data
             if(res.ret && res.data){
                 const data = res.data
                 this.sightName = data.sightName
                 this.bannerImg = data.bannerImg
                 this.galleryImgs = data.galleryImgs
                 this.list = data.categoryList
             }
         }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height : 1000px
</style>
