import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BooksSourceObject from './assets/childrensbooks.json'

Vue.config.productionTip = false

new Vue({


  data(){
    return {
      booksDB: BooksSourceObject.books
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
