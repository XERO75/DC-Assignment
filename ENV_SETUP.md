# 环境变量配置说明

## 环境变量文件

项目支持以下环境变量文件：

- `.env.local` - 本地开发环境（优先级最高）
- `.env.development` - 开发环境
- `.env.production` - 生产环境
- `.env.example` - 环境变量示例文件

## 配置说明

### API配置

```bash
# API基础URL
NEXT_PUBLIC_API_BASE_URL=https://frontend-test-api.digitalcreative.cn
```

## 使用方法

### 开发环境
```bash
npm run dev
# 或
npm run dev:test
```

### 生产环境
```bash
npm run build:production
npm run start:production
```

## 环境变量优先级

Next.js 按以下顺序加载环境变量：

1. `.env.local` (总是被加载，除了 test 环境)
2. `.env.development`, `.env.production`, `.env.test` (根据 NODE_ENV)
3. `.env`

## 注意事项

- 以 `NEXT_PUBLIC_` 开头的环境变量会在客户端代码中暴露
- 敏感信息不要使用 `NEXT_PUBLIC_` 前缀
- `.env.local` 文件应该添加到 `.gitignore` 中
