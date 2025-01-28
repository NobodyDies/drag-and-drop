<template>
<div class="min-h-screen bg-gray-200 p-4">
  <h1 class="text-2xl font-bold mb-4 text-black">Drag & Drop Landing Builder</h1>

  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/4 p-4 space-y-4 bg-gray-400 rounded-md sticky h-fit top-0">
      <h2 class="font-semibold mb-2">Toolbox</h2>
      <div class="bg-white shadow-sm p-2 rounded-md flex items-center justify-center cursor-move text-black">
        <span>📝 Text Block</span>
      </div>
      <div class="bg-white shadow-sm p-2 rounded-md flex items-center justify-center cursor-move text-black">
        <span>🖼 Image Block</span>
      </div>
    </div>

    <div class="flex-1 p-4 rounded-md bg-white">
      <h2 class="font-semibold mb-2 text-black">Editor Area</h2>
      <div class="space-y-4 flex flex-col gap-2">
        <div class="p-4 rounded-md shadow-sm bg-gray-50">
          <div class="flex justify-end gap-2 mb-2 text-sm">
            <button class="text-blue-600">
              Duplicate
            </button>
            <button class="text-red-600">
              Delete
            </button>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-2 mb-2">
              <button class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
                <img src="https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" class="w-8 h-8 object-cover" />
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
                <img src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" class="w-8 h-8 object-cover" />
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
                <img src="https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1751&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" class="w-8 h-8 object-cover" />
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
                <img src="https://images.unsplash.com/photo-1542461927-dd68c85adc56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" class="w-8 h-8 object-cover" />
              </button>
            </div>
            <div class="p-2 flex justify-center">
              <img src="https://images.unsplash.com/photo-1542461927-dd68c85adc56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Selected" class="max-w-full h-auto" />
            </div>
          </div>
        </div>
        <div class="p-4 rounded-md shadow-sm bg-gray-50">
          <div class="flex justify-end gap-2 mb-2 text-sm">
            <button class="text-blue-600">
              Duplicate
            </button>
            <button class="text-red-600">
              Delete
            </button>
          </div>
          <textarea
            class="border border-gray-600 rounded-md p-2 w-full text-black"
            rows="3"
            placeholder="Enter text here"
          ></textarea>
        </div>
      </div>
      <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Save (console.log)
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
