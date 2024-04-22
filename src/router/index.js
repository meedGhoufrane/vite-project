import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import LoginForm from "../components/LoginForm.vue";

let isLoggedIn = false; 

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/RegistrationForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' }); 
  } else {
    next();
  }
});

export function login(credentials) {
  if (credentials.username === "user" && credentials.password === "password") {
    isLoggedIn = true;
    return true;
  } else {
    return false;
  }
}

export default router;
