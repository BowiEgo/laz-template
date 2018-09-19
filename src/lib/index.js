import Example from './Example.vue'
import '../assets/less/style.less'

Example.install = function(Vue) {
  Vue.component(Example.name, Example)
}

export {
  Example
}
