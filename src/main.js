import Vue from 'vue'
import App from './App.vue'
import FlowersPlugin from './plugins/FlowersPlugin'

Vue.config.productionTip = false

Vue.use(FlowersPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
