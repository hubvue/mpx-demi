import * as Vue from 'vue'

var isVue2 = false
var isVue3 = true
var isMpx = false
var Vue2 = undefined
var Mpx = undefined

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

export * from 'vue'
export {
  Vue,
  Vue2,
  Mpx,
  isMpx,
  isVue2,
  isVue3,
  install,
}
