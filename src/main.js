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
  methods:{
    getBook(id){
      return this.booksDB.find(book => book.id == id)
    }

  },

  router,
  render: h => h(App)
}).$mount('#app')
