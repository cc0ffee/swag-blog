import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'CC00FFEE',
  description:
    'CC00FFEE 的个人博客 — 记录代码、生活与思考。',
  href: 'https://astro-erudite.vercel.app',
  author: 'cc00ffee',
  locale: 'zh-CN',
  featuredPostCount: 10,
  postsPerPage: 3,
}

export const HOME_NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: '首页',
  },
  {
    href: '/blog',
    label: '友情链接',
  },
  {
    href: '/about',
    label: '关于',
  },
]

export const HOME_SOCIAL_LINKS: SocialLink[] = [
  {
    href: '/rss.xml',
    label: 'RSS',
  },
  {
    href: 'https://github.com/cc00ffee',
    label: 'GitHub',
  },
  {
    href: 'https://t.me/cc00ffee',
    label: 'Telegram',
  },
  {
    href: 'https://space.bilibili.com/',
    label: 'Bilibili',
  },
]

export const HOME_MUSIC = {
  title: '音乐',
  track: 'RE Aoharu (4th PV) - Nor',
  albumArt: '/static/avatar.svg',
  current: '02:20',
  duration: '02:32',
  progress: 92,
}

export const SIDEBAR_TAGLINE = 'Learning For Fun'

export const SIDEBAR_MENU = [
  { href: '/', label: '首页', numeral: 'I' },
  { href: '/about', label: '联系', numeral: 'II' },
  { href: '/rss.xml', label: '订阅', numeral: 'III' },
  { href: '/blog', label: '管理', numeral: 'IV' },
]

export const SIDEBAR_STATS = {
  points: 1000,
  rank: 9999,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/jktrn',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/enscry',
    label: 'Twitter',
  },
  {
    href: 'mailto:jason@enscribe.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
