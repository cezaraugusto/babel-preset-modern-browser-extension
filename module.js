const presets = require('./presets')
const plugins = require('./plugins')
const overrides = require('./overrides')

module.exports = function presetExtensionCreate(opts) {
  const defaultOpts = {
    mode: opts.mode || 'development',
    targets: opts.targets || [
      'last 1 chrome version',
      'last 1 edge version',
      'last 1 firefox version',
      'last 1 opera version',
      'last 1 safari version'
    ],
    debug: opts.debug || false,
    typescript: opts.typescript || false
  }

  return {
    presets: presets(defaultOpts),
    plugins: plugins(defaultOpts),
    overrides: overrides(defaultOpts)
  }
}
