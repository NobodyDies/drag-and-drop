<template>
<div class="min-h-screen bg-gray-200 p-4">
  <h1 class="text-2xl font-bold mb-4 text-black">Drag & Drop Landing Builder</h1>

  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/4 p-4 space-y-4 bg-gray-400 rounded-md sticky h-fit top-0">
      <h2 class="font-semibold mb-2">Toolbox</h2>
      <Draggable
        v-model="toolboxItems"
        class="flex flex-col gap-2"
        :group="{ name: 'blocks', pull: 'clone', put: false }"
        :clone="cloneToolboxItem"
        :sort="false"
        item-key="type"
      >
        <template #item="{ element }">
        <ToolboxItem>
          <span>{{ element.label }}</span>
        </ToolboxItem>
        </template>
      </Draggable>
    </div>

    <div class="flex-1 p-4 rounded-md bg-white">
      <h2 class="font-semibold mb-2 text-black">Editor Area</h2>
      <Draggable
        v-model="blocks"
        :group="{ name: 'blocks', pull: true, put: true }"
        class="space-y-4 flex flex-col gap-2"
        item-key="id"
      >
        <template #item="{ element, index }">
        <div>
          <div class="flex justify-end gap-2 mb-2 text-sm">
            <button class="text-blue-600" @click="duplicateBlock(index)">
              Duplicate
            </button>
            <button class="text-red-600" @click="deleteBlock(index)">
              Delete
            </button>
          </div>
          <div class="p-4 rounded-md shadow-sm bg-gray-50">
            <TextBlock v-if="element.type === 'text'" v-model="element.content" />
            <ImageBlock v-else-if="element.type === 'image'" v-model="element.content" />
          </div>
        </div>
        </template>
      </Draggable>
      <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" @click="save">
        Save (console.log)
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue';
import TextBlock from '@/components/TextBlock.vue';
import ImageBlock from '@/components/ImageBlock.vue';
import ToolboxItem from '@/components/ToolboxItem.vue';
import Draggable from 'vuedraggable'
import { IBlock } from '@/types';

const toolboxItems = ([
  { type: 'text', label: '📝 Text Block' },
  { type: 'image', label: '🖼 Image Block' }
])

const blocks = ref<IBlock[]>([]);

const cloneToolboxItem = (item: any) => {
  return { id: +Date.now(), type: item.type, content: '' };
};

function deleteBlock(index: number) {
  blocks.value.splice(index, 1);
}

function duplicateBlock(index: number) {
  const currentBlock = blocks.value[index];
  const newBlock = { ...currentBlock, id: +Date.now() };
  blocks.value.splice(index + 1, 0, newBlock);
}

function save() {
  console.log('blocks:', toRaw(blocks.value));
  alert('Saved! Check the console for details.');
}
</script>

<style scoped>
</style>
