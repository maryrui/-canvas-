<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
@import "../static/css/common.scss";
@import "./components/font/iconfont.css";
#app{
  width:100%;
  height:100%;
  background:#FFF9F2;
}
</style>
