import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should change color', async () => {
    const wrapper = shallowMount(App)
    const buttons = wrapper.findAll("button");
    const div = wrapper.findAll('div').at(1);

    await buttons.at(0).trigger('click');
    expect(div.element.style.backgroundColor).toBe("red")
        
    await buttons.at(1).trigger('click');
    expect(div.element.style.backgroundColor).toBe("green");

    await buttons.at(2).trigger('click');
    expect(div.element.style.backgroundColor).toBe("blue")

    await buttons.at(1).trigger('click');
    expect(div.element.style.backgroundColor).toBe("green");
  })
})

