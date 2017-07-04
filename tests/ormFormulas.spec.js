/* eslint no-restricted-syntax: 0 */
import ormFormulas from '../src/client/ORMFormulas';


describe('One Rep Max Formulas', () => {
  // beforeAll(async () => {

  // });

  // afterAll(() => {

  // });

  describe('Epley', () => {
    it('Testing Correctness', async () => {
      const { epley } = ormFormulas;
      expect(epley(6, 50)).toBe(60);
      expect(epley(12, 135)).toBe(189);
      expect(epley(1, 225)).toBe(232);
      expect(epley(3, 215)).toBe(236);
      expect(epley(3, 175)).toBe(192);
      expect(epley(5, 205)).toBe(239);
    });

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
});
