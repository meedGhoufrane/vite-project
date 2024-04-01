
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  } ,
  {
    path: '/register',
    name: 'signup',
    component: () => import("../views/RegistrationForm.vue")
  } ,
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginForm.vue")
  } ,
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import("../views/TasksView.vue")
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router










// import { createRouter, createWebHistory } from "vue-router";

// import Home from "../components/Home.vue";

// const routes = [
//   { path: "/", name: "Home", component: Home },
//   {
//     path: "/login",
//     name: "Login",
//     component: () => import("../components/LoginForm.vue"),
//   },
//   {
//     path: "/register",
//     name: "Register",
//     component: () => import("../components/RegistrationForm.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;


