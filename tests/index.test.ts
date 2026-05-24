import { secureRandomOctet } from 'secure-random-octet';
import { describe, expect, it } from 'vitest';

describe('secureRandomOctet', () => {
  it('is a function', () => {
    expect(typeof secureRandomOctet).toBe('function');
  });

  it('returns an octet', () => {
    for (let i = 0; i < 1000; i++) {
      const octet = secureRandomOctet();
      expect(octet).toBeGreaterThanOrEqual(0);
      expect(octet).toBeLessThanOrEqual(255);
      expect(Number.isInteger(octet)).toBe(true);
    }
  });
});
