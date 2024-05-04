import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external:["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    resolve(),
    commonjs(),
    css({ output: 'bundle.css' }),
  ],
};