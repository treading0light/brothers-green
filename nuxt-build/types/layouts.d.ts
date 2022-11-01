import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/coding_projects/brothers-green/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}