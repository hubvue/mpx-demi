import * as Mpx from '@mpxjs/core'

var isVue2 = false
var isVue3 = false
var isMpx = true
var Vue2 = undefined
var Vue = undefined


function install() {}

export function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

export function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}

export * from '@mpxjs/core'
export {
  Vue,
  Vue2,
  Mpx,
  isVue2,
  isVue3,
  isMpx,
  install,
}
