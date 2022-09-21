import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q02-01', () => {
  it('display should not display apples and oranges at start',async () => {
    const wrapper = shallowMount(App, {})    
    const span = wrapper.find('#apple-display');
    expect(span.element).toBeUndefined();
    const orange = wrapper.find("#orange-display");
    expect(orange.element).toBeUndefined();

  })

  it('display display apples when button is clicked',async () => {
     const wrapper = shallowMount(App, {});
     await wrapper.find('#apple-btn').trigger('click');
     const span = wrapper.find('#apple-display');
     expect(span.text()).toMatch('Apple');
  })
  
  it('display display oranges when button is clicked',async () => {
    const wrapper = shallowMount(App, {});
    await wrapper.find('#orange-btn').trigger('click');
    const span = wrapper.find('#orange-display');
    expect(span.text()).toMatch('Orange');
 })

})
