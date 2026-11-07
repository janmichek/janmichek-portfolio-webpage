import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  readonly,
  ref,
  toRef,
  toRefs,
  watch,
  watchEffect,
} from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const vueApi = {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  readonly,
  ref,
  toRef,
  toRefs,
  watch,
  watchEffect,
}

function define(name: string, value: unknown) {
  if (!(name in globalThis)) Reflect.set(globalThis, name, value)
}

for (const [name, value] of Object.entries(vueApi)) define(name, value)

const nuxtApi: Record<string, unknown> = {
  useRuntimeConfig: () => ({ public: { siteVariant: 'web3' } }),
  useSiteContent,
  useHead: () => {},
  useSeoMeta: () => {},
  definePageMeta: () => {},
  useRoute: () => ({ params: {} }),
  useRouter: () => ({ push: () => {} }),
  navigateTo: () => {},
  defineEventHandler: (handler: unknown) => handler,
}

for (const [name, value] of Object.entries(nuxtApi)) define(name, value)
