import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'MtUtils'
  },
  plugins: [commonjs(), terser()]
}
