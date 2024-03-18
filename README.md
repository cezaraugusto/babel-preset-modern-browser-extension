[npm-image]: https://img.shields.io/npm/v/babel-preset-modern-browser-extension.svg
[npm-url]: https://npmjs.org/package/babel-preset-modern-browser-extension

# babel-preset-modern-browser-extension [![npm][npm-image]][npm-url]

> Babel preset used for creating browser extensions. Supports React and TypeScript.

## Usage

```sh
npm i babel-preset-modern-browser-extension --save-dev
```

In your `.babelrc` (or any other Babel config file) file, add:

```json
{
  "presets": ["modern-browser-extension"]
}
```

## Includes

```js
"dependencies": {
  "@babel/plugin-proposal-decorators"
  "@babel/plugin-syntax-dynamic-import"
  "@babel/preset-env"
  "@babel/preset-react"
  "@babel/preset-typescript"
  "babel-plugin-react-require"
  "babel-plugin-transform-react-remove-prop-types"
}
```

## Options

### `mode`

> The bundle mode.

`"production" | "development"`, defaults to `"development"`

```json
{
  "presets": [["modern-extensions", {"mode": "development"}]]
}
```

### `targets`

> Target used by Babel. Relies on [`browserlist`](https://github.com/browserslist/browserslist)

`{ [string]: number | string }`, defaults to `last 1 version` of each browser.

```json
{
  "presets": [
    [
      "modern-extensions",
      {
        "targets": {
          "chrome": "last 1 version",
          "edge": "last 1 version",
          "firefox": "last 1 version",
          "opera": "last 1 version",
          "safari": "last 1 version",
          "samsung": "last 1 version"
        }
      }
    ]
  ]
}
```

### `debug`

> Enable Babel debug mode.

`boolean`, defaults to `false`

```json5
{
  presets: [['modern-extensions', {debug: false}]]
}
```

### `typescript`

> Whether or not to use TypeScript.

`boolean`, defaults to `false`

```json5
{
  presets: [['modern-extensions', {typescript: false}]]
}
```

### License

MIT (c) Cezar Augusto.
