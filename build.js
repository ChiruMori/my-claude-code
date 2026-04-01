require('./preload')

await Bun.build({
  entrypoints: ['./src/entrypoints/cli.tsx'],
  define: {
    MACRO: JSON.stringify(globalThis.MACRO),
  },
  // target: 'bun-darwin-arm64',
  target: 'bun',
  outdir: './bin',
  compile: true,
 })

 console.log('build done')


