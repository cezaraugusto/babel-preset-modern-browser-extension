export default function plugins(opts: any) {
  return [
    // A plugin that enables the re-use of Babel's injected helper code to save on codesize.
    // See https://babeljs.io/docs/en/babel-plugin-transform-runtime
    [
      '@babel/plugin-transform-runtime',
      {
        // Assume that all polyfillable APIs will be provided by the user.
        // Otherwise the corejs option needs to be specified.
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true
      }
    ],

    // Add support for legacy decorators.
    // See https://babeljs.io/docs/en/babel-plugin-proposal-decorators
    // ['@babel/plugin-proposal-decorators', {version: 'legacy'}],

    // Babel plugin for transforming class properties
    // See https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
    '@babel/plugin-proposal-class-properties',

    // Babel plugin that adds React import declaration if file contains JSX tags.
    // See https://www.npmjs.com/package/babel-plugin-react-require
    'babel-plugin-react-require'

    // // Babel plugin for transforming this const [value, setValue] = useState(null)
    // // to this const {0: value, 1: setValue} = useState(null);
    // // See https://www.npmjs.com/package/babel-plugin-optimize-hook-destructuring
    // 'babel-plugin-optimize-hook-destructuring',

    // // Remove React propTypes from the production build, as they are only used in development.
    // // See https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types
    // ...(opts.mode === 'production'
    //   ? [
    //       'babel-plugin-transform-react-remove-prop-types',
    //       {
    //         removeImport: true
    //       }
    //     ]
    //   : [])
  ]
}
