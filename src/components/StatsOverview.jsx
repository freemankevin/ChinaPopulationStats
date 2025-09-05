// components/StatsOverview.jsx - 统计概览组件
import React from 'react';
import '../styles/StatsOverview.css';

const StatsOverview = ({ stats }) => {
  const statsData = [
    {
      number: '14.12亿',
      label: '全国总人口',
      icon: '🌍',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      number: '9.14亿',
      label: '城镇人口',
      icon: '🏙️',
      color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
    },
    {
      number: '4.98亿',
      label: '农村人口',
      icon: '🏞️',
      color: 'linear-gradient(135deg, #96CEB4 0%, #FFEAA7 100%)'
    },
    {
      number: '64.7%',
      label: '城镇化率',
      icon: '📈',
      color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)'
    },
    {
      number: stats.totalCities.toString(),
      label: '统计城市数',
      icon: '🏢',
      color: 'linear-gradient(135deg, #45B7D1 0%, #96CEB4 100%)'
    },
    {
      number: `${stats.totalPopulation}亿`,
      label: '统计人口数',
      icon: '👥',
      color: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
    },
    {
      number: stats.megaCities.toString(),
      label: '千万人口城市',
      icon: '🌆',
      color: 'linear-gradient(135deg, #FF8A80 0%, #FF6B6B 100%)'
    },
    {
      number: `${stats.avgPopulation}万`,
      label: '平均人口规模',
      icon: '⚖️',
      color: 'linear-gradient(135deg, #A8E6CF 0%, #7FCDCD 100%)'
    }
  ];

  return (
    <div className="stats-overview">
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div 
            key={index}
            className="stat-card"
            style={{ background: stat.color }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            <div className="stat-decoration">
              <div className="decoration-dot"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-dot"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;