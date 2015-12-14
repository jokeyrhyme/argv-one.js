'use strict';

var childProcess = require('child_process');

var test = require('ava');

test.before('npm link', function () {
  childProcess.execSync('npm link');
});

test.after('npm unlink', function () {
  childProcess.execSync('npm unlink');
});

test('execute this package', function (t) {
  var stdout = childProcess.execSync('argv-one');
  t.is(stdout.toString().trim(), 'argv-one');
});
