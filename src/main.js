import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(vuex)
new Vue({
  vuetify,
  vuex,

  render: h => h(App)
}).$mount('#app')
