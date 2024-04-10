import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  // return date.toLocaleDateString('en-US', {
  //   month: 'long',
  //   day: 'numeric',
  //   year: 'numeric'
  // })
  return date.toISOString().substring(0, 10)
}

export function getDateMap(posts: Array<{ date: string }>) {
  const dateMap: { [key: string]: any } = {}

  posts.reduce((_, post) => {
    const dateYear = post.date.split('-').shift() as string
    if (dateMap[dateYear]) {
      dateMap[dateYear].push(post)
    } else {
      dateMap[dateYear] = [post]
    }
    return post
  })
  return dateMap
}
