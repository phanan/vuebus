import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'index',
  output: {
    file: 'dist/vuebus.min.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  external: ['vue']
}
