const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['src/index.tsx', 'src/styles/index.css'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'build',
})
