<template>
  <div id="app">
    
    <keep-alive exclude="Detail">          //使用vue自带的keep-alive标签 使得router-view被加载一次后  就存放在内存中 避免反复的渲染页面    //单独对Detail组件不使用keep-alive 这个Detail指的是export default 中的name属性
      <router-view/>       //router-view显示路由所对应的内容
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
