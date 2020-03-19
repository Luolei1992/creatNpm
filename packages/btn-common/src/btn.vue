<template>
  <div class="btnCommon"  @click="click">
    {{btn}}
  </div>
</template>
<script>
export default {
  name:"btn",
  props:{
    btn:{
      default:'确定',
      type:String
    }
  },
  methods:{
    click(){
      this.$emit('handleClick')
    }
  }
}
</script>
<style lang="less" scoped>
.btnCommon {
  height: 60px;
  line-height: 60px;
  width: 80px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: blue;
  text-align: center;
  color: #fff;
  margin: 100px auto 20px auto;
}
p {
  text-align: center;
}
</style>