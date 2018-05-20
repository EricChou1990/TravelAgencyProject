import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city: localStorage.city || 'Syd'
    },
    actions:{
        changeCity(ctx,city){
            console.log(city)
            ctx.commit('bindCity',city)       //执行commit方法 调用mutation中的changeCity函数 city作为参数传入
        }
    },
    mutations:{
        bindCity(state,city){
            state.city = city 
            localStorage.city = city
        }
    }
})