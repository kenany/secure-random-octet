var getRandomValues = require('get-random-values');

/**
 * Generates a cryptographically secure octet.
 *
 * @returns {number} A cryptographically secure octet
 */
function secureRandomOctet() {
  var buf = new Uint8Array(1);
  getRandomValues(buf);
  return buf[0];
}

module.exports = secureRandomOctet;
