import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q01-01', () => {
  it('renders hello world when button is clicked',async () => {
    const wrapper = shallowMount(App, {

    })
    await wrapper.find("#btn").trigger('click');
    const span = wrapper.find('#message');
    expect(span.text().toLowerCase()).toMatch("hello world!");

  })
})
