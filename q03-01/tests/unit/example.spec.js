import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('HelloWorld.vue', () => {
  it('should increase text size', async () => {
    const wrapper = shallowMount(App)
    const btn = wrapper.find("#btn");
    await btn.trigger('click');
    const msg = wrapper.find('#msg');
    expect(msg.element.style.fontSize).toBe("36px")
  })
})
