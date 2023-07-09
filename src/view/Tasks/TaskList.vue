<template>
  <div class="dark:bg-gray-800 py-8 h-screen">
    <div class="flex justify-center">
      <table class="h-auto border-1 border-gray-500">
        <thead>
          <tr class="bg-gray-500">
            <th class="py-2 px-4 border border-gray-200">Number</th>
            <th class="py-2 px-4 border border-gray-200">Name</th>
            <th class="py-2 px-4 border border-gray-200">Avatar</th>
            <th class="py-2 px-4 border border-gray-200">TaskID</th>
            <th class="py-2 px-4 border border-gray-200">TaskTitle</th>
            <th class="py-2 px-4 border border-gray-200"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="bg-gray-400">
            <td class="py-2 px-4 border border-gray-200">{{ item.number }}</td>
            <td class="py-2 px-4 border border-gray-200">{{ item.name }}</td>
            <td class="py-2 px-4 border border-gray-200">{{ item.avatar }}</td>
            <td class="py-2 px-4 border border-gray-200">{{ item.taskid }}</td>
            <td class="py-2 px-4 border border-gray-200">
              {{ item.tasktitle }}
            </td>
            <td class="py-2 px-4 border border-gray-500">
              <button @click="editItem(item)">
                <svg
                  class="w-5 h-5 text-gray-600 hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2h15v9.1q-.5-.125-1.012-.075t-.988.25V4H8v12h6l-2 2H5v1q0 .425.288.713T6 20h6v2H6Zm8 0v-3.175l4.3-4.3l1.075 1.075l-3.875 3.85v1.05h1.05l3.875-3.85l1.05 1.05l-4.3 4.3H14Zm7.475-4.3L18.3 14.525l1.25-1.25q.275-.275.7-.275t.7.275l1.775 1.775q.275.275.275.7t-.275.7l-1.25 1.25ZM9 9V7h9v2H9Zm0 3v-2h9v2H9Zm3 8H5h7Z"
                  />
                </svg>
              </button>
              <button @click="deleteItem(index)">
                <svg
                  class="w-5 h-5 text-gray-600 hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
                  />
                </svg>
              </button>
              <button @click="viewItem(item)">
                <svg
                  class="w-5 h-5 text-gray-600 hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 16q1.875 0 3.188-1.313T16.5 11.5q0-1.875-1.313-3.188T12 7q-1.875 0-3.188 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16Zm0-1.8q-1.125 0-1.913-.788T9.3 11.5q0-1.125.788-1.913T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2Zm0 4.8q-3.65 0-6.65-2.038T1 11.5q1.35-3.425 4.35-5.463T12 4q3.65 0 6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19Zm0-7.5Zm0 5.5q2.825 0 5.188-1.488T20.8 11.5q-1.25-2.525-3.613-4.013T12 6Q9.175 6 6.812 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  mounted() {},
  methods: {},
  data() {
    return {
      items: [
        {
          number: 1,
          avatar: "avatar1.png",
          uid: "UID1",
          name: "John Doe",
          taskid: "1",
          tasktitle: "Create a project",
        },
        {
          number: 2,
          avatar: "avatar2.png",
          uid: "UID2",
          name: "Jane Smith",
          taskid: "2",
          tasktitle: "Hello World",
        },
        // Add more data items as needed
      ],
    };
  },
};
</script>
