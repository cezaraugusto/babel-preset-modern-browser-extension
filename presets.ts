export default function presets(opts: any) {
  return [
    [
      // Smart preset that allows you to use the latest JavaScript without needing to
      // micromanage which syntax transforms (and optionally, browser polyfills) are
      // needed by your target environment(s).
      require.resolve('@babel/preset-env'),
      {
        targets: opts.targets,

        // Outputs to console.log the polyfills and transform plugins enabled by preset-env and,
        // if applicable, which one of your targets that needed it.
        debug: opts.debug,

        // Enable transformation of ES module syntax to another module type.
        modules:
          opts.mode === 'production' || opts.mode === 'development'
            ? false
            : 'auto',

        // This option configures how @babel/preset-env handles polyfills.
        // When either the usage or entry options are used, @babel/preset-env will add direct references
        // to core-js modules as bare imports (or requires). This means core-js will be resolved relative
        // to the file itself and needs to be accessible.
        useBuiltIns: false,

        // Toggles enabling support for builtin/feature proposals that have shipped in browsers.
        // If your target environments have native support for a feature proposal, its matching parser syntax
        // plugin is enabled instead of performing any transform.
        shippedProposals: true
      }
    ],
    [
      require.resolve('@babel/preset-react'),
      {
        development: opts.mode === 'development'
      }
    ],
    ...(opts.typescript ? [require.resolve('@babel/preset-typescript')] : [])
  ]
}
