import * as Mpx from '@mpxjs/core'
declare const isVue2: boolean
declare const isVue3: boolean
declare const isMpx: boolean
declare const Vue2: any
declare const install: (vue?: any) => void
/** 
 * @deprecated To avoid bringing in all the tree-shakable modules, this API has been deprecated. Use `Vue2` or named exports instead.
 * Refer to https://github.com/vueuse/vue-demi/issues/41
 */
declare const V: any

declare const M: typeof Mpx

export function set<T>(target: any, key: any, val: T): T
export function del(target: any, key: any): void

export * from '@mpxjs/core'
export {
  V as Vue,
  M as Mpx,
  Vue2,
  isVue2,
  isVue3,
  isMpx,
  install,
}
