import { mount } from '@vue/test-utils'
import Timeline from './Timeline.vue'

describe('Timeline', () => {
  it('renders three time periods', () => {
    const wrapper = mount(Timeline)

    const periods = wrapper.findAll('button')

    expect(periods).toHaveLength(3)
  })
})
