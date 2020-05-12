import Vue from 'vue'
import VueRouter from 'vue-router'
import Bookshelf from '../views/BookShelf.vue'
import SingleBook from '../views/SingleBook.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name: 'Bookshelf',
      component: Bookshelf
    },
    {
      path:'/book/id=:bookId',
      name: 'SingleBook',
      component: SingleBook
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
