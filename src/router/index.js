import Vue from "vue";
import VueRouter from "vue-router";

// views
import DashboardIndex from "@/views/dashboard";
import Login from "@/views/login";

// components
import Overview from "@/views/overview";
import Account from "@/views/accountManagement.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard-container",
    redirect: "/overview",
    component: DashboardIndex,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
      {
        path: "account-management",
        name: "account",
        component: Account,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
