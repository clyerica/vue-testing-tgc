import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('perimeter', async () => {
    const wrapper = mount(App, {});
    const inputs = wrapper.findAll('input');
    inputs.at(0).element.value = "200";
    await inputs.at(0).trigger('input');
    inputs.at(1).element.value = "50";
    await inputs.at(1).trigger('input');
    expect(wrapper.find('#result').text()).toMatch('500')
  })
})
