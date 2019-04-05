import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'MtUtils'
  },
  plugins: [
    commonjs(),
    terser(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
