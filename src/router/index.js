import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from "../views/Test";
import App from "../App";
import Page1 from "../views/Page1";
import Page2 from "../views/Page2";
import Index from "../views/Index";
import AddBook from "../views/AddBook";
import EditBook from "../views/EditBook";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '首页',
    component: Index
  },
  {
    path: '/addbook',
    name: '添加书籍',
    component: AddBook
  },
  {
    path: '/editbook',
    name: '修改书籍',
    component: EditBook
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
