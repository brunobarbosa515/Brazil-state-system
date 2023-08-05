import { createRouter, createWebHistory } from "vue-router";
import RioPage from "../views/RioPage.vue";
import SaoPage from "../views/SaoPage.vue";
import MinasPage from "../views/MinasPage.vue";
import SantoPage from "../views/SantoPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: RioPage,
  },
  {
    path: "/sao",
    name: "sao",
    component: SaoPage,
  },
  {
    path: "/minas",
    name: "minas",
    component: MinasPage,
  },
  {
    path: "/santo",
    name: "santo",
    component: SantoPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
