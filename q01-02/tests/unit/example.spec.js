import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q01-02', () => {
  it('renders sunshine and rainbow when button is clicked',async () => {
    const wrapper = shallowMount(App, {

    })
    await wrapper.find("#btn").trigger('click');
    const span = wrapper.find('#msg');
    expect(span.text().toLowerCase()).toMatch("rainbows and sunshine");

  })
})
