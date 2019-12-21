import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Light/LightIndex";
import Archives from "@/views/Light/Archives";
import Query from "@/views/Light/Query";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/light/",
      alias: "/light",
      name: "Index",
      component: Index
    },
    {
      path: "/light/archives/:id",
      name: "Archives",
      component: Archives
    },
    {
      path: "/light/query/",
      name: "Query",
      component: Query
    }
  ]
});
