import { Post, posts } from '#site/content'

export function sortPosts(posts: Array<Post>) {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * 获取所有博客文章
 *
 */
export function getPostsList() {
  return sortPosts(posts)
}

/**
 * 获取所有博客文章的slug Param (文件名)
 *
 */
export function getPostsSlug() {
  return getPostsList().map((post) => post.slugAsParams)
}

/**
 * 获取所有博客文章的meta数据
 */
export function getPostsListWithMeta() {
  return getPostsList().map((post) => {
    const { title, description, date, slugAsParams } = post
    return { title, description, date, slugAsParams }
  })
}

const isNodeEnv = typeof window === 'undefined'
const base = isNodeEnv
  ? process.env.FETCH_URL
  : process.env.NEXT_PUBLIC_FETCH_URL

type FetchPostReturnType<T> = T extends true ? Post[] : string[]

/**
 * 前端请求文章(元数据/文件名)列表
 * @param {boolean} withMeta default true boolean
 * @returns {string} 博客文章列表
 */
export async function fetchPosts(withMeta = true) {
  const res = await fetch(`${base}/${withMeta ? 'postmetas' : 'posts'}`)
  return res.json()
}
