import { mount } from '@vue/test-utils'
import AverageNumber from '@/AverageNumber.vue'

describe('AverageNumber.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(AverageNumber,{
      propsData: { num1: 7, num2: 5 }
    })  
    const averageNumber = wrapper.findComponent(AverageNumber);
    expect(averageNumber.find('div').text().toLowerCase()).toMatch("6")
  })
})
