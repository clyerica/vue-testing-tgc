import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should increase or decrease text size', async () => {
    const wrapper = shallowMount(App)
    const buttons = wrapper.findAll("button");
    const div = wrapper.find('span');

    await buttons.at(0).trigger('click');
    expect(div.element.style.fontSize).toBe("17px")

    await buttons.at(1).trigger('click');
    expect(div.element.style.fontSize).toBe("12px")

    await buttons.at(1).trigger('click');
    expect(div.element.style.fontSize).toBe("7px")
  })
})
