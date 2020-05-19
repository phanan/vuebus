import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'index.ts',
  output: {
    file: 'dist/vuebus.min.js',
    format: 'esm'
  },
  plugins: [
    typescript(),
    terser()
  ],
  external: ['vue'],
  context: 'this'
}
