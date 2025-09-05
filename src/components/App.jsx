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

  return (
    <div className="app">
      <Header />
      
      <div className="content">
        <StatsOverview stats={stats} />
        
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
        
        <ChartControls 
          activeChart={chartType}
          onChartChange={setChartType}
        />
        
        <ChartSection 
          data={filteredCities}
          chartType={chartType}
          searchTerm={searchTerm}
        />
        
        <PopulationBreakdown />
        
        <Legend />
        
        <DataSource />
      </div>
    </div>
  );
}

export default App;