var secureRandomOctet = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var every = require('lodash.every');
var isNumber = require('lodash.isnumber');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(secureRandomOctet));
});

test('returns an octet', function(t) {
  t.plan(1);
  var array = new Array(1000);
  t.ok(every(array, function() {
    var octet = secureRandomOctet();
    return isNumber(octet) && octet >= 0 && octet <= 255;
  }));
});
