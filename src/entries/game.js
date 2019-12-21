import CreateEntryPoint from "@/utils/CreateEntryPoint";
import App from "@/views/entries/Game.vue";
import router from "@/router/game";
import api from "@/utils/axios.js";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import Vue from "vue";
import VueCookies from "vue-cookies";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueCookies);
Vue.use(SuiVue);
Vue.use(api);

CreateEntryPoint(Vue, App, router, "#app");
