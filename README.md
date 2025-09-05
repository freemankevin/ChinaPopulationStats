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


## 安装和运行
```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
```