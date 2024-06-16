import emeta from './index.js'

const meta = emeta(import.meta)

console.log('dirname of example.js:     ' + meta.dirname)
console.log('filename of example.js:    ' + meta.filename)
console.log('join dirname and "page":   ' + meta.join(import.meta.url, 'page'))
