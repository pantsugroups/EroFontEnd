import CreateEntryPoint from "@/utils/CreateEntryPoint";
import App from "@/views/entries/Light.vue";
import router from "@/router/light";
import Vue from "vue";
import config from "@/config";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import "typeface-roboto";
import VueCookies from "vue-cookies";

Vue.prototype.$config = config;
Vue.use(MuseUI);
Vue.use(VueCookies);

CreateEntryPoint(Vue, App, router, "#app");
