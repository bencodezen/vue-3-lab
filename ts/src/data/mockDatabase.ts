import moment from 'moment'
import { Post, Timeframe } from '../types'

export const basePost: Post = {
  id: 1,
  title: 'Base Post',
  markdown: 'Content',
  html: '<p>Content</p>',
  authorId: 1,
  created: moment()
}

export const todayPost: Post = {
  ...basePost,
  id: 2,
  title: 'Today Post'
}

export const weekPost: Post = {
  ...basePost,
  id: 3,
  title: 'This Week Post',
  created: moment().subtract(2, 'days')
}

export const monthPost: Post = {
  ...basePost,
  id: 4,
  title: 'This Month Post',
  created: moment().subtract(2, 'weeks')
}

export const posts: Post[] = [todayPost, weekPost, monthPost]
