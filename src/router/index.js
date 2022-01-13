import Vue from "vue";
import VueRouter from "vue-router";

// views
import DashboardIndex from "@/views/dashboard";

// components
import Overview from "@/views/overview";

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
        component: Overview
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
