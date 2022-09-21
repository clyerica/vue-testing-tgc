import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q01-03', () => {
  it('display oranges at the start',async () => {
    const wrapper = shallowMount(App, {})
  
    const span = wrapper.find('#fruit-display');
    expect(span.text().toLowerCase()).toMatch("oranges");

  })

  it('display apples when button a is clicked', async()=>{
    const wrapper = shallowMount(App, {});
    await wrapper.find('#apples').trigger('click');
    const span = wrapper.find('#fruit-display');
    expect(span.text().toLowerCase()).toMatch("apples");
  })

  it('display apples when button b is clicked', async()=>{
    const wrapper = shallowMount(App, {});
    await wrapper.find('#bananas').trigger('click');
    const span = wrapper.find('#fruit-display');
    expect(span.text().toLowerCase()).toMatch("bananas");
  })

})
