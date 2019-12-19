import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/homepage.vue";
import "../../public/style/home.css";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Index
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
