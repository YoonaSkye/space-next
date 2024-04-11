'use client'

import { Post } from '#site/content'
import { fetchPosts } from '@/lib/posts'
import { createContext, useEffect, useState } from 'react'

type ProviderValueType = {
  posts: Post[]
  [key: string]: any
}
export const CommandContext = createContext<ProviderValueType>({
  posts: []
})

export default function CommandProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [providerValue, setProviderValue] = useState<ProviderValueType>({
    posts: []
  })

  const fetch = async () => {
    const posts = await fetchPosts()
    setProviderValue({ posts })
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <CommandContext.Provider value={{ ...providerValue }}>
      {children}
    </CommandContext.Provider>
  )
}
