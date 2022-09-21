import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('test-q02-04.vue', () => {
  it('it should show 3 after 3 presses', async () => {
    const wrapper = shallowMount(App, {})   
    const btn = wrapper.find('#increment');
    await btn.trigger('click');
    await btn.trigger('click');
    await btn.trigger('click');
    const counter = wrapper.find('#counter');
    expect(counter.text()).toMatch("3");
  })

  it('it should show 10 after 13 presses', async () => {
    const wrapper = shallowMount(App, {})   
    const btn = wrapper.find('#increment');
    for (let i=0; i < 13; i++) {
      await btn.trigger('click');
    }
    const counter = wrapper.find('#counter');
    expect(counter.text()).toMatch("10");
  })


  it('it should show -3 after 3 decrement', async () => {
    const wrapper = shallowMount(App, {})   
    const btn = wrapper.find('#decrement');
    await btn.trigger('click');
    await btn.trigger('click');
    await btn.trigger('click');
    const counter = wrapper.find('#counter');
    expect(counter.text()).toMatch("-3");
  })

  it('it should show -10 after 13 decrement', async () => {
    const wrapper = shallowMount(App, {})   
    const btn = wrapper.find('#decrement');
    for (let i =0; i < 13; i++) {
      await btn.trigger('click');
    }
    
    const counter = wrapper.find('#counter');
    expect(counter.text()).toMatch("-10");
  })
})


