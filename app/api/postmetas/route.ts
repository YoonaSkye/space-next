import { getPostsListWithMeta } from '@/lib/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = getPostsListWithMeta()

  return NextResponse.json(res)
}
