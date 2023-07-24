export default function presetExtensionCreate(opts: {
  mode: 'production' | 'development'
  debug: boolean
}): {
  overrides: any
  presets: any
  plugins: any
}
