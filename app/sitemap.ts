import { getWritingPosts } from 'app/writing/utils'
import { getTILPosts } from 'app/TIL/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let posts = getWritingPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let tils = getTILPosts().map((post) => ({
    url: `${baseUrl}/TIL/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/writing', '/TIL'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts, ...tils]
}
