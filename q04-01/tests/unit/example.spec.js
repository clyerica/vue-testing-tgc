import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import MessageBox from '@/components/MessageBox.vue'

describe('App.vue', () => {
  it('renders prop', () => {
    const wrapper = mount(App)  
    const msg = wrapper.findComponent(MessageBox);
    expect(msg.find('div').text().toLowerCase()).toMatch("mary has a little lamb");
  })
})
