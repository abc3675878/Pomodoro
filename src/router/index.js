import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
// import Settings from '../views/Settings.vue'
// import List from '../views/List.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "番茄鐘"
    }
  },
  {
    path: "/list",
    name: "List",
    component: () => import(/* webpackChunkName: "list" */ "../views/List.vue"),
    meta: {
      title: "代辦清單"
    }
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
    meta: {
      title: "設定"
    }
  },
  {
    // 米字號是所有頁面的意思
    path: "/*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "找不到頁面"
    }
  }
];

const router = new VueRouter({
  routes
});

router.afterEach(to => {
  document.title = to.meta.title;
});

export default router;
