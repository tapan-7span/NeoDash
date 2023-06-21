<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-grow divide-x-2 divide-gray-800">
      <!-- Left Section -->
      <div class="w-1/4 bg-gray-800">
        <div class="text-center pt-4 text-xl underline decoration-gray-700 hover:decoration-gray-500">Users List</div>
        <div class="border m-6 rounded-lg border-gray-600">
          <ul class="p-2 text-center">
            <li>1. alpha</li>
            <li>2. beta</li>
            <li>3. gama</li>
          </ul>
        </div>
      </div>
      <!-- Center Section -->
      <div class="w-1/2 bg-gray-700">
        <div class="text-center pt-4 text-xl underline decoration-gray-700 hover:decoration-gray-500">Spin</div>
      </div>
      <!-- Right Section -->
      <div class="w-1/4 bg-gray-800 p-4">
        <div class="text-center pt-4 text-xl underline decoration-gray-700 hover:decoration-gray-500">Upcoming Tasks</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
