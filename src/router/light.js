import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Light/LightIndex";
import Archives from "@/views/Light/Archives";
import Query from "@/views/Light/Query";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/archives/:id",
      name: "Archives",
      component: Archives
    },
    {
      path: "/query/",
      name: "Query",
      component: Query
    }
  ]
});
