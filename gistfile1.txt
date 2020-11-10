import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  onwarn: (error) => {
    console.log(error);
  },
  plugins: [
    resolve(),
  ],
};