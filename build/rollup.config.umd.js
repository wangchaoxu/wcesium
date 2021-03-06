import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'wcesium',
    file: 'dist/wcesium.umd.js',
    format: 'umd'
  },
})

export default config
