/* eslint no-restricted-syntax: 0 */
import ormFormulas from '../src/client/ORMFormulas';

describe('One Rep Max Formulas', () => {
  describe('epley', () => {
    it('Testing Correctness', async () => {
      const { epley } = ormFormulas;
      expect(epley(6, 50)).toBe(60);
      expect(epley(12, 135)).toBe(189);
      expect(epley(1, 225)).toBe(232);
      expect(epley(3, 215)).toBe(236);
      expect(epley(3, 175)).toBe(192);
      expect(epley(5, 205)).toBe(239);
    });

    // prettier-ignore
    it('Testing Bad Input', async () => {
      const { epley } = ormFormulas;
      expect(() => { epley(0, 175); }).toThrow();
      expect(() => { epley(-1, 175); }).toThrow();
      expect(() => { epley(3, 0); }).toThrow();
      expect(() => { epley(3, -1); }).toThrow();
      expect(() => { epley(-2, -1); }).toThrow();
      expect(() => { epley(0, 0); }).toThrow();
    });
  });

  describe('wathan', () => {
    it('Testing Correctness', async () => {
      const { wathan } = ormFormulas;
      expect(wathan(6, 50)).toBe(60);
      expect(wathan(2, 200)).toBe(210);
      expect(wathan(10, 135)).toBe(182);
      expect(wathan(1, 225)).toBe(225);
      expect(wathan(3, 215)).toBe(234);
      expect(wathan(3, 175)).toBe(191);
      expect(wathan(5, 205)).toBe(239);
    });

    // prettier-ignore
    it('Testing Bad Input', async () => {
      const { wathan } = ormFormulas;
      expect(() => { wathan(0, 175); }).toThrow();
      expect(() => { wathan(-1, 175); }).toThrow();
      expect(() => { wathan(3, 0); }).toThrow();
      expect(() => { wathan(3, -1); }).toThrow();
      expect(() => { wathan(-2, -1); }).toThrow();
      expect(() => { wathan(0, 0); }).toThrow();
    });
  });
});
