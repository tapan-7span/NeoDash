<template>
  <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden dark:bg-gray-800">
    <!-- left Panel -->

    <div class="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4 bg-gray-700">
      <div class="sticky top-0 p-4 w-full">
        <ul
          class="flex sm:flex-col overflow-hidden content-center justify-between"
        >
          <RouterLink to="/users">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-900"
            >
              Users List
            </button>
          </RouterLink>
          <RouterLink to="/users/add-user">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-900"
            >
              Add User
            </button>
          </RouterLink>
          <RouterLink to="/users/deleted-users">
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-900"
            >
              Deleted Users
            </button>
          </RouterLink>
        </ul>
      </div>
    </div>
    <div role="main" class="w-full flex-grow p-8 overflow-auto">
      <router-view v-slot="{ Component, route }">
        <transition name="slide">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "Users",
};
</script>
