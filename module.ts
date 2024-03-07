import presets from './presets'
import plugins from './plugins'
import overrides from './overrides'

export default function presetExtensionCreate(opts: any) {
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
