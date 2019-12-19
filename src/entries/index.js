import CreateEntryPoint from "@/utils/CreateEntryPoint";
import App from "@/views/entries/Index.vue";
import router from "@/router/index";
import Vue from "vue";

CreateEntryPoint(Vue, App, router, "#app");
