import Vue from "vue";
import Router from "vue-router";
// import BookView from '@/views/User/BookView.vue'
// import IndexView from '@/views/User/IndexView.vue'
import SettingsView from "@/views/User/SettingsView.vue";
import LoginView from "@/views/User/LoginView.vue";
import RegisterView from "@/views/User/RegisterView.vue";
import VerifyMailView from "@/views/User/VerifyMailView.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    // {
    //   path: '/book/:id',
    //   name: 'Book',
    //   component: BookView,
    //   meta:{
    //   title: '书籍 · Ero Light'
    //   }
    // },
    {
      path: "/user/settings/:setpanel",
      name: "Settings",
      component: SettingsView,
      meta: {
        title: "个人中心 · Ero Light"
      }
    },
    {
      path: "/user",
      alias: "/user/index.html",
      name: "login",
      component: LoginView,
      meta: {
        title: "登陆 · Ero"
      }
    },
    {
      path: "/user/register",
      name: "register",
      component: RegisterView,
      meta: {
        title: "注册 · Ero"
      }
    },
    {
      path: "/user/verify",
      name: "verify",
      component: VerifyMailView,
      meta: {
        title: "验证 · Ero"
      }
    }
  ]
});

export default router;
