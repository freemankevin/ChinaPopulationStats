// components/ChartControls.jsx - 图表控制组件
import React from 'react';
import '../styles/ChartControls.css';

const ChartControls = ({ activeChart, onChartChange }) => {
  const chartTypes = [
    {
      type: 'bar',
      label: '柱状图',
      icon: '📊',
      description: '直观对比城市人口规模'
    },
    {
      type: 'line',
      label: '折线图',
      icon: '📈',
      description: '展示人口变化趋势'
    },
    {
      type: 'scatter',
      label: '散点图',
      icon: '🔴',
      description: '分析人口分布规律'
    },
    {
      type: 'pie',
      label: '分布饼图',
      icon: '🥧',
      description: '各等级城市占比'
    },
    {
      type: 'histogram',
      label: '区间统计',
      icon: '📶',
      description: '人口规模区间分布'
    },
    {
      type: 'urbanRural',
      label: '城乡分布',
      icon: '🏘️',
      description: '城镇与农村人口对比'
    }
  ];

  return (
    <div className="chart-controls">
      <div className="controls-header">
        <h3 className="controls-title">
          <span className="title-icon">📊</span>
          图表类型选择
        </h3>
        <div className="controls-subtitle">
          选择不同的图表类型来分析人口数据
        </div>
      </div>
      
      <div className="controls-grid">
        {chartTypes.map(chart => (
          <button
            key={chart.type}
            className={`control-btn ${activeChart === chart.type ? 'active' : ''}`}
            onClick={() => onChartChange(chart.type)}
          >
            <div className="btn-icon">{chart.icon}</div>
            <div className="btn-content">
              <div className="btn-label">{chart.label}</div>
              <div className="btn-description">{chart.description}</div>
            </div>
            <div className="btn-indicator"></div>
          </button>
        ))}
      </div>
      
      <div className="controls-footer">
        <div className="footer-tip">
          💡 提示：可以结合筛选条件使用不同图表类型获得更深入的洞察
        </div>
      </div>
    </div>
  );
};

export default ChartControls;