# Environment Variables Configuration

## Environment Files

The project supports the following environment variable files:

- `.env.local` - Local development environment (highest priority)
- `.env.development` - Development environment
- `.env.production` - Production environment
- `.env.example` - Environment variables example file

## Configuration

### API Configuration

```bash
# API Base URL
NEXT_PUBLIC_API_BASE_URL=https://frontend-test-api.digitalcreative.cn
```

## Usage

### Development Environment
```bash
npm run dev
# or
npm run dev:test
```

### Production Environment
```bash
npm run build:production
npm run start:production
```

## Environment Variables Priority

Next.js loads environment variables in the following order:

1. `.env.local` (always loaded, except in test environment)
2. `.env.development`, `.env.production`, `.env.test` (based on NODE_ENV)
3. `.env`

## Important Notes

- Environment variables starting with `NEXT_PUBLIC_` will be exposed in client-side code
- Do not use `NEXT_PUBLIC_` prefix for sensitive information
- `.env.local` file should be added to `.gitignore`
