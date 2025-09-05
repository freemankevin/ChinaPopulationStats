// components/FilterSection.jsx - 筛选组件
import React from 'react';
import { getProvinces, tierNames } from '../data/cityData';
import '../styles/FilterSection.css';

const FilterSection = ({ filters, onFilterChange, cities }) => {
  const provinces = getProvinces(cities);

  const filterOptions = [
    {
      key: 'population',
      label: '人口规模筛选',
      icon: '👥',
      options: [
        { value: 'all', label: '全部城市' },
        { value: '2000+', label: '2000万以上' },
        { value: '1000-2000', label: '1000-2000万' },
        { value: '500-1000', label: '500-1000万' },
        { value: '300-500', label: '300-500万' },
        { value: '200-300', label: '200-300万' },
        { value: '100-200', label: '100-200万' },
        { value: '50-100', label: '50-100万' },
        { value: '50-', label: '50万以下' }
      ]
    },
    {
      key: 'province',
      label: '省份/地区',
      icon: '🗺️',
      options: [
        { value: 'all', label: '全部省份' },
        ...provinces.map(province => ({ value: province, label: province }))
      ]
    },
    {
      key: 'tier',
      label: '城市等级',
      icon: '🏆',
      options: [
        { value: 'all', label: '所有等级' },
        ...Object.entries(tierNames).map(([key, name]) => ({ value: key, label: name }))
      ]
    },
    {
      key: 'limit',
      label: '显示数量',
      icon: '📊',
      options: [
        { value: '20', label: '前20名' },
        { value: '50', label: '前50名' },
        { value: '100', label: '前100名' },
        { value: '200', label: '前200名' },
        { value: 'all', label: '全部显示' }
      ]
    }
  ];

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3 className="filter-title">
          <span className="title-icon">🔍</span>
          数据筛选与控制
        </h3>
        <div className="filter-info">
          当前显示 <span className="highlight">{cities.length}</span> 个城市
        </div>
      </div>
      
      <div className="filters-grid">
        {filterOptions.map(filter => (
          <div key={filter.key} className="filter-item">
            <label className="filter-label">
              <span className="label-icon">{filter.icon}</span>
              {filter.label}
            </label>
            <div className="select-wrapper">
              <select
                className="filter-select"
                value={filters[filter.key]}
                onChange={(e) => onFilterChange(filter.key, e.target.value)}
              >
                {filter.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="select-arrow">▼</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="filter-quick-actions">
        <button 
          className="quick-action-btn"
          onClick={() => {
            onFilterChange('tier', 'tier1');
            onFilterChange('limit', '20');
          }}
        >
          <span className="btn-icon">⭐</span>
          一线城市
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => {
            onFilterChange('population', '1000+');
            onFilterChange('limit', '50');
          }}
        >
          <span className="btn-icon">🏙️</span>
          千万人口
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => {
            onFilterChange('province', '广东省');
            onFilterChange('limit', 'all');
          }}
        >
          <span className="btn-icon">🌟</span>
          广东省
        </button>
        <button 
          className="quick-action-btn"
          onClick={() => {
            onFilterChange('province', '江苏省');
            onFilterChange('limit', 'all');
          }}
        >
          <span className="btn-icon">🌸</span>
          江苏省
        </button>
        <button 
          className="clear-filters-btn"
          onClick={() => {
            onFilterChange('population', 'all');
            onFilterChange('province', 'all');
            onFilterChange('tier', 'all');
            onFilterChange('limit', '50');
          }}
        >
          <span className="btn-icon">🗑️</span>
          清除筛选
        </button>
      </div>
    </div>
  );
};

export default FilterSection;