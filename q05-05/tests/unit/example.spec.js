import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('can change the color', async () => {
    const wrapper = mount(App, {});
    const inputs = wrapper.findAll('option');
    await inputs.at(0).setSelected();
    await inputs.at(0).trigger('input');
    expect(wrapper.find('#lights').element.style.backgroundColor).toMatch('red');
    await inputs.at(1).setSelected();
    await inputs.at(1).trigger('input');
    expect(wrapper.find('#lights').element.style.backgroundColor).toMatch('green');
    await inputs.at(2).setSelected();
    await inputs.at(2).trigger('input');
    expect(wrapper.find('#lights').element.style.backgroundColor).toMatch('yellow');
  })
})
