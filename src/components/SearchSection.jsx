// components/SearchSection.jsx - 搜索组件
import React, { useState } from 'react';
import '../styles/SearchSection.css';

const SearchSection = ({ searchTerm, onSearch, onClear }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSearch = () => {
    // 确保搜索功能正常工作
    if (inputValue.trim() !== '') {
      onSearch(inputValue.trim());
    }
  };

  const handleClear = () => {
    setInputValue('');
    onClear();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        onSearch(inputValue.trim());
      }
    }
  };

  return (
    <div className="search-section">
      <h3>城市搜索</h3>
      <div className="search-container">
        <div className="search-input-group">
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="搜索城市名称或省份，如：北京、广东省、长三角..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            {inputValue && (
              <button 
                className="clear-input-btn"
                onClick={() => {
                  setInputValue('');
                  onSearch('');
                }}
              >
                ×
              </button>
            )}
          </div>
          <button className="search-button" onClick={handleSearch}>搜索</button>
        </div>
        <div className="search-suggestions">
          <span className="suggestion-label">热门搜索：</span>
          {['北京', '上海', '广州', '深圳', '成都', '杭州'].map(city => (
            <button
              key={city}
              className="suggestion-btn"
              onClick={() => {
                setInputValue(city);
                onSearch(city);
              }}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;