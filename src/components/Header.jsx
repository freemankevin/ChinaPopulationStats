// components/Header.jsx - 头部组件
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">中国人口分布完整统计</h1>
        <p className="header-subtitle">China Population Distribution Complete Statistics</p>
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-line"></div>
        </div>
      </div>
      <div className="header-bg-pattern"></div>
    </div>
  );
};

export default Header;