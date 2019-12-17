import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Light/LightIndex";
import Archives from "@/components/Light/Archives";
import Query from "@/components/Light/Query";

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
