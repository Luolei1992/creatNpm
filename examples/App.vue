<template>
  <div id="app">
    <router-view></router-view>
    <color-picker />
    <btn btn="PLUS" @handleClick="plus"/>
    <p>{{number}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      number:0
    }
  },
  methods:{
    plus(){
      let num = this.number
      this.number = ++num
    }
  }
}
</script>

<style lang="less">
p {
  text-align: center;
  background-color: #ccc;
  color: red;
  height: 36px;
  line-height: 36px;
}
</style>
