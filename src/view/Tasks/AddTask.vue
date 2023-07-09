<template>
  <div class="dark:bg-gray-800 py-8 h-screen">
    <div class="flex justify-center">
      <form class="w-80 h-3/5 bg-gray-600 p-5 rounded-lg">
        <div class="mb-4">
          <label class="block text-gray-900" for="number">Number</label>
          <input
            class="w-full bg-white border-gray-300 border p-2 rounded-md"
            type="text"
            id="number"
            v-model="number"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-900" for="name">Name</label>
          <input
            class="w-full bg-white border-gray-300 border p-2 rounded-md"
            type="text"
            id="name"
            v-model="name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-900" for="avatar">Avatar</label>
          <input
            class="w-full bg-gray-300 border-gray-300 border p-2 rounded-md"
            type="text"
            id="avatar"
            v-model="avatar"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-900" for="uid">TaskID</label>
          <input
            class="w-full bg-white border-gray-300 border p-2 rounded-md"
            type="text"
            id="taskid"
            v-model="taskid"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-900" for="uid">TaskTitle</label>
          <input
            class="w-full bg-white border-gray-300 border p-2 rounded-md"
            type="text"
            id="tasktitlt"
            v-model="tasktitle"
          />
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addTask",
  data() {
    return {
      number: "", // Add the "number" property
      name: "", // Add the "name" property
      avatar: "", // Add the "avatar" property
      uid: "", // Add the "uid" property
      taskid: "", // Add the "taskid" property
      tasktitle: "", // Add the "tasktitle" property
    };
  },
  mounted() {},
  methods: {},
};
</script>
