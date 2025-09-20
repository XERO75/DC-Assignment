// Simple API test that focuses on basic functionality
describe('API Utils', () => {
  it('should have searchTools function', () => {
    const { searchTools } = require('../api');
    expect(typeof searchTools).toBe('function');
  });

  it('should have searchToolsWithError function', () => {
    const { searchToolsWithError } = require('../api');
    expect(typeof searchToolsWithError).toBe('function');
  });
});