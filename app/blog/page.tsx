import { getPostsListWithMeta } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const posts = getPostsListWithMeta()
  const dateList = Array.from(
    new Set(posts.map((post) => post.date.split('-').shift() as string))
  )

  return (
    <>
      {dateList.map((date) => (
        <div key={date} className="mb-12">
          <h1 className="text-3xl mb-6">{date}</h1>
          <ul>
            {posts.map((post) => {
              const { title, slugAsParams, date: postDate } = post
              if (postDate.includes(date)) {
                return (
                  <li
                    key={slugAsParams}
                    className="flex items-center justify-between max-w-none mb-3"
                  >
                    <Link
                      href={`/blog/${slugAsParams}`}
                      className="hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
                    >
                      {title}
                    </Link>
                    <span className="text-sm text-neutral-300">{postDate}</span>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      ))}
    </>
  )
}
