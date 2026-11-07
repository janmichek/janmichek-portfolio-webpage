/**
 * Local stylelint plugin that enforces BEM naming for classes, including
 * postcss-nested selectors such as `&__element` and `&--modifier`.
 *
 * stylelint's built-in `selector-class-pattern` only sees class tokens that
 * are literally written in the selector, so it silently skips `&__element`.
 * This rule resolves nested selectors first, then checks every class name.
 */
import resolveNestedSelector from 'postcss-resolve-nested-selector'

const ruleName = 'bem/selector'

const messages = {
  expected: (className, pattern) =>
    `Class "${className}" must match ${pattern} — use block, block__element, block--modifier or block__element--modifier.`,
}

const RULE = (primary, secondary = {}) => {
  const pattern = primary instanceof RegExp ? primary : new RegExp(primary)
  const allowPrefixes = secondary.allowPrefixes ?? ['u-', 'swiper-']

  return (root, result) => {
    root.walkRules(ruleNode => {
      if (isInsideKeyframes(ruleNode)) return

      let resolved
      try {
        resolved = resolveNestedSelector(ruleNode.selector, ruleNode)
      } catch {
        // Selectors this repository never writes (e.g. keyframe steps).
        return
      }

      for (const selector of resolved) {
        for (const className of extractClasses(selector)) {
          if (allowPrefixes.some(prefix => className.startsWith(prefix))) continue
          if (pattern.test(className)) continue

          result.warn(messages.expected(className, pattern), {
            node: ruleNode,
            rule: ruleName,
          })
        }
      }
    })
  }
}

RULE.ruleName = ruleName
RULE.messages = messages
RULE.meta = { url: 'AGENTS.md#css--bem' }

function extractClasses(selector) {
  const classes = []
  const matcher = /\.(-?[A-Za-z_][\w-]*)/g
  let match = matcher.exec(selector)

  while (match !== null) {
    classes.push(match[1])
    match = matcher.exec(selector)
  }

  return classes
}

function isInsideKeyframes(ruleNode) {
  let node = ruleNode.parent

  while (node) {
    if (node.type === 'atrule' && /keyframes$/i.test(node.name)) return true
    node = node.parent
  }

  return false
}

export default {
  ruleName,
  rule: RULE,
}
