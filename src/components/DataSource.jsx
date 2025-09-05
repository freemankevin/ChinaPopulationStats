// components/DataSource.jsx - 数据来源组件
import React, { useState } from 'react';
import '../styles/DataSource.css';

const DataSource = () => {
  const [activeTab, setActiveTab] = useState('source');

  const dataSources = [
    {
      name: '国家统计局',
      description: '中华人民共和国国家统计局第七次全国人口普查数据',
      url: 'http://www.stats.gov.cn/',
      reliability: 'A+',
      updateDate: '2021年5月',
      coverage: '全国31个省、自治区、直辖市',
      icon: '🏛️'
    },
    {
      name: '各省统计局',
      description: '各省、自治区、直辖市统计局补充数据',
      url: '各省统计局官网',
      reliability: 'A',
      updateDate: '2021年6月',
      coverage: '省级行政区详细数据',
      icon: '🏢'
    },
    {
      name: '城市统计年鉴',
      description: '中国城市统计年鉴相关数据',
      url: '统计出版社',
      reliability: 'A',
      updateDate: '2021年底',
      coverage: '主要城市经济社会数据',
      icon: '📚'
    }
  ];

  const methodology = [
    {
      step: '数据收集',
      description: '收集国家统计局、各省市统计局发布的官方人口普查数据',
      icon: '📊',
      details: ['人户分离人口', '流动人口', '常住人口', '户籍人口']
    },
    {
      step: '数据清洗',
      description: '对原始数据进行标准化处理，确保数据质量和一致性',
      icon: '🔧',
      details: ['数据验证', '异常值处理', '缺失值填充', '格式统一']
    },
    {
      step: '数据整合',
      description: '将多源数据进行整合，建立统一的数据模型',
      icon: '🔄',
      details: ['数据匹配', '重复数据删除', '关联关系建立', '层级结构构建']
    },
    {
      step: '质量检验',
      description: '通过多种方法验证数据的准确性和完整性',
      icon: '✅',
      details: ['逻辑一致性检查', '数据完整性验证', '准确性评估', '时效性检验']
    }
  ];

  const updateHistory = [
    {
      version: 'v2.1.0',
      date: '2023年12月',
      changes: ['新增城乡人口分布数据', '优化数据可视化展示', '修复部分城市数据异常'],
      type: 'major'
    },
    {
      version: 'v2.0.5',
      date: '2023年9月',
      changes: ['更新部分城市最新人口数据', '改进搜索功能', '性能优化'],
      type: 'minor'
    },
    {
      version: 'v2.0.0',
      date: '2023年6月',
      changes: ['全面升级数据结构', '新增多种图表类型', '重构用户界面'],
      type: 'major'
    },
    {
      version: 'v1.5.2',
      date: '2023年3月',
      changes: ['修复数据展示bug', '优化移动端适配', '增强数据筛选功能'],
      type: 'patch'
    }
  ];

  const technicalSpecs = [
    {
      category: '数据规模',
      items: [
        { label: '城市数量', value: '300+' },
        { label: '数据字段', value: '50+' },
        { label: '数据记录', value: '15,000+' },
        { label: '更新频率', value: '季度' }
      ]
    },
    {
      category: '技术栈',
      items: [
        { label: '前端框架', value: 'React 18' },
        { label: '图表库', value: 'Chart.js' },
        { label: '样式框架', value: 'CSS3 + Flexbox' },
        { label: '构建工具', value: 'Create React App' }
      ]
    },
    {
      category: '数据处理',
      items: [
        { label: '数据格式', value: 'JSON / CSV' },
        { label: '编码格式', value: 'UTF-8' },
        { label: '压缩方式', value: 'Gzip' },
        { label: '缓存策略', value: 'Browser Cache' }
      ]
    }
  ];

  const tabs = [
    { id: 'source', label: '数据来源', icon: '📄' },
    { id: 'methodology', label: '处理方法', icon: '⚙️' },
    { id: 'updates', label: '更新历史', icon: '🕒' },
    { id: 'technical', label: '技术规格', icon: '🔧' }
  ];

  return (
    <div className="data-source">
      <div className="data-source-header">
        <h3 className="data-source-title">
          <span className="title-icon">📋</span>
          数据来源与技术说明
        </h3>
        <p className="data-source-subtitle">
          透明、可靠、专业的数据处理流程
        </p>
      </div>

      <div className="data-source-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="data-source-content">
        {activeTab === 'source' && (
          <div className="tab-content">
            <div className="sources-grid">
              {dataSources.map((source, index) => (
                <div key={index} className="source-card">
                  <div className="source-header">
                    <span className="source-icon">{source.icon}</span>
                    <div className="source-info">
                      <h4 className="source-name">{source.name}</h4>
                      <div className="source-reliability">
                        可靠性等级: <span className="reliability-badge">{source.reliability}</span>
                      </div>
                    </div>
                  </div>
                  <div className="source-description">
                    {source.description}
                  </div>
                  <div className="source-details">
                    <div className="detail-item">
                      <span className="detail-label">更新时间:</span>
                      <span className="detail-value">{source.updateDate}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">覆盖范围:</span>
                      <span className="detail-value">{source.coverage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'methodology' && (
          <div className="tab-content">
            <div className="methodology-flow">
              {methodology.map((step, index) => (
                <div key={index} className="methodology-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <div className="step-header">
                      <span className="step-icon">{step.icon}</span>
                      <h4 className="step-title">{step.step}</h4>
                    </div>
                    <p className="step-description">{step.description}</p>
                    <div className="step-details">
                      {step.details.map((detail, idx) => (
                        <span key={idx} className="detail-tag">{detail}</span>
                      ))}
                    </div>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'updates' && (
          <div className="tab-content">
            <div className="updates-timeline">
              {updateHistory.map((update, index) => (
                <div key={index} className={`update-item ${update.type}`}>
                  <div className="update-marker"></div>
                  <div className="update-content">
                    <div className="update-header">
                      <span className="update-version">{update.version}</span>
                      <span className="update-date">{update.date}</span>
                      <span className={`update-type-badge ${update.type}`}>
                        {update.type === 'major' ? '主要更新' : 
                         update.type === 'minor' ? '次要更新' : '补丁更新'}
                      </span>
                    </div>
                    <ul className="update-changes">
                      {update.changes.map((change, idx) => (
                        <li key={idx}>{change}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="tab-content">
            <div className="technical-specs">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="spec-category">
                  <h4 className="spec-category-title">{spec.category}</h4>
                  <div className="spec-items">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="spec-item">
                        <span className="spec-label">{item.label}</span>
                        <span className="spec-value">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="data-source-footer">
        <div className="footer-info">
          <div className="info-section">
            <h4 className="info-title">
              <span className="info-icon">📞</span>
              联系我们
            </h4>
            <div className="contact-info">
              <p>数据问题反馈：data@census-china.org</p>
              <p>技术支持：tech-support@census-china.org</p>
            </div>
          </div>
          <div className="info-section">
            <h4 className="info-title">
              <span className="info-icon">📖</span>
              使用许可
            </h4>
            <div className="license-info">
              <p>本数据集采用 CC BY-SA 4.0 许可协议</p>
              <p>允许自由使用、修改和分发，需注明出处</p>
            </div>
          </div>
          <div className="info-section">
            <h4 className="info-title">
              <span className="info-icon">⚠️</span>
              免责声明
            </h4>
            <div className="disclaimer-info">
              <p>数据仅供研究和参考使用</p>
              <p>不承担因使用本数据造成的任何损失</p>
            </div>
          </div>
        </div>

        <div className="footer-stats">
          <div className="stat-item">
            <div className="stat-number">2023.12</div>
            <div className="stat-label">最后更新</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">v2.1.0</div>
            <div className="stat-label">当前版本</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98.5%</div>
            <div className="stat-label">数据完整度</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">A+</div>
            <div className="stat-label">质量等级</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSource;