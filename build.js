const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['scripts/index.ts', 'styles/index.css'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: 'build',
})
