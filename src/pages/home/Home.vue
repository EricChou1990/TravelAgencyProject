<template>
    <div>
       
        <home-header ></home-header>
        <home-swiper :list = "swiperList"></home-swiper>
         <home-icons :list="iconList"></home-icons>
         <home-recommend :list="recommendList"></home-recommend>
         <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
    name: 'Home',
    components:{
        HomeHeader,     //要用局部组件 要先在此注册
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            lastCity: '',
            swiperList:[],
            iconList: [],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')                //在config/index.js中设置转发路径
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
           if (res.ret && res.data) {
               const data =res.data
              
               this.swiperList = data.swiperList
               this.iconList = data.iconList
               this.recommendList = data.recommendList
               this.weekendList = data.weekendList
           }
        }
    },
    mounted () {
        this.lastCity = this.$store.state.city
        this.getHomeInfo()
    },
    activated () {
        //使用了keep-alive后  每次重新加载页面 mounted不会再被执行  activated会被执行

        if(this.lastCity !== this.$store.state.city){    //对上一次选择的城市保存  如果在城市页面中选择了新城市 再返回主页时  显示内容要改变
            this.lastCity = this.$store.state.city
            console.log("asdas")
            this.getHomeInfo()
        }
    }




}
</script>

<style>
   
</style>


