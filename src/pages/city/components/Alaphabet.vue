<template>
    <ul class="list">
        <li 
            class="item"
            v-for="(item,index) of cities" 
            :key="index"
            @click="handleLetterClick"
           
         >
            {{index}}
        </li>
        
    </ul>
</template>


><script>
export default {
    name :'CityAlphabet',
    props: {
        cities:Object
    },
    
    data() {
        return {
            touchStatus: false
        }
    },
    methods:{
        handleLetterClick(e){
            console.log(e.target.innerText)
            this.$emit('change',e.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display:flex
        flex-direction :column
        justify-content :center
        position : absolute
        top: 80px
        right :0
        bottom :0
        width: 20px
        .item
            line-height :22px
            color:$bgColor
</style>
