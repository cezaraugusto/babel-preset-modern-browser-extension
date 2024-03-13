export default function overrides(opts: any) {
  if (!opts.typescript) return {}

  return {
    test: /\.tsx?$/,
    plugins: [
      [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}]
    ]
  }
}
