import { posts } from '#site/content'
import MDXContent from '@/components/mdx-components'
import { notFound } from 'next/navigation'

import '@/styles/mdx.css'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    // <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
    <article className="prose prose-a:text-sky-500 dark:prose-invert max-w-none pb-16">
      <h1 className="mb-2">{post.title}</h1>
      {/* <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div> */}
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  )
}
