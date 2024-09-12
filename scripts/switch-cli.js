const { switchVersion } = require('./utils')

const version = process.argv[2]
const entry = process.argv[3] || 'vue'

if (entry === 'mpx') {
  switchVersion('mpx')
  console.log(`[v-demi] Switched for Mpx`)
} if (version === '2.7') {
  switchVersion('vue', 2.7, entry)
  console.log(`[v-demi] Switched for Vue 2.7 (entry: "${entry}")`)
} else if (version === '2') {
  switchVersion('v', 2, entry)
  console.log(`[vue-demi] Switched for Vue 2 (entry: "${entry}")`)
} else if (version === '3') {
  switchVersion('vue', 3, entry)
  console.log(`[v-demi] Switched for Vue 3 (entry: "${entry}")`)
} else {
  console.warn(`[v-demi] expecting version "2" or "2.7" or "3" but got "${version}"`)
  process.exit(1)
}
