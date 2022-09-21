import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import config from '../../../config';

describe('HelloWorld.vue',  () => {
  it('renders props.msg when passed', async() => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    console.log(config);
  })
})
