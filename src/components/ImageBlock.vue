<template>
<div class="flex flex-col gap-2">
  <div class="flex gap-2 mb-2">
    <button
      v-for="img in predefinedImages"
      :key="img"
      @click="localImageUrl = img"
      class="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
      <img :src="img" alt="img" class="w-8 h-8 object-cover" />
    </button>
  </div>
  <div v-if="localImageUrl" class="flex justify-center">
    <img :src="localImageUrl" alt="Selected" class="max-w-full h-auto" />
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{ modelValue: string }>()
const emits = defineEmits<{ (e: 'update:modelValue', val: string): void }>()

const predefinedImages = [
  'https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1751&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1542461927-dd68c85adc56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

const localImageUrl = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val)
})
</script>
