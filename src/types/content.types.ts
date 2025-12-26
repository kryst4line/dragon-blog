// Reading time interface
import type { CollectionEntry } from 'astro:content'

export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

// TOC item interface
export interface TOCItem {
  level: number
  text: string
  id: string
  index: number
}

// PostList component props interface
export interface PostListProps {
  posts: CollectionEntry<'posts'>[]
}

// PostList component props interface
export interface GroupedPostListProps {
  groupedPosts: YearGroupedPosts[]
}

export interface YearGroupedPosts {
  year: number,
  posts: CollectionEntry<'posts'>[]
}

export interface BskyPost {
  uri: string,
  cid: string,
  record: {
    createdAt: Date,
    embed: any,
    text: string,
  },
  embed:
  | {
    $type: 'app.bsky.embed.images#view',
    images: {
      thumb: string,
      fullsize: string,
      alt:string
    }[]
  }
  | {
    $type: 'app.bsky.embed.record#view',
    record: {
      $type: 'app.bsky.embed.record#viewRecord',
      uri: string,
      cid: string,
      value: {
        createdAt: Date,
        text: string,
      }
    }
  },
  bookmarkCount: number,
  replyCount: number,
  repostCount: number,
  quoteCount: number,
}