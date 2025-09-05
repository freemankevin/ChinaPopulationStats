// components/Legend.jsx - 图例说明组件
import React from 'react';
import '../styles/Legend.css';

const Legend = () => {
  const populationLegends = [
    {
      color: '#FF1744',
      label: '超大城市',
      description: '≥2000万人',
      icon: '🌆',
      examples: ['重庆', '上海', '北京']
    },
    {
      color: '#FF6B6B',
      label: '特大城市',
      description: '1000-2000万人',
      icon: '🏙️',
      examples: ['成都', '广州', '深圳', '武汉']
    },
    {
      color: '#4ECDC4',
      label: '大城市',
      description: '500-1000万人',
      icon: '🏢',
      examples: ['西安', '苏州', '郑州', '杭州']
    },
    {
      color: '#45B7D1',
      label: '中等城市I',
      description: '300-500万人',
      icon: '🏘️',
      examples: ['无锡', '福州', '厦门']
    },
    {
      color: '#96CEB4',
      label: '中等城市II',
      description: '100-300万人',
      icon: '🏠',
      examples: ['扬州', '镇江', '连云港']
    },
    {
      color: '#FFEAA7',
      label: '小城市',
      description: '<100万人',
      icon: '🏡',
      examples: ['威海', '日照', '泰安']
    }
  ];

  const tierLegends = [
    {
      tier: 'tier1',
      name: '一线城市',
      color: '#FF1744',
      icon: '⭐',
      characteristics: ['经济发达', '人口集中', '国际化程度高'],
      count: 4
    },
    {
      tier: 'newTier1',
      name: '新一线城市',
      color: '#FF6B6B',
      icon: '🌟',
      characteristics: ['发展潜力大', '区域中心', '人才集聚'],
      count: 15
    },
    {
      tier: 'tier2',
      name: '二线城市',
      color: '#4ECDC4',
      icon: '✨',
      characteristics: ['经济活跃', '宜居宜业', '发展均衡'],
      count: 30
    },
    {
      tier: 'tier3',
      name: '三线城市',
      color: '#45B7D1',
      icon: '💫',
      characteristics: ['地方中心', '生活成本适中', '发展稳定'],
      count: 70
    },
    {
      tier: 'tier4',
      name: '四五线城市',
      color: '#96CEB4',
      icon: '⚡',
      characteristics: ['生态宜居', '节奏舒缓', '特色发展'],
      count: 180
    }
  ];

  const chartTypeLegends = [
    {
      type: 'bar',
      name: '柱状图',
      icon: '📊',
      description: '对比城市人口规模，直观展示排名差异',
      bestFor: '城市间人口对比'
    },
    {
      type: 'line',
      name: '折线图',
      icon: '📈',
      description: '展示城市人口变化趋势和发展轨迹',
      bestFor: '趋势分析'
    },
    {
      type: 'scatter',
      name: '散点图',
      icon: '🔴',
      description: '分析人口分布规律，发现数据关联',
      bestFor: '相关性分析'
    },
    {
      type: 'pie',
      name: '饼图',
      icon: '🥧',
      description: '显示不同等级城市的数量占比',
      bestFor: '比例关系'
    },
    {
      type: 'histogram',
      name: '直方图',
      icon: '📶',
      description: '统计各人口区间的城市分布情况',
      bestFor: '区间分布'
    },
    {
      type: 'urbanRural',
      name: '城乡对比',
      icon: '🏘️',
      description: '对比城镇与农村人口分布结构',
      bestFor: '结构分析'
    }
  ];

  return (
    <div className="legend">
      <div className="legend-header">
        <h3 className="legend-title">
          <span className="title-icon">🎨</span>
          图例与数据说明
        </h3>
        <p className="legend-subtitle">
          帮助您更好地理解和使用数据可视化图表
        </p>
      </div>

      <div className="legend-sections">
        {/* 人口规模图例 */}
        <div className="legend-section">
          <div className="section-header">
            <h4 className="section-title">
              <span className="section-icon">👥</span>
              人口规模分类
            </h4>
          </div>
          <div className="legend-grid population-legend">
            {populationLegends.map((item, index) => (
              <div key={index} className="legend-item population-item">
                <div className="item-header">
                  <div 
                    className="color-indicator"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-label">{item.label}</span>
                </div>
                <div className="item-description">{item.description}</div>
                <div className="item-examples">
                  {item.examples.map((city, idx) => (
                    <span key={idx} className="example-city">{city}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 城市等级图例 */}
        <div className="legend-section">
          <div className="section-header">
            <h4 className="section-title">
              <span className="section-icon">🏆</span>
              城市等级分类
            </h4>
          </div>
          <div className="legend-grid tier-legend">
            {tierLegends.map((tier, index) => (
              <div key={index} className="legend-item tier-item">
                <div className="tier-header">
                  <span className="tier-icon">{tier.icon}</span>
                  <div className="tier-info">
                    <span className="tier-name">{tier.name}</span>
                    <span className="tier-count">{tier.count}个城市</span>
                  </div>
                </div>
                <div className="tier-characteristics">
                  {tier.characteristics.map((char, idx) => (
                    <span key={idx} className="characteristic-tag">
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 图表类型图例 */}
        <div className="legend-section">
          <div className="section-header">
            <h4 className="section-title">
              <span className="section-icon">📊</span>
              图表类型说明
            </h4>
          </div>
          <div className="legend-grid chart-legend">
            {chartTypeLegends.map((chart, index) => (
              <div key={index} className="legend-item chart-item">
                <div className="chart-header">
                  <span className="chart-icon">{chart.icon}</span>
                  <span className="chart-name">{chart.name}</span>
                </div>
                <div className="chart-description">{chart.description}</div>
                <div className="chart-best-for">
                  <span className="best-for-label">适用于：</span>
                  <span className="best-for-text">{chart.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 数据质量说明 */}
        <div className="legend-section data-quality">
          <div className="section-header">
            <h4 className="section-title">
              <span className="section-icon">📋</span>
              数据质量与说明
            </h4>
          </div>
          <div className="quality-content">
            <div className="quality-metrics">
              <div className="quality-item">
                <div className="quality-score">98.5%</div>
                <div className="quality-label">数据完整度</div>
              </div>
              <div className="quality-item">
                <div className="quality-score">A+</div>
                <div className="quality-label">数据质量等级</div>
              </div>
              <div className="quality-item">
                <div className="quality-score">2020</div>
                <div className="quality-label">普查年份</div>
              </div>
            </div>
            <div className="quality-notes">
              <div className="note-item">
                <span className="note-icon">ℹ️</span>
                <span>数据来源于第七次全国人口普查，具有权威性和准确性</span>
              </div>
              <div className="note-item">
                <span className="note-icon">⚠️</span>
                <span>部分城市人口数据可能包含流动人口，以常住人口为准</span>
              </div>
              <div className="note-item">
                <span className="note-icon">🔄</span>
                <span>数据定期更新，确保信息的时效性和准确性</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;