# argv-one [![AppVeyor Status](https://img.shields.io/appveyor/ci/jokeyrhyme/argv-one-js/master.svg)](https://ci.appveyor.com/project/jokeyrhyme/argv-one-js) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/argv-one.js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/argv-one.js)

cross-platform helper for `process.argv[1]`

[![npm module](https://img.shields.io/npm/v/argv-one.svg)](https://www.npmjs.com/package/argv-one)
[![Build Status](https://travis-ci.org/jokeyrhyme/argv-one.js.png)](https://travis-ci.org/jokeyrhyme/argv-one.js)
[![Build status](https://ci.appveyor.com/api/projects/status/wg71aegp9tmw75ne/branch/master?svg=true)](https://ci.appveyor.com/project/jokeyrhyme/argv-one-js/branch/master)


## Why?

I've recently started writing CLI tools for Windows with Node.js,
and I've noticed that `process.argv[1]` doesn't have the same value there.


## Installation

```sh
npm install --save argv-one
```


## Usage

- package.json:

```json
{
  "bin": {
    "my-cli": "bin/index.js"
  }
}
```

- bin/index.js:

```js
#!/usr/bin/env node

var cmd = require('argv-one')({ argv: process.argv });

console.log(process.argv[1]);
// Windows: => "C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\my-cli\\bin\\index.js"
// OS X or Linux: => "my-cli"

console.log(cmd);
// Windows, OSX or Linux: => "my-cli"
```


## API

### argvOne({ argv?: String[], pkg?: Object, pkgPath?: String }) => String

If there is nothing wrong with your CLIs package.json or arguments,
but `process.argv[1]` could not be reduced to the executable's base name,
then `proecess.argv[1]` is returned as-is.
