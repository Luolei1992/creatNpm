// 导入组件
import btn from './src/btn.vue'

// 为组件提供 install 安装方法，供按需引入
btn.install = function (Vue) {
  Vue.component(btn.name, btn)
}

// 默认导出组件
export default btn
