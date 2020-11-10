'use strict';

var a = require('zzzzz');
var b = require('zzzzz/bar.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var a__default = /*#__PURE__*/_interopDefaultLegacy(a);
var b__default = /*#__PURE__*/_interopDefaultLegacy(b);

var baz = "baz";

var c = 'exported-foo nested c';

// a and c should both be 'exported-foo nested c'

var index = { a: a__default['default'], b: b__default['default'], c, baz };

module.exports = index;
