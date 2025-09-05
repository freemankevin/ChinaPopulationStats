// components/PopulationBreakdown.jsx - 人口分布详情组件
import React from 'react';
import '../styles/PopulationBreakdown.css';

const PopulationBreakdown = () => {
  // 模拟人口分布数据
  const ageDistribution = [
    { range: '0-14岁', percentage: 17.95, population: 2.53, color: '#FF6B6B' },
    { range: '15-59岁', percentage: 63.35, population: 8.94, color: '#4ECDC4' },
    { range: '60-64岁', percentage: 5.44, population: 0.77, color: '#45B7D1' },
    { range: '65岁以上', percentage: 13.50, population: 1.91, color: '#96CEB4' }
  ];

  const genderDistribution = [
    { type: '男性', percentage: 51.24, population: 7.23, color: '#667eea' },
    { type: '女性', percentage: 48.76, population: 6.89, color: '#764ba2' }
  ];

  const educationLevels = [
    { level: '大学及以上', percentage: 15.83, icon: '🎓' },
    { level: '高中/中专', percentage: 20.22, icon: '📚' },
    { level: '初中', percentage: 38.79, icon: '📖' },
    { level: '小学', percentage: 25.16, icon: '✏️' }
  ];

  return (
    <div className="population-breakdown">
      <div className="breakdown-header">
        <h3 className="breakdown-title">
          <span className="title-icon">📊</span>
          人口结构深度分析
        </h3>
        <p className="breakdown-subtitle">
          基于第七次全国人口普查数据的详细人口结构分析
        </p>
      </div>

      <div className="breakdown-grid">
        {/* 年龄结构分析 */}
        <div className="breakdown-card age-distribution">
          <div className="card-header">
            <h4 className="card-title">
              <span className="card-icon">👶👧👨‍💼👴</span>
              年龄结构分布
            </h4>
          </div>
          <div className="age-chart">
            {ageDistribution.map((age, index) => (
              <div key={index} className="age-item">
                <div className="age-label">
                  <span className="age-range">{age.range}</span>
                  <span className="age-stats">
                    {age.percentage}% ({age.population}亿人)
                  </span>
                </div>
                <div className="age-bar">
                  <div 
                    className="age-progress"
                    style={{ 
                      width: `${age.percentage}%`,
                      backgroundColor: age.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="age-insights">
            <div className="insight-item">
              <span className="insight-icon">📈</span>
              <span>老龄化率达18.94%</span>
            </div>
            <div className="insight-item">
              <span className="insight-icon">👶</span>
              <span>少儿人口比重下降</span>
            </div>
          </div>
        </div>

        {/* 性别比例 */}
        <div className="breakdown-card gender-distribution">
          <div className="card-header">
            <h4 className="card-title">
              <span className="card-icon">👨👩</span>
              性别比例分布
            </h4>
          </div>
          <div className="gender-chart">
            {genderDistribution.map((gender, index) => (
              <div key={index} className="gender-item">
                <div 
                  className="gender-segment"
                  style={{ 
                    width: `${gender.percentage}%`,
                    backgroundColor: gender.color 
                  }}
                >
                  <div className="gender-info">
                    <div className="gender-type">{gender.type}</div>
                    <div className="gender-stats">
                      {gender.percentage}%
                    </div>
                    <div className="gender-population">
                      {gender.population}亿人
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="gender-insights">
            <div className="insight-item">
              <span className="insight-icon">⚖️</span>
              <span>男女比例：105.07:100</span>
            </div>
          </div>
        </div>

        {/* 教育水平 */}
        <div className="breakdown-card education-distribution">
          <div className="card-header">
            <h4 className="card-title">
              <span className="card-icon">🎓</span>
              教育水平分布
            </h4>
          </div>
          <div className="education-grid">
            {educationLevels.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">{edu.icon}</div>
                <div className="education-content">
                  <div className="education-level">{edu.level}</div>
                  <div className="education-percentage">{edu.percentage}%</div>
                </div>
                <div className="education-progress-ring">
                  <svg className="progress-ring" width="60" height="60">
                    <circle
                      className="progress-ring-background"
                      strokeWidth="4"
                      fill="transparent"
                      r="26"
                      cx="30"
                      cy="30"
                    />
                    <circle
                      className="progress-ring-progress"
                      strokeWidth="4"
                      fill="transparent"
                      r="26"
                      cx="30"
                      cy="30"
                      strokeDasharray={`${edu.percentage * 163.36 / 100} 163.36`}
                      strokeDashoffset="40.84"
                      transform="rotate(-90 30 30)"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 人口密度热点 */}
        <div className="breakdown-card density-analysis">
          <div className="card-header">
            <h4 className="card-title">
              <span className="card-icon">🗺️</span>
              人口密度分析
            </h4>
          </div>
          <div className="density-content">
            <div className="density-stats">
              <div className="density-stat">
                <div className="stat-number">147</div>
                <div className="stat-label">人/平方公里</div>
                <div className="stat-desc">全国平均密度</div>
              </div>
              <div className="density-stat">
                <div className="stat-number">东部</div>
                <div className="stat-label">高密度区</div>
                <div className="stat-desc">人口最集中</div>
              </div>
              <div className="density-stat">
                <div className="stat-number">西部</div>
                <div className="stat-label">低密度区</div>
                <div className="stat-desc">地广人稀</div>
              </div>
            </div>
            <div className="density-visualization">
              <div className="density-bar high"></div>
              <div className="density-bar medium"></div>
              <div className="density-bar low"></div>
              <div className="density-bar very-low"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="breakdown-footer">
        <div className="footer-insights">
          <div className="insight-card">
            <span className="insight-emoji">🔍</span>
            <div className="insight-content">
              <strong>关键洞察：</strong>
              中国人口结构呈现老龄化加速、城镇化持续推进的特征
            </div>
          </div>
          <div className="insight-card">
            <span className="insight-emoji">📈</span>
            <div className="insight-content">
              <strong>发展趋势：</strong>
              劳动年龄人口比重下降，人口红利逐渐减弱
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulationBreakdown;