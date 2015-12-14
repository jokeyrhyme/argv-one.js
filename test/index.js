'use strict';

var test = require('ava');

var argvOne = require('..');

test('exports a function', function (t) {
  t.is(typeof argvOne, 'function');
});
