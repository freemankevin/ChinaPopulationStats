import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// 性能监控
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// 创建根渲染器
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染应用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 性能指标收集
function sendToAnalytics(metric) {
  // 在实际项目中，这里可以发送到分析服务
  console.log('Performance metric:', metric);
}

// 收集Web Vitals指标
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

// 错误边界处理
window.addEventListener('unhandledrejection', event => {
  console.error('未处理的Promise拒绝:', event.reason);
  event.preventDefault();
});

// 应用加载完成通知
console.log('🇨🇳 中国人口统计应用已启动');
console.log('📊 数据可视化系统准备就绪');

// 开发环境下的调试信息
if (process.env.NODE_ENV === 'development') {
  console.log('🔧 开发模式已启用');
  console.log('🚀 React版本:', React.version);
  console.log('⚡ 构建时间:', new Date().toLocaleString('zh-CN'));
}