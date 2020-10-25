import { Moment } from 'moment'

export type Timeframe = 'Today' | 'This Week' | 'This Month'

export interface Post {
  id: number
  title: string
  markdown: string
  html: string
  authorId: number
  created: Moment
}
