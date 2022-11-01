import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/coding_projects/brothers-green/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}