import test from 'node:test'
import path from 'node:path'
import assert from 'node:assert'
import { fileURLToPath } from 'node:url'

import emeta from './index.js'

const meta = emeta(import.meta)

test('base vars', () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    assert.strictEqual(meta.filename, __filename)
    assert.strictEqual(meta.dirname, __dirname)
    assert.strictEqual(meta.join(import.meta.url), meta.dirname)
    assert.strictEqual(meta.join(import.meta.url), __dirname)
})

test('join stuff', async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    assert.strictEqual(
        meta.join(import.meta.url, 'foo'),
        path.join(__dirname, 'foo')
    )
})

test('join stuff (concat)', async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    assert.strictEqual(
        meta.join(import.meta.url, '..', 'bar'),
        path.join(__dirname, '..', 'bar')
    )
    console.log(
        meta.require
    )
})
