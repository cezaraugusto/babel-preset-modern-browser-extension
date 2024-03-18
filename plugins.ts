export default function plugins(opts: any) {
  return [
    // Add support for legacy decorators.
    // See https://babeljs.io/docs/en/babel-plugin-proposal-decorators
    [require.resolve('@babel/plugin-proposal-decorators'), {version: 'legacy'}],

    // Babel plugin that adds React import declaration if file contains JSX tags.
    // See https://www.npmjs.com/package/babel-plugin-react-require
    require.resolve('babel-plugin-react-require'),

    // Remove React propTypes from the production build, as they are only used in development.
    // See https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types
    ...(opts.mode === 'production'
      ? [require.resolve('babel-plugin-transform-react-remove-prop-types')]
      : [])
  ]
}
