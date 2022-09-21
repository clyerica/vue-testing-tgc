import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('perimeter', async () => {
    const wrapper = mount(App, {});
    const inputs = wrapper.findAll('input');
    inputs.at(0).element.value = "honey lemon";
    await inputs.at(0).trigger('input');
    expect(wrapper.find('#count').text()).toMatch('11')
  })
})
