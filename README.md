# emeta

A micro esm meta helper for `import.meta` data.

Requires Node 12.17.0 or Node 14.0.0.

Starting in [Node 20.11.0](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V20.md#20.11.0) and [Node 21.2.0](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V21.md#21.2.0) this is now built in: [`import.meta.dirname`](https://nodejs.org/api/esm.html#importmetadirname) / [`import.meta.filename`](https://nodejs.org/api/esm.html#importmetafilename)

## Install

```
npm install emeta
```

## Usage

```js
import emeta from 'emeta'

const meta = emeta(import.meta)
console.log(meta.filename)
```

or

```js
import emeta from 'emeta'

const { dirname, filename, join, require } = emeta(import.meta)

// OR
const meta = emeta(import.meta)

// same as CommonJS __dirname
console.log(meta.dirname)

// same as CommonJS __filename
console.log(meta.filename)

// same as CommonJS path.join(__dirname, 'pages')
console.log(join(import.meta.url, 'pages'))

// same as CommonJS path.join(__dirname, '..', 'pages')
console.log(join(import.meta.url, '..', 'pages'))

// same as CommonJS require
console.log(require('lodash'))
console.log(require.resolve('lodash'))
```

## License

MIT
