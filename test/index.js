const test = require('tape');
const isFunction = require('lodash.isfunction');
const every = require('lodash.every');
const isNumber = require('lodash.isnumber');

const secureRandomOctet = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(secureRandomOctet));
});

test('returns an octet', (t) => {
  t.plan(1);
  const array = new Array(1000);
  t.ok(every(array, () => {
    const octet = secureRandomOctet();
    return isNumber(octet) && octet >= 0 && octet <= 255;
  }));
});
