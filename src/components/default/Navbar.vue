<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center">
          <img src="@/assets/logo.png" class="h-8 mr-3" alt="Neo Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Neo Dash</span
          >
        </div>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12ZM4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"
              />
              <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
              <path
                fill="currentColor"
                d="M7 15a5.782 5.782 0 0 0 5 3a5.782 5.782 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3Z"
              />
              Admin
            </svg>
            
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <router-link
              to="/"
              exact
              class="text-gray-500 hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/',
              }"
            >
              Home
            </router-link>
            <router-link
              to="/"
              exact
              class="text-gray-500 hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/',
              }"
            >
              Users
            </router-link>
            <router-link
              to="/"
              exact
              class="text-gray-500 hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/',
              }"
            >
              Tasks
            </router-link>
            <router-link
              to="/"
              exact
              class="text-gray-500 hover:text-blue-500 font-medium py-2 px-4 rounded"
              :class="{
                'underline underline-offset-4 decoration-blue-500 text-white':
                  $route.path === '/',
              }"
            >
              How It Works ?
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
