// App.jsx - 主应用组件
import React, { useState, useEffect } from 'react';
import Header from './Header';
import StatsOverview from './StatsOverview';
import SearchSection from './SearchSection';
import FilterSection from './FilterSection';
import ChartControls from './ChartControls';
import ChartSection from './ChartSection';
import PopulationBreakdown from './PopulationBreakdown';
import Legend from './Legend';
import DataSource from './DataSource';
import { cityData, filterCities, calculateStats } from '../data/cityData';
import '../styles/App.css';

function App() {
  const [filteredCities, setFilteredCities] = useState(cityData);
  const [chartType, setChartType] = useState('bar');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    population: 'all',
    province: 'all',
    tier: 'all',
    limit: '50'
  });
  const [stats, setStats] = useState(calculateStats(cityData));
  const [isLoading, setIsLoading] = useState(true);

  // 模拟加载过程
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // 应用筛选条件
  useEffect(() => {
    const filtered = filterCities(cityData, filters, searchTerm);
    setFilteredCities(filtered);
    setStats(calculateStats(filtered));
  }, [filters, searchTerm]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilters({
      population: 'all',
      province: 'all',
      tier: 'all',
      limit: '50'
    });
  };

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">加载中国人口统计数据...</div>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      <div className="content">
        {/* 统计概览 */}
        <section className="section-overview">
          <StatsOverview stats={stats} />
        </section>
        
        {/* 搜索和筛选 */}
        <section className="section-controls">
          <SearchSection 
            searchTerm={searchTerm}
            onSearch={handleSearch}
            onClear={handleClearSearch}
          />
          
          <FilterSection 
            filters={filters}
            onFilterChange={handleFilterChange}
            cities={cityData}
          />
        </section>
        
        {/* 图表控制和展示 */}
        <section className="section-charts">
          <ChartControls 
            activeChart={chartType}
            onChartChange={setChartType}
          />
          
          <ChartSection 
            data={filteredCities}
            chartType={chartType}
            searchTerm={searchTerm}
          />
        </section>
        
        {/* 详细分析 */}
        <section className="section-analysis">
          <PopulationBreakdown />
        </section>
        
        {/* 图例说明 */}
        <section className="section-legend">
          <Legend />
        </section>
        
        {/* 数据来源 */}
        <section className="section-source">
          <DataSource />
        </section>
      </div>

      {/* 回到顶部按钮 */}
      <BackToTop />
    </div>
  );
}

// 回到顶部组件
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="回到顶部"
    >
      <span className="back-to-top-icon">↑</span>
      <span className="back-to-top-text">顶部</span>
    </button>
  );
};

export default App;