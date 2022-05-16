module.exports = function overrides(opts) {
  if (!opts.typescript) return {}

  return {
    test: /\.tsx?$/,
    plugins: [
      [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}]
    ]
  }
}
