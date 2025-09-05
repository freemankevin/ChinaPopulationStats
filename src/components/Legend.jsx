import React from 'react';

const Legend = () => {
  return (
    <div className="legend">
      <h3>图例说明</h3>
      <div className="legend-items">
        <div className="legend-item">
          <span className="color-box urban"></span>
          <span>城镇人口</span>
        </div>
        <div className="legend-item">
          <span className="color-box rural"></span>
          <span>乡村人口</span>
        </div>
        <div className="legend-item">
          <span className="color-box total"></span>
          <span>总人口</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;