export default defineEventHandler(event => {
  const url = getRequestURL(event)
  const pathname = url.pathname

  // Only handle page routes (not assets, api, well-known, sitemap, etc.)
  const isAsset
    = pathname.startsWith('/_nuxt/')
      || pathname.startsWith('/api/')
      || pathname.startsWith('/.well-known/')
      || pathname.endsWith('.xml')
      || pathname.endsWith('.txt')
      || pathname.endsWith('.webp')
      || pathname.endsWith('.png')
      || pathname.endsWith('.svg')
      || pathname.endsWith('.json')
      || pathname.endsWith('.css')
      || pathname.endsWith('.js')
      || pathname.endsWith('.ico')

  if (isAsset) {
    return
  }

  const accept = getHeader(event, 'accept') || ''

  // Ensure HTML responses also carry Vary so CDN caches markdown/html separately.
  // routeRules sets this for known pages, this is a safety net for any page route.
  if (!accept.includes('text/markdown')) {
    // Only set Vary for page-like routes (no file extension)
    if (!pathname.includes('.')) {
      setHeader(event, 'Vary', 'Accept')
    }
    return
  }

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
