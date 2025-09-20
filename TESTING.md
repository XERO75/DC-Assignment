# Testing Guide

This project includes comprehensive unit tests for components, hooks, and utilities.

## Test Structure

```
src/
├── components/
│   ├── SearchBar/__tests__/
│   ├── Tag/__tests__/
│   ├── ResultItem/__tests__/
│   └── SearchContainer/__tests__/
├── hooks/__tests__/
├── utils/__tests__/
└── test-utils.tsx
```

## Running Tests

### All Tests
```bash
npm test
```

### Watch Mode
```bash
npm run test:watch
```

### Coverage Report
```bash
npm run test:coverage
```

## Test Categories

### 1. Component Tests
- **SearchBar**: Input handling, keyboard events, loading states
- **Tag**: Variants, click handling, disabled states
- **ResultItem**: Rendering, click handling, URL opening
- **SearchContainer**: Integration testing

### 2. Hook Tests
- **useSearch**: State management, debouncing, API integration

### 3. Utility Tests
- **API functions**: Error handling, parameter passing, response processing

## Test Coverage

The project aims for 70% coverage across:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## Mocking

### External Dependencies
- Next.js router and navigation
- Next.js Image component
- Axios HTTP client
- React Query

### Browser APIs
- window.open
- IntersectionObserver

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Realistic Data**: Use mock data that resembles real API responses
3. **Test Edge Cases**: Include error states, empty states, and boundary conditions
4. **Keep Tests Simple**: Each test should focus on one specific behavior
5. **Use Descriptive Names**: Test names should clearly describe what is being tested

## Example Test Structure

```typescript
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup before each test
  });

  it('should do something specific', () => {
    // Arrange
    // Act
    // Assert
  });
});
```
