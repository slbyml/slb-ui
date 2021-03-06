import slbButton from './button'
import slbBox from './box'

const components = [
  slbButton,
  slbBox
]

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 组件
  slbButton,
  slbBox
}