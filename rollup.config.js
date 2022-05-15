import pkg from './package.json'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const unitconverter = path.resolve(__dirname, 'src/convert.js')

export default [
  {
    input: 'src/convert.js',
    output: [
      { name: 'convertunits', file: 'dist/es/convert.js', format: 'es' },
      { name: 'convertunits', file: 'dist/cjs/convert.js', format: 'cjs' }
    ],
    external: [unitconverter]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    external: [unitconverter]
  },
  {
    input: 'src/index.js',
    plugins: [terser(), nodeResolve()],
    output: [{
      compact: true,
      name: 'unit-converter',
      file: pkg.browser,
      format: 'umd',
      esModule: false
    }]
  }
]
