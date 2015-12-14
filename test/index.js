'use strict';

var pkgUp = require('pkg-up');
var readPkg = require('read-pkg');
var test = require('ava');

var argvOne = require('..');

var pkgPath = pkgUp.sync(__dirname);
var pkg = readPkg.sync(pkgPath);

test('exports a function', function (t) {
  t.is(typeof argvOne, 'function');
});

test('unresolved process.argv[1] returned as-is', function (t) {
  [
    'bin/argv-one',
    '/usr/bin/argv-one'
  ].forEach(function (arg) {
    var result = argvOne({
      argv: ['node', arg],
      pkg: pkg,
      pkgPath: pkgPath
    });
    t.is(result, arg);
  });
});

test('npm install -g (Windows) returns "argv-one"', function (t) {
  var result = argvOne({
    argv: ['node', 'C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\argv-one\\bin\\index.js'],
    pkg: pkg,
    pkgPath: 'C:\\Users\\user\\AppData\\Roaming\\npm\\node_modules\\argv-one\\package.json'
  });
  t.is(result, 'argv-one');
});

test('npm install -g (*nix) returns "argv-one"', function (t) {
  var result = argvOne({
    argv: ['node', 'argv-one'],
    pkg: pkg,
    pkgPath: pkgPath
  });
  t.is(result, 'argv-one');
});
