import { getPostsSlug } from '@/lib/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = getPostsSlug()
  return NextResponse.json(res)
}
