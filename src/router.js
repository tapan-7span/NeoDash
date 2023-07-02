import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Error from "@/view/Error.vue";
import Login from "@/view/Login.vue";
import Tasks from "@/view/Tasks.vue";
import SiteInfo from "@/view/SiteInfo.vue";
import Dashboard from "@/view/Admin/Dashboard.vue";
import Users from "@/view/Users/Users.vue";
import UsersList from "@/view/Users/UserList.vue";
import addUser from "@/view/Users/AddUser.vue";
import editUser from "@/view/Users/EditUser.vue";
import deletedUsers from "@/view/Users/DeletedUsers.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    name: "Users",
    component: Users,
    children: [
      { path: "", name: "UsersList", component: UsersList },
      { path: "add-user", name: "addUser", component: addUser },
      { path: "edit-user/:id", name: "editUser", component: editUser },
      { path: "deleted-users", name: "deletedUsers", component: deletedUsers },
    ],
    meta: { requiresAuth: true },
  },
  { path: "/tasks", name: "Tasks", component: Tasks },
  { path: "/Login", name: "Login", component: Login },
  { path: "/info", name: "SiteInfo", component: SiteInfo },
  {
    path: "/admin-dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  { path: "/:catchAll(.*)", name: "Error", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    document.querySelector("body").scrollIntoView({ behavior: "smooth" });
  },
  routes,
});

router.beforeEach((to, from, next) => {
  if (1) {
    next();
  }
});

export default router;
