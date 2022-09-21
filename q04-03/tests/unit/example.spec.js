import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import TrafficLight from '@/TrafficLight.vue'

describe('App.vue', () => {
  it('renders traffic light', async () => {
    const wrapper = mount(App)  
    const trafficLight = wrapper.findComponent(TrafficLight);
    const buttons = wrapper.findAll("button");

    await buttons.at(0).trigger('click');
    expect(trafficLight.element.style.backgroundColor).toBe('green');
    
    await buttons.at(1).trigger('click');
    expect(trafficLight.element.style.backgroundColor).toBe('yellow');

    await buttons.at(2).trigger('click');
    expect(trafficLight.element.style.backgroundColor).toBe('red');
  })
})
