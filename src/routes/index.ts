import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
//creating array of routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/cart", name: "cart", component: Cart },
  { path: "/checkout", name: "checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
