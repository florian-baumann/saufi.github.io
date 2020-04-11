import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'


// Install BootstrapVue
Vue.use(BootstrapVue) //wenn unter "new Vue({..." ateht geht bootstrapp nichtmehr
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
