import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
export default {
  input: 'src/convert.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  },
  plugins: [terser(), nodeResolve()]
}
