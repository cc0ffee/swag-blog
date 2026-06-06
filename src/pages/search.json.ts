import { getSearchIndex } from '@/lib/search-index'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const index = await getSearchIndex()

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}
