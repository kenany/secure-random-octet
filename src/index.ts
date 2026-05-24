import getRandomValues from 'get-random-values';

/** Generates a cryptographically secure octet. */
export function secureRandomOctet(): number {
  const buf = new Uint8Array(1);
  getRandomValues(buf);
  return buf[0];
}
