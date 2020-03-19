<template lang="html">
  <div class="picker">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'colorPicker',
  data () {
    return {
      msg:"color-picker"
    }
  },
  mounted () {
    // 点击页面上其他地方，关闭弹窗
    // document.onclick = () => {
    //   this.openStatus = false
    // }
  }
}
</script>
<style lang="less" scoped>
.picker {
  color: red;
  text-align: center;
}
</style>