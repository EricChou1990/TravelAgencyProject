<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="search..."> 
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li 
                    class="search-item border-bottom" 
                    v-for="item of list" :key="item.id"   @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    No Match
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name:'CitySearch',
  props:{
      cities:Object
  },
  data (){
      return {
          keyword:'',
          list:[],
          timer:null
      }
  },
  computed:{
      hasNoData() {
          return !this.list.length
      }
  },
 methods:{
        handleCityClick (city){
           // alert(city)
            this.$store.commit('bindCity',city)       //触发commit方法 把city作为参数传过去
            this.$router.push('/')        // 跳转回首页
        }
    },
  watch:{
      keyword (){
            if(this.timer){
              clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }

            this.timer=setTimeout(()=>{                                   //用定时器让箭头函数 每隔100ms执行一次
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                            result.push(value)        
                        }
                    })    
                }
                this.list = result
            },100)    
      }
  },

  mounted (){
      this.scroll = new Bscroll(this.$refs.search)             //注册新的scroll组件  与dom中ref为search的dom节点绑定
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height :35px
        background :$bgColor
        padding :5px
        padding-right:9px
        padding-top:0px
        .search-input
            height: 28px
            line-height :28px
            width:100%
            border-radius: 3px
            color:#666
            text-align :center
    .search-content
        z-index 1
        position :absolute
        top:80px
        left :0
        right :0
        bottom :0
        overflow :hidden
        background :#eee
        .search-item
            line-height :31px
            padding left 10px
            color :#666
            background :#fff
</style>

