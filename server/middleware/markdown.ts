export default defineEventHandler((event) => {
  const accept = getHeader(event, 'accept') || ''
  // Check if client prefers markdown (RFC 7231 content negotiation)
  if (!accept.includes('text/markdown')) {
    return
  }

  const url = getRequestURL(event)
  const pathname = url.pathname

  // Only handle page routes (not assets, api, well-known, sitemap, etc.)
  if (
    pathname.startsWith('/_nuxt/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/.well-known/') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.json')
  ) {
    return
  }

  // Normalize pathname for markdown generation
  const isHome = pathname === '/' || pathname === '/index.html'

  // Simple markdown generation for known routes
  const routes: Record<string, string> = {
    '/': `# Jan Michek

Personal portfolio of Jan Michek — Web3, Solidity, frontend & fullstack engineer.

## Pages

- [Gallery](/gallery) — Visual projects
- [Git Flow](/git-flow) — Git workflow guide
- [Karabiner](/karabiner) — Karabiner config
- [Tech Links](/tech-links) — Curated tech resources
- [Webdesign Checklist](/webdesign-checklist) — Webdesign checklist

## Contact

- Email: jan@janmichek.cz
- Website: https://janmichek.cz

> Served as markdown via content negotiation (Accept: text/markdown).
`,
    '/gallery': `# Gallery

Visual projects and screenshots.

See more at https://janmichek.cz/gallery
`,
    '/git-flow': `# Git Flow

Git workflow guide.

https://janmichek.cz/git-flow
`,
    '/karabiner': `# Karabiner

Karabiner configuration.

https://janmichek.cz/karabiner
`,
    '/tech-links': `# Tech Links

Curated tech resources.

https://janmichek.cz/tech-links
`,
    '/webdesign-checklist': `# Webdesign Checklist

Checklist for webdesign.

https://janmichek.cz/webdesign-checklist
`,
  }

  const markdown = routes[pathname] || routes['/'] + `\n\n> Requested: ${pathname}\n`

  const tokens = Math.ceil(markdown.length / 4).toString()

  setHeader(event, 'Content-Type', 'text/markdown; charset=utf-8')
  setHeader(event, 'x-markdown-tokens', tokens)
  setHeader(event, 'Vary', 'Accept')
  // Cache separately for markdown vs html
  setHeader(event, 'Cache-Control', 'public, max-age=0, must-revalidate')

  return markdown
})
