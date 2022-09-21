import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(App)
    const buttons = wrapper.findAll("button");
    const div = wrapper.findAll('div').at(1);

    await buttons.at(0).trigger('click');
    expect(div.element.style.height).toBe(60);
    
    await buttons.at(1).trigger('click');
    expect(div.element.style.width).toBe(60);

    await buttons.at(2).trigger('click');
    expect(div.element.style.backgroundColor).toBe('red');

    await buttons.at(3).trigger('click');
    expect(div.element.style.backgroundColor).toBe('blue');
    
    await buttons.at(4).trigger('click');
    expect(div.element.style.backgroundColor).toBe('gray');
    expect(div.element.style.width).toBe(50);
    expect(div.element.style.width).toBe(50);        

  })
})
