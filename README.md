# DC Assignment

[![Tests](https://img.shields.io/badge/tests-17%20passing-brightgreen)](https://github.com/your-repo/dc-search-app)
[![Coverage](https://img.shields.io/badge/coverage-59.83%25-yellow)](https://github.com/your-repo/dc-search-app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)

A modern search application built with Next.js and React Query for discovering programming tools and frameworks used by DC.

## 🚀 Features

- **Real-time Search**: Instant search with 300ms debounce optimization
- **Smart State Management**: Complete search states (loading, success, error, empty)
- **Keyboard Navigation**: Enter to search, Esc to clear, Tab navigation
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Performance Optimized**: Code splitting, intelligent caching, error boundaries
- **Comprehensive Testing**: 17 unit tests with 59.83% coverage
- **Type Safety**: Full TypeScript support with strict type checking


## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **State Management**: React Query
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd dc-search-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Build & Deploy
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/            # React Components
│   ├── SearchBar/         # Search input
│   ├── Tag/              # Clickable tags
│   ├── ResultItem/       # Search results
│   ├── SearchContainer/   # Main container
│   └── CategoryFilter/   # Category filtering
├── hooks/                # Custom Hooks
├── types/                # TypeScript definitions
├── utils/                # Utility functions
└── test-utils.tsx        # Testing utilities
```

## 🔧 API

**Endpoint**: `https://frontend-test-api.digitalcreative.cn/`

**Parameters**:
- `search`: Search keywords
- `no-throttling`: Enable/disable throttling (true/false)

**Features**:
- 10-second timeout handling
- Automatic retry on failure
- Comprehensive error classification

## 🚀 Deployment

### Vercel [TODO]
```bash
npm install -g vercel
vercel
```

### Docker [TODO]
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### Test Coverage
- **Components**: SearchBar, Tag, ResultItem, SearchContainer
- **Hooks**: useSearch with React Query integration
- **Utils**: API functions and error handling
- **Coverage**: 59.83% statements, 17 tests passing

### Test Structure
```
src/
├── components/
│   └── */__tests__/       # Component tests
├── hooks/
│   └── __tests__/         # Hook tests
└── utils/
    └── __tests__/         # Utility tests
```

### Testing Commands
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📝 Development

### Code Standards
- TypeScript for type safety
- React Hooks best practices
- Component single responsibility
- Reusable component design
- Comprehensive unit testing

### Performance
- React.memo optimization
- useCallback and useMemo
- Minimal API calls
- Optimized resource loading
- Test-driven development

## 📋 TODO

- [ ] Implement CI/CD pipeline with GitHub Actions
  - [ ] Automated test execution
  - [ ] Code quality checks
  - [ ] Automatic deployment to Vercel
  - [ ] Test coverage reporting
- [ ] Animation: might be using GSAP

## 📚 Documentation

- [Testing Guide](./TESTING.md) - Comprehensive testing documentation
- [Environment Setup](./ENV_SETUP.md) - Environment configuration guide
- [CI/CD Setup](./CICD.md) - GitHub Actions workflow configuration
- [Project Summary](./PROJECT_SUMMARY.md) - Detailed project overview

