export interface HackerNewsStory {
  id: string
  title: string
  url: string
  discussionUrl: string
  author: string
  points: number
  commentCount: number
  publishedAt: string
  domain: string | null
}
