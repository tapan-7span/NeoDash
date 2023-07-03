<template>
  <div class="flex flex-col h-screen text-white">
    <div class="flex flex-grow divide-x-2 divide-gray-800">
      <!-- Left Section -->
      <!-- <div class="w-1/4 bg-gray-800">
        <div
          class="text-center pt-4 text-xl underline decoration-gray-700 hover:decoration-gray-500"
        >
          Left Side
        </div>
        
      </div> -->
      <!-- Center Section -->
      <div class="w-3/4 bg-gray-700">
        <div
          class="text-center pt-4 text-xl underline decoration-gray-700 hover:decoration-gray-500"
        >
          Navbar not Updating <br />
          Colors are not propper
        </div>
      </div>
      <!-- Right Section -->
      <div class="w-1/4 bg-stone-800 p-4">
        <div
          class="text-center pt-4 text-xl underline decoration-gray-700 hover:decoration-gray-500"
        >
          Right Side
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
