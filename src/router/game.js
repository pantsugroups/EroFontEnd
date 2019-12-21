import Vue from "vue";
import Router from "vue-router";

// import Index from '@/views/Game/Game/Index.vue'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  saveScrollPostion: true,
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Index,
    //   meta: {
    //   title: '欢迎 - EroGame'
    //   }
    // },
    {
      path: "/game/",
      name: "index",
      component: () => {
        return import(/* webpackChunkName: 'games' */ "@/views/Game/Games.vue");
      },
      meta: {
        isBack: false,
        title: "发现 - EroGame"
      }
    },
    {
      path: "/game/games/:page?",
      name: "games",
      component: () => {
        return import(/* webpackChunkName: 'games' */ "@/views/Game/Games.vue");
      },
      meta: {
        isBack: false,
        title: "发现 - EroGame"
      }
    },
    {
      path: "/game/category",
      name: "category",
      component: () => {
        return import(/* webpackChunkName: 'category' */ "@/views/Game/Category.vue");
      },
      meta: {
        title: "分类 - EroGame"
      }
    },
    {
      path: "/game/detail/:id",
      name: "detail",
      component: () => {
        return import(/* webpackChunkName: 'detail' */ "@/views/Game/Detail.vue");
      }
    },
    {
      path: "/game/create",
      name: "create",
      component: () => {
        return import(/* webpackChunkName: 'create' */ "@/views/Game/Create.vue");
      },
      meta: {
        title: "添加游戏 - EroGame"
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
