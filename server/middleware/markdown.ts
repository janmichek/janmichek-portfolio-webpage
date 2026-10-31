import type { H3Event } from 'h3'
import { siteMeta, type SiteMeta } from '~/data/siteMeta'
import { resolveSiteVariant } from '~/data/siteVariant'

function isAssetPath(pathname: string) {
  return pathname.startsWith('/_nuxt/')
    || pathname.startsWith('/api/')
    || pathname.startsWith('/.well-known/')
    || pathname.startsWith('/docs/')
    || /\.[a-z0-9]+$/i.test(pathname)
}

function quality(accept: string, type: string) {
  let best = 0
  for (const part of accept.split(',')) {
    const [mediaType, ...params] = part.trim().toLowerCase().split(';')
    if (mediaType !== type) continue
    const q = params.map(param => param.trim()).find(param => param.startsWith('q='))
    const value = q ? Number.parseFloat(q.slice(2)) : 1
    best = Math.max(best, Number.isFinite(value) ? value : 0)
  }
  return best
}

function prefersMarkdown(accept: string) {
  const markdown = quality(accept, 'text/markdown')
  if (markdown <= 0) return false
  return markdown >= quality(accept, 'text/html')
}

function addVary(event: H3Event) {
  const existing = getHeader(event, 'vary')
  if (!existing) {
    setHeader(event, 'Vary', 'Accept')
  } else if (!/\baccept\b/i.test(existing)) {
    setHeader(event, 'Vary', `${existing}, Accept`)
  }
}

function renderMarkdown(pathname: string, meta: SiteMeta) {
  switch (pathname) {
    case '/':
      return `# Jan Michek

${meta.variant === 'portfolio'
  ? 'Personal portfolio of Jan Michek - senior frontend engineer focused on UI, UX and product.'
  : 'Personal portfolio of Jan Michek - Web3, Solidity, frontend & fullstack engineer.'}

## Pages

- [Gallery](${meta.url}/gallery) - Visual projects
- [Git Flow](${meta.url}/git-flow) - Git workflow guide
- [Karabiner](${meta.url}/karabiner) - Karabiner config
- [Tech Links](${meta.url}/tech-links) - Curated tech resources
- [Webdesign Checklist](${meta.url}/webdesign-checklist) - Webdesign checklist

## Contact

- Email: jan@janmichek.cz
- Website: ${meta.url}

> Served as markdown via content negotiation (Accept: text/markdown).
`
    case '/gallery':
      return `# Gallery

Visual projects and screenshots.

See more at ${meta.url}/gallery
`
    case '/git-flow':
      return `# Git Flow

Git workflow guide.

${meta.url}/git-flow
`
    case '/karabiner':
      return `# Karabiner

Karabiner configuration.

${meta.url}/karabiner
`
    case '/tech-links':
      return `# Tech Links

Curated tech resources.

${meta.url}/tech-links
`
    case '/webdesign-checklist':
      return `# Webdesign Checklist

Checklist for webdesign.

${meta.url}/webdesign-checklist
`
    default:
      return null
  }
}

export default defineEventHandler(event => {
  const pathname = getRequestURL(event).pathname.replace(/\/+$/, '') || '/'

  if (isAssetPath(pathname)) return undefined

  const accept = getHeader(event, 'accept') || ''
  if (!prefersMarkdown(accept)) {
    addVary(event)
    return undefined
  }

  const config = useRuntimeConfig()
  const markdown = renderMarkdown(pathname, siteMeta[resolveSiteVariant(config.public.siteVariant)])

  addVary(event)
  setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=0, must-revalidate')

  if (!markdown) {
    setResponseStatus(event, 404)
    return '# Not found\n'
  }

  setHeader(event, 'x-markdown-tokens', Math.ceil(markdown.length / 4).toString())
  return markdown
})
