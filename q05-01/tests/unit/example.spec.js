import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('update value in input',  () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(App, {});
    wrapper.find('input').element.value = "AP";
    await wrapper.find('input').trigger('input');
 
    const span = wrapper.find('#display');
    expect(span.text()).toMatch("AP");
    expect(wrapper.vm.input).toMatch('AP')
  })
})
