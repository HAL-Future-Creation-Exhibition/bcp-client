import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Storage from "@/pages/Storage.vue";
import Server from "@/pages/Server.vue";
import TP from "@/pages/Typography.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "ダッシュボード",
        component: Dashboard
      },
      {
        path: "storage",
        name: "ストレージ",
        component: Storage
      },
      {
        path: "server",
        name: "サーバー",
        component: Server
      },
      {
        path: "tp",
        name: "タイポグラフィ",
        component: TP
      }
    ]
  },
  { path: "*", component: NotFound },
];

export default routes;
