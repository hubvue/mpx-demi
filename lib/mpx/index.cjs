var Mpx = require('@mpxjs/core')

Object.keys(Mpx).forEach(function(key) {
  exports[key] = Mpx[key]
})

exports.set = function(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

exports.del = function(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}

exports.Mpx = Mpx
exports.Vue = undefined
exports.Vue2 = undefined
exports.isVue2 = false
exports.isVue3 = false
exports.isMpx = true
exports.install = function(){}
