// Lets type-aware linting resolve `.vue` imports (Nuxt's tsconfig has no SFC shim).
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}
