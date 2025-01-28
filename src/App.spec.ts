import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import App from '@/App.vue';
import ToolboxItem from '@/components/ToolboxItem.vue';
import Draggable from 'vuedraggable';

describe('App.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Drag & Drop Landing Builder');
    expect(wrapper.findComponent(Draggable).exists()).toBe(true);
    expect(wrapper.findAllComponents(ToolboxItem).length).toBe(2);
  });

  it('adds a new block when a toolbox item is dragged', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          Draggable,
        },
      },
    });

    expect(wrapper.vm.blocks.length).toBe(0);
    const clonedItem = wrapper.vm.cloneToolboxItem(wrapper.vm.toolboxItems[0]);
    wrapper.vm.blocks.push(clonedItem);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.blocks.length).toBe(1);
    expect(wrapper.vm.blocks[0].type).toBe('text');
  });

  it('duplicates a block when the duplicate button is clicked', async () => {
    const wrapper = mount(App);
    wrapper.vm.blocks.push({ id: 1, type: 'text', content: 'Test Content' });
    await wrapper.vm.$nextTick();

    const duplicateButton = wrapper.find('.text-blue-600');
    await duplicateButton.trigger('click');

    expect(wrapper.vm.blocks.length).toBe(2);
    expect(wrapper.vm.blocks[1].content).toBe('Test Content');
  });

  it('deletes a block when the delete button is clicked', async () => {
    const wrapper = mount(App);
    wrapper.vm.blocks.push({ id: 1, type: 'text', content: 'Test Content' });
    await wrapper.vm.$nextTick();

    const deleteButton = wrapper.find('.text-red-600');
    await deleteButton.trigger('click');

    expect(wrapper.vm.blocks.length).toBe(0);
  });

  it('saves blocks when the save button is clicked', async () => {
    const wrapper = mount(App, {
      global: {
        components: {
          Draggable,
        },
      },
    });

    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {});

    wrapper.vm.blocks.push({ id: 1, type: 'text', content: 'Test Content' });

    const saveButton = wrapper.find('.bg-green-500');
    await saveButton.trigger('click');

    expect(alertMock).toHaveBeenCalledWith('Saved! Check the console for details.');
    expect(consoleLogMock).toHaveBeenCalledWith('blocks:', [{ id: 1, type: 'text', content: 'Test Content' }]);

    alertMock.mockRestore();
    consoleLogMock.mockRestore();
  });
});
