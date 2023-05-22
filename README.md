# queryzz.js

> umma - a library for working with query. Get, set, format your query as you want.

[![npm version](https://badge.fury.io/js/umma.svg)](https://www.npmjs.com/package/umma)
[![](https://data.jsdelivr.com/v1/package/npm/umma/badge)](https://www.jsdelivr.com/package/npm/umma)

## Features

- Full TypeScript support
- Support all platforms
- Easy to use

## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)
  - [formatQuery](#formatQuery)
  - [getQuery](#getQuery)
  - [setQuery](#setQuery)

## Quick start

### Install

We support all platforms.

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i umma
```

#### Include with &lt;script&gt;

Download and install with `script`.

```html
<script src="umma.js"></script>
```

##### CDN

Recommended for learning purposes, you can use the latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/umma/dist/umma.js"></script>
```

Recommended for production for avoiding unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/umma@1.0.0/dist/umma.js"></script>
```

### Initialization

#### ES6

queryzz as an ES6 module.

```js
import { LCDClient } from 'umma';

const ummaClient = new LCDClient({
    "apiURL" : "http://localhost:1317",
    "rpcURL" : "http://localhost:26657",
    "prefix" : "umma"
  }
);
```

#### Node

umma as a Node.js module

```js
const { LCDClient } = require('umma');


const ummaClient = new LCDClient({
    "apiURL" : "http://localhost:1317",
    "rpcURL" : "http://localhost:26657",
    "prefix" : "umma"
  }
);

```

#### Browser

Exports a global variable called `umma`. Use it like this

```html
<script>
  LCDClient()
</script>
```

#### AMD

umma as an AMD module. Use with Require.js, System.js, and so on.

```js
requirejs(['umma'], function(umma) {
  LCDClient()
});
```

## Methods

### formatQuery

Format query object to string.


#### Params
- `query`
  - Type: `IQuery`
  - Description: Query variable to format.
- `encode`
  - Type: `Boolean`
  - Description: Need to encode special characters. Default: true.

#### Returns
- `string`

#### Example
```JS
const query = { value: 'test', field: ['hi', 'hello'] };
formatQuery(query)
// => value=test&field=hi&field=hello

const query = { value: 'https://google.com' }
formatQuery(query, true)
// => value=https%3A%2F%2Fgoogle.com

const query = { value: 'https://google.com' }
formatQuery(query, false)
// => value=https://google.com
```
<a href="https://github.com/BrooonS/queryzz/blob/master/src/lib/formatQuery.ts" target="_blank">Source code</a>
* * *
### getQuery

Get query from url.


#### Params
- `options`
  - Type: `String,Options`
  - Description: Can be null and link or query and object with params.
- `options.link`
  - Type: `String`
  - Description: Link or query to parse. Default: window.location.search.
- `options.arrays`
  - Type: `Array`
  - Description: Fields that must be arrays. Default: [].
- `options.parse`
  - Type: `Boolean`
  - Description: Need to parse types. Default: true.

#### Returns
- `Query`

#### Example
```JS
// URL: /?value=test&field=hi&field=hello
getQuery()
// => { value: 'test', field: ['hi', 'hello'] }

getQuery('value=test&field=hi&field=hello')
// => { value: 'test', field: ['hi', 'hello'] }

// URL: /?value=test&field=hi
getQuery({ arrays: ['value'] })
// => { value: ['test'], field: 'hi' }

// URL: /?value=test&field=hi&value=123&test=true
getQuery()
// => { value: ['test', 123], field: 'hi', test: true }

getQuery({ link: 'value=test&field=hi&value=123&test=true', parse: false })
// => { value: ['test', '123'], field: 'hi', test: 'true' }
```
<a href="https://github.com/BrooonS/queryzz/blob/master/src/lib/getQuery.ts" target="_blank">Source code</a>
* * *
### setQuery

Set query to url.


#### Params
- `query`
  - Type: `Query`
  - Description: Object to parse in url.
- `params`
  - Type: `Object`
  - Description: Object with params.
- `params.saveOld`
  - Type: `Boolean`
  - Description: Does save old query. Default: false.
- `params.saveHash`
  - Type: `Boolean`
  - Description: Does save hash. Default: true.
- `params.saveEmpty`
  - Type: `Boolean`
  - Description: Does save empty fields. Default: false.
- `params.replaceState`
  - Type: `Boolean`
  - Description: Doesn&#x27;t save history in browser. Default: false.


#### Example
```JS
setQuery({ test: 'value' })
// => /?test=value

setQuery({ test: ['12', '34'] })
// => /?test=12&test=34

// /?test=value&field=test
setQuery({ test: 'field' }, { saveOld: true })
// => /?test=value&test=field&field=test

// /?test=value#someHash
setQuery({ test: 'value' }, { saveHash: false })
// => /?test=value
```
<a href="https://github.com/umma-chain/umma-js/blob/master/src/lib/index.ts" target="_blank">Source code</a>
* * *

&copy; Valery Strelets