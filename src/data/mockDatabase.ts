import moment from 'moment'

export const basePost = {
  id: 1,
  title: 'Base Post',
  markdown: 'Content',
  html: '<p>Content</p>',
  authorId: 1,
  created: moment()
}

export const todayPost = {
  ...basePost,
  id: 2,
  title: 'Today Post'
}

export const weekPost = {
  ...basePost,
  id: 3,
  title: 'This Week Post',
  created: moment().subtract(2, 'days')
}

export const monthPost = {
  ...basePost,
  id: 4,
  title: 'This Month Post',
  created: moment().subtract(2, 'weeks')
}

export const posts = [todayPost, weekPost, monthPost]
