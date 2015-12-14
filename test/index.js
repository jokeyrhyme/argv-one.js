'use strict';

var childProcess = require('child_process');

var test = require('ava');

var argvOne = require('..');

test.before('npm link', function () {
  childProcess.execSync('npm link');
});

test.after('npm unlink', function () {
  childProcess.execSync('npm unlink');
});

test('exports a function', function (t) {
  t.is(typeof argvOne, 'function');
});

test('correct output', function (t) {
  var stdout = childProcess.execSync('argv-one');
  t.is(stdout.toString().trim(), 'argv-one');
});
