import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicePage from "../views/ServicePage";
import HomePage from "../views/HomePage";
import AboutPages from "../views/AboutPages";
import NewsPage from "../views/NewsPage";
import LoginPage from "../views/LoginPage";
import LeadersPage from "@/views/LeadersPage";
import StructuralDivisionPage from "@/views/StructuralDivisionPage";
import CompanyPage from "@/views/CompanyPage";
import StationPage from "@/views/StationPage";
import StructureCompanyPage from "@/views/StructureCompanyPage";
import FunctionalPage from "@/views/FunctionalPage";
import HistoryPage from "@/views/HistoryPage";
import ReferencePage from "@/views/ReferencePage";
import SmsValidatePage from "@/views/SmsValidatePage";
import AllNewsPage from "@/views/AllNewsPage";
import AdminPanel from "@/views/AdminPanel";
import AdminNewsPage from "@/views/AdminNewsPage";
import GalleryPage from "@/views/GalleryPage";
import AddNewsPage from "@/views/AddNewsPage";
import EditNewsAdmin from "@/views/EditNewsAdmin";
import StatisticAdmin from "@/views/StatisticAdmin";
import ApealPage from '@/views/ApealPage'
import ReportVerifyPage from '@/views/ReportVerifyPage'
import CompanyGroup from '@/views/CompanyGroup'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomePage,
      },
      {
        path: "/services",
        name: "services",
        component: ServicePage,
      },
      {
        path: "/about",
        name: "about",
        component: AboutPages,
      },
      {
        path: "/news/:id",
        name: "news",
        component: NewsPage,
      },
      {
        path: "/allnews",
        name: "allnews",
        component: AllNewsPage,
      },
      {
        path: "/companygroup/:group",
        name: "companygroup",
        component: CompanyGroup,
      },
      {
        path: "/gallery",
        name: "gallery",
        component: GalleryPage,
      },
      // submenu router
      {
        path: "/leaders",
        name: "leaders",
        component: LeadersPage,
      },
      {
        path: "/structuraldivision",
        name: "structuraldivision",
        component: StructuralDivisionPage,
      },
      {
        path: "/company",
        name: "company",
        component: CompanyPage,
      },
      {
        path: "/station",
        name: "station",
        component: StationPage,
      },
      {
        path: "/structurecompany",
        name: "structurecompany",
        component: StructureCompanyPage,
      },
      {
        path: "/functional",
        name: "functional",
        component: FunctionalPage,
      },
      {
        path: "/history",
        name: "history",
        component: HistoryPage,
      },
      {
        path: "/reference",
        name: "reference",
        component: ReferencePage,
      },
      {
        path: "/smsvalidate",
        name: "smsvalidate",
        component: SmsValidatePage,
      },
      {
        path: "/reportvalidate",
        name: "reportvalidate",
        component: ReportVerifyPage,
      },
    ],
  },
  // Admin panel
  {
    path: "/admin",
    name: "admin",
    component: AdminPanel,
    children: [
      {
        path: "/admin/news",
        name: "adminnews",
        component: AdminNewsPage,
      },
      {
        path: "/admin/addnews",
        name: "addnews",
        component: AddNewsPage,
      },
      {
        path: "/admin/editnews/:id",
        name: "editnews",
        component: EditNewsAdmin,
      },
      {
        path: "/admin/statistic",
        name: "statistic",
        component: StatisticAdmin,
      },
      {
        path: "/admin/apeal",
        name: "apela",
        component: ApealPage,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
