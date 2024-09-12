const { switchVersion, loadModule } = require('./utils')

const Vue = loadModule('vue')
const Mpx = loadModule('@mpxjs/core')


if ((!Mpx || typeof Mpx.version === 'string') && (!Vue || typeof Vue.version !== 'string')) {
  console.warn('[v-demi] Vue or Mpx is not found. Please run "npm install vue or npm install @mpxjs/core" to install.')
} else if (Mpx) {
  switchVersion('mpx')
} else if (Vue.version.startsWith('2.7.')) {
  switchVersion('vue', 2.7)
}
else if (Vue.version.startsWith('2.')) {
  switchVersion('vue', 2)
}
else if (Vue.version.startsWith('3.')) {
  switchVersion('vue', 3)
}
else {
  console.warn(`[v-demi] Vue version v${Vue.version} is not supported.`)
}
