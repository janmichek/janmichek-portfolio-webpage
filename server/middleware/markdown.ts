import type { H3Event } from 'h3'
import { siteMeta, type SiteMeta } from '~/data/siteMeta'
import { resolveSiteVariant } from '~/data/siteVariant'

const ASSET_PREFIXES = ['/_nuxt/', '/api/', '/.well-known/', '/docs/']

function isAssetPath(pathname: string) {
  return ASSET_PREFIXES.some(prefix => pathname.startsWith(prefix))
    || /\.[a-z0-9]+$/i.test(pathname)
}

function parseQuality(params: string[]) {
  const q = params.map(param => param.trim()).find(param => param.startsWith('q='))
  if (!q) return 1
  const value = Number.parseFloat(q.slice(2))
  return Number.isFinite(value) ? value : 0
}

function quality(accept: string, type: string) {
  return accept.split(',').reduce((best, part) => {
    const [mediaType, ...params] = part.trim().toLowerCase().split(';')
    return mediaType === type ? Math.max(best, parseQuality(params)) : best
  }, 0)
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

type MarkdownPage = (meta: SiteMeta) => string

const markdownPages: Record<string, MarkdownPage> = {
  '/': meta => `# Jan Michek

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
`,
  '/gallery': meta => `# Gallery

Visual projects and screenshots.

See more at ${meta.url}/gallery
`,
  '/git-flow': meta => `# Git Flow

Git workflow guide.

${meta.url}/git-flow
`,
  '/karabiner': meta => `# Karabiner

Karabiner configuration.

${meta.url}/karabiner
`,
  '/tech-links': meta => `# Tech Links

Curated tech resources.

${meta.url}/tech-links
`,
  '/webdesign-checklist': meta => `# Webdesign Checklist

Checklist for webdesign.

${meta.url}/webdesign-checklist
`,
}

function renderMarkdown(pathname: string, meta: SiteMeta) {
  const page = markdownPages[pathname]
  return page ? page(meta) : null
}

function getPathname(event: H3Event) {
  return getRequestURL(event).pathname.replace(/\/+$/, '') || '/'
}

function wantsMarkdown(event: H3Event) {
  return prefersMarkdown(getHeader(event, 'accept') || '')
}

export default defineEventHandler(event => {
  const pathname = getPathname(event)

  if (isAssetPath(pathname)) return undefined

  if (!wantsMarkdown(event)) {
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
