import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('perimeter', async () => {
    const wrapper = mount(App, {});
    const inputs = wrapper.findAll('input');
    inputs.at(0).element.value = "";
    await inputs.at(0).trigger('input');
    expect(wrapper.find('span').text()).toMatch('Please type in something')
    inputs.at(0).element.value = "123456";
    await inputs.at(0).trigger('input');
    expect(wrapper.find('span').text()).toMatch('Too short');
    inputs.at(0).element.value = "1234567";
    await inputs.at(0).trigger('input');
    expect(wrapper.find('span').text()).toMatch('OK')
  })
})
