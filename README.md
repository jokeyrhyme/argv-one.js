# argv-one

cross-platform helper for `process.argv[1]`

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
