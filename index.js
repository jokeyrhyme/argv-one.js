'use strict';

var path = require('path');

var pkgUp = require('pkg-up');
var readPkg = require('read-pkg');

function getOptions (opts) {
  opts = opts || {};
  opts.argv = opts.argv || process.argv || [];
  if (!Array.isArray(opts.argv) || opts.argv.length < 2) {
    throw new TypeError('argument should be process.argv or similar');
  }
  return opts;
}

function assertPkg (pkg) {
  if (!pkg || typeof pkg !== 'object') {
    throw new TypeError('package.json missing or failed to parse to JSON Object');
  }
  if (!pkg.bin || typeof pkg.bin !== 'object') {
    throw new TypeError('package.json missing "bin" Object property');
  }
}

module.exports = function argvOneSync (opts) {
  var cmd;
  var pkg, pkgPath;
  var bin, binPath;

  opts = getOptions(opts);
  cmd = opts.argv[1];

  if (!path.isAbsolute(cmd)) {
    return cmd;
  }

  pkgPath = opts.pkgPath || pkgUp.sync(cmd);
  pkg = opts.pkg || readPkg.sync(pkgPath);

  assertPkg(pkg);

  for (bin in pkg.bin) {
    if (pkg.bin.hasOwnProperty(bin)) {
      binPath = path.normalize(path.join(path.dirname(pkgPath), pkg.bin[bin]));
      if (binPath === path.normalize(cmd)) {
        return bin;
      }
    }
  }

  return cmd;
};
