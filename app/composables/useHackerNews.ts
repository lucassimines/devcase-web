import type { HackerNewsStory } from '~/types/hackerNews'

const HN_API = 'https://hn.algolia.com/api/v1/search'

interface HnAlgoliaHit {
  objectID: string
  title: string
  url: string | null
  author: string
  points: number | null
  num_comments: number | null
  created_at: string
}

interface HnAlgoliaResponse {
  hits: HnAlgoliaHit[]
}

function getDomain(url: string | null) {
  if (!url) return null

  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}

function toStory(hit: HnAlgoliaHit): HackerNewsStory {
  const discussionUrl = `https://news.ycombinator.com/item?id=${hit.objectID}`

  return {
    id: hit.objectID,
    title: hit.title,
    url: hit.url || discussionUrl,
    discussionUrl,
    author: hit.author,
    points: hit.points ?? 0,
    commentCount: hit.num_comments ?? 0,
    publishedAt: hit.created_at,
    domain: getDomain(hit.url)
  }
}

export function useHackerNews() {
  return useLazyFetch(HN_API, {
    query: {
      tags: 'front_page',
      hitsPerPage: 10
    },
    key: 'hacker-news-front-page',
    transform: (response: HnAlgoliaResponse) =>
      response.hits.filter((hit) => hit.title).map(toStory)
  })
}
