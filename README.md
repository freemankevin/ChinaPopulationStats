# ChinaPopulationStats

## 项目概述
这是一个基于React的中国全国人口统计可视化项目，展示城市人口和农村人口数据。

## 项目结构
```
ChinaPopulationStats/
├── public/
│   ├── index.html          # 主HTML文件
│   └── favicon.ico         # 网站图标
├── src/
│   ├── components/         # 组件目录
│   │   ├── App.jsx        # 主应用组件
│   │   ├── Header.jsx     # 页面头部组件
│   │   ├── StatsOverview.jsx    # 统计概览组件
│   │   ├── SearchSection.jsx    # 搜索区域组件
│   │   ├── FilterSection.jsx    # 筛选区域组件
│   │   ├── ChartSection.jsx     # 图表展示组件
│   │   └── ChartControls.jsx    # 图表控制组件
│   ├── data/
│   │   └── cityData.js    # 城市人口数据
│   ├── styles/
│   │   ├── App.css        # 主样式文件
│   │   └── Header.css     # 头部样式文件
│   ├── index.js           # 应用入口文件
│   └── index.css          # 全局样式文件
├── package.json           # 项目配置文件
├── README.md             # 项目说明
└── LICENSE               # 许可证文件
```

## 技术栈
- **React** - 前端框架
- **Chart.js/Recharts** - 数据可视化
- **CSS3** - 样式设计
- **JavaScript ES6+** - 编程语言

## 功能特性
- 📊 多种图表展示（柱状图、线图、饼图等）
- 🔍 智能搜索功能
- 🎛️ 灵活的数据筛选
- 📱 响应式设计
- 📈 实时数据更新
- 🌈 现代化UI设计

## 安装和运行
```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
```

## 项目亮点
1. **数据完整性** - 包含全国主要城市人口数据
2. **交互体验** - 流畅的用户交互和动画效果
3. **可视化效果** - 多样化的图表展示形式
4. **响应式设计** - 适配各种设备屏幕尺寸
5. **性能优化** - 组件懒加载和数据缓存