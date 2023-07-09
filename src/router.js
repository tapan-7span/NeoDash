import AuthService from "@/Utilities/AuthService.js";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Error from "@/view/Error.vue";
import Login from "@/view/Login.vue";
import SiteInfo from "@/view/SiteInfo.vue";
import Users from "@/view/Users/Users.vue";
import UsersList from "@/view/Users/UserList.vue";
import addUser from "@/view/Users/AddUser.vue";
import editUser from "@/view/Users/EditUser.vue";
import deletedUsers from "@/view/Users/DeletedUsers.vue";
import { useToast } from "vue-toastification";

// Tasks
import Tasks from "@/view/Tasks/Tasks.vue";
import TaskList from "@/view/Tasks/TaskList.vue";
import addTask from "@/view/Tasks/AddTask.vue";
import editTask from "@/view/Tasks/EditTask.vue";
import deletedTasks from "@/view/Tasks/DeletedTasks.vue";

// Admin Routers
import Dashboard from "@/view/Admin/Dashboard.vue";
import Statistics from "@/view/Admin/Statistics.vue";
import ActivityLog from "@/view/Admin/ActivityLog.vue";
import ManageFeedback from "@/view/Admin/ManageFeedback.vue";

const toast = useToast();

const routes = [
  { path: "/", name: "Home", component: Home },
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
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
    children: [
      { path: "", name: "taskList", component: TaskList },
      { path: "add-task", name: "addtask", component: addTask },
      { path: "edit-task/:id", name: "editTask", component: editTask },
      { path: "delete-task", name: "deletedTasks", component: deletedTasks },
    ],
    meta: { requiresAuth: true },
  },
  { path: "/Login", name: "Login", component: Login },
  { path: "/info", name: "SiteInfo", component: SiteInfo },
  {
    path: "/admin-dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      { path: "", name: "Statistics", component: Statistics },
      { path: "/activity", name: "ActivityLog", component: ActivityLog },
      {
        path: "/manage-feedback",
        name: "ManageFeedback",
        component: ManageFeedback,
      },
    ],
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
  const validated = AuthService.isAuthenticated();
  const versionCheck = AuthService.checkNewVersion();
  if (versionCheck.res) {
    if (validated) {
      next(); // Proceed with the navigation
    } else if (to.name === "Login") {
      next(); // Allow navigation to the login page
    } else {
      next({ name: "Login" }); // Redirect to the login page
    }
  } else {
    toast.warning("New Version" + versionCheck.version + " Available");
    setTimeout(() => {
      toast.info("Updating Version !");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }, 1500);
  }
});

export default router;
