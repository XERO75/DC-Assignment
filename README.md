# DC 编程工具搜索应用

这是一个基于 Next.js 和 React Query 构建的搜索应用，用于搜索 DC 使用的编程工具和框架。

## 🚀 功能特性

### 核心功能
- **实时搜索**: 支持实时搜索编程工具
- **智能防抖**: 300ms 防抖优化，减少不必要的 API 调用
- **状态管理**: 完整的搜索状态管理（加载、成功、错误、空结果）
- **键盘支持**: 支持 Enter 搜索、Esc 清除、Tab 导航

### 搜索状态
1. **空闲状态**: 显示推荐标签和搜索提示
2. **加载状态**: 显示加载动画和提示文字
3. **成功状态**: 显示搜索结果列表
4. **空结果状态**: 显示未找到结果提示和推荐标签
5. **错误状态**: 显示错误信息和重试按钮

### 组件架构
- **SearchBar**: 搜索输入框组件
- **Tag**: 可点击标签组件
- **ResultItem**: 搜索结果项组件
- **SearchContainer**: 主容器组件

## 🛠 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **状态管理**: React Query (@tanstack/react-query)
- **样式**: Tailwind CSS
- **HTTP 客户端**: Axios
- **构建工具**: Next.js 内置

## 📦 安装和运行

### 环境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发环境运行
```bash
npm run dev
# 或
yarn dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 启动生产服务器
```bash
npm start
# 或
yarn start
```

## 🏗 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   ├── SearchBar/         # 搜索框组件
│   ├── Tag/              # 标签组件
│   ├── ResultItem/       # 结果项组件
│   └── SearchContainer/   # 主容器组件
├── hooks/                # 自定义 Hooks
│   └── useSearch.ts      # 搜索逻辑 Hook
├── types/                # TypeScript 类型定义
│   └── index.ts
└── utils/                # 工具函数
    └── api.ts            # API 调用函数
```

## 🎨 设计特点

### 视觉设计
- **Figma设计还原**: 完全按照Figma设计稿实现，包括颜色、字体、间距等
- **现代化UI**: 采用圆角设计、阴影效果和渐变色彩
- **品牌色彩**: 主色调为紫色(#6833FF)，辅助色为灰色系
- **Poppins字体**: 使用Poppins字体家族，提供更好的可读性

### 用户体验
- **响应式设计**: 支持桌面和移动设备
- **无障碍访问**: 支持键盘导航和屏幕阅读器
- **加载状态**: 清晰的加载和错误状态反馈
- **动画效果**: 平滑的过渡动画
- **直观交互**: 清晰的视觉层次和交互反馈

### 性能优化
- **代码分割**: 组件级别的代码分割
- **缓存策略**: React Query 智能缓存
- **防抖处理**: 减少不必要的 API 调用
- **错误边界**: 优雅的错误处理

## 🔧 API 集成

### 搜索 API
- **端点**: `https://frontend-test-api.digitalcreative.cn/`
- **参数**: 
  - `search`: 搜索关键词
  - `no-throttling`: 是否启用节流（true/false）

### 错误处理
- **超时处理**: 10秒请求超时
- **重试机制**: 失败时自动重试1次
- **错误分类**: 网络错误、服务器错误、超时错误

## 🧪 测试功能

### 测试不同状态
1. **正常搜索**: 输入关键词进行搜索
2. **错误状态**: 修改 API 参数 `no-throttling=false` 来模拟错误
3. **空结果**: 搜索不存在的关键词
4. **网络错误**: 断开网络连接测试

### 键盘控制测试
- **Enter**: 执行搜索
- **Esc**: 清除搜索内容
- **Tab**: 在可交互元素间导航

## 🚀 部署

### Vercel 部署
```bash
npm install -g vercel
vercel
```

### Docker 部署
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

## 📝 开发说明

### 代码规范
- 使用 TypeScript 进行类型安全
- 遵循 React Hooks 最佳实践
- 组件单一职责原则
- 可复用组件设计

### 性能考虑
- 使用 React.memo 优化重渲染
- 合理使用 useCallback 和 useMemo
- 避免不必要的 API 调用
- 优化图片和资源加载

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目仅用于 DC 前端测试，请勿用于商业用途。

## 📞 联系方式

如有问题，请联系：
- 邮箱: hello@digitalcreative.asia
- GitHub: [dcasia/frontend-test](https://github.com/dcasia/frontend-test)

---

**注意**: 这是一个测试项目，展示了现代 React 应用的最佳实践和组件化架构。