import CreateEntryPoint from "@/utils/CreateEntryPoint";
import App from "@/views/entries/User.vue";
import router from "@/router/user";
import Vue from "vue";
import Notify from "@/plugins/Notify";
import config from "@/config";
import VueCookies from "vue-cookies";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Notify);
Vue.use(VueCookies);

Vue.prototype.$config = config;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

CreateEntryPoint(Vue, App, router, "#app");
