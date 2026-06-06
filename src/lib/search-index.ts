import { getAllPosts } from '@/lib/data-utils'

export type SearchEntry = {
  title: string
  description: string
  tags: string[]
  href: string
}

export async function getSearchIndex(): Promise<SearchEntry[]> {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags ?? [],
    href: `/blog/${post.id}`,
  }))
}

export function searchEntries(
  entries: SearchEntry[],
  query: string,
  limit = 8,
): SearchEntry[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []

  const scored = entries
    .map((entry) => {
      const title = entry.title.toLowerCase()
      const description = entry.description.toLowerCase()
      const tags = entry.tags.join(' ').toLowerCase()
      const haystack = `${title} ${description} ${tags}`

      const matches = terms.every(
        (term) =>
          title.includes(term) ||
          description.includes(term) ||
          tags.includes(term) ||
          haystack.includes(term),
      )

      if (!matches) return null

      let score = 0
      for (const term of terms) {
        if (title.includes(term)) score += 4
        if (tags.includes(term)) score += 2
        if (description.includes(term)) score += 1
      }

      return { entry, score }
    })
    .filter(Boolean) as { entry: SearchEntry; score: number }[]

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry)
}
