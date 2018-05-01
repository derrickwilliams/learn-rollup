// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    scss(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};