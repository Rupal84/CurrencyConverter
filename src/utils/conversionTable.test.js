import {convert} from './conversionTable';
describe('ConversionTable utility', () => {
  it('works correctly for 1:1 conversion', () => {
    expect(convert('AUD', 'AUD', 100)).toBe(100);
  });

  it('works correctly for direct conversion', () => {
    expect(convert('AUD', 'USD', 100)).toBe(83.71);
  });

  it('works correctly for invert conversion', () => {
    expect(convert('USD', 'AUD', 100).toFixed(2)).toBe('119.46');
  });

  it('works correctly for cross over conversion', () => {
    expect(convert('AUD', 'DKK', 100).toFixed(2)).toBe('505.76');
  });
})

