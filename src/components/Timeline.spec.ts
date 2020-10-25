import { mount } from '@vue/test-utils'
import Timeline from './Timeline.vue'

describe('Timeline', () => {
  it('renders three time periods', () => {
    const wrapper = mount(Timeline)

    const periods = wrapper.findAll('button')

    expect(periods).toHaveLength(3)
  })

  it('updates timeframe when clicked', async () => {
    const wrapper = mount(Timeline)

    const $today = wrapper.findAll('button')[0]
    const $week = wrapper.findAll('button')[1]
    const $month = wrapper.findAll('button')[2]
    const $pageHeading = wrapper.findAll('h1')[0]

    // Default state
    expect($pageHeading.text()).toContain('Today')

    await $week.trigger('click')
    expect($pageHeading.text()).toContain('This Week')

    await $month.trigger('click')
    expect($pageHeading.text()).toContain('This Month')

    await $today.trigger('click')
    expect($pageHeading.text()).toContain('Today')
  })
})
