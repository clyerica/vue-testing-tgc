import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q01-76', () => {
  it('it should not display hello there at the start', () => {
    const wrapper = shallowMount(App, {})   
    const span = wrapper.find('#hello');
    expect(span.element).toBeUndefined();
  })

  it('it should display hello there when the button is clicked', async () => {
    const wrapper = shallowMount(App, {})   
    const btn = wrapper.find('#btn');
    await btn.trigger('click');
    const span = wrapper.find('#hello');
    expect(span.text()).toMatch('Hello there');
  })

  it('it should hide hello there when the button is clicked again', async () => {
      const wrapper = shallowMount(App, {})   
      const btn = wrapper.find('#btn');
      await btn.trigger('click');
      const span = wrapper.find('#hello');
      expect(span.text()).toMatch('Hello there');
      await btn.trigger('click');
      const span2 = wrapper.find('#goodbye');
      expect(span2.text()).toMatch("Goodbye for now!")
  })
})
