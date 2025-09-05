// components/ChartSection.jsx - 图表展示组件
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { getCityColor, tierNames, getPopulationIntervals } from '../data/cityData';
import '../styles/ChartSection.css';

const ChartSection = ({ data, chartType, searchTerm }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const getChartTitle = () => {
    const titles = {
      bar: '城市人口排名对比',
      line: '城市人口规模趋势',
      scatter: '城市人口散点分布',
      pie: '城市等级分布占比',
      histogram: '人口规模区间统计',
      urbanRural: '城乡人口分布对比'
    };
    
    let title = titles[chartType] || '城市人口统计';
    if (searchTerm) {
      title += ` - "${searchTerm}"`;
    }
    return title;
  };

  const createBarChart = () => {
    return new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: data.map(city => city.name),
        datasets: [{
          label: '人口 (万人)',
          data: data.map(city => city.population),
          backgroundColor: data.map(city => getCityColor(city.population)),
          borderColor: data.map(city => getCityColor(city.population)),
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: 'white',
            bodyColor: 'white',
            borderColor: '#667eea',
            borderWidth: 1,
            cornerRadius: 10,
            callbacks: {
              title: function(context) {
                const city = data[context[0].dataIndex];
                return `${city.name} (${city.province})`;
              },
              label: function(context) {
                const city = data[context.dataIndex];
                return [
                  `人口: ${context.parsed.y}万人`,
                  `等级: ${tierNames[city.tier] || city.tier}`,
                  `城镇人口: ${city.urban || 0}万人`,
                  `农村人口: ${city.rural || 0}万人`
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              callback: function(value) {
                return value + '万';
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutBounce'
        }
      }
    });
  };

  const createLineChart = () => {
    return new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: data.map(city => city.name),
        datasets: [{
          label: '人口 (万人)',
          data: data.map(city => city.population),
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: data.map(city => getCityColor(city.population)),
          pointBorderColor: '#fff',
          pointBorderWidth: 3,
          pointRadius: 8,
          pointHoverRadius: 12,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            callbacks: {
              title: function(context) {
                const city = data[context[0].dataIndex];
                return `${city.name} (${city.province})`;
              },
              label: function(context) {
                const city = data[context.dataIndex];
                return [
                  `人口: ${context.parsed.y}万人`,
                  `等级: ${tierNames[city.tier] || city.tier}`
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + '万';
              }
            }
          },
          x: {
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
  };

  const createScatterChart = () => {
    return new Chart(chartRef.current, {
      type: 'scatter',
      data: {
        datasets: [{
          label: '城市人口',
          data: data.map((city, index) => ({
            x: index + 1,
            y: city.population,
            city: city
          })),
          backgroundColor: data.map(city => getCityColor(city.population)),
          borderColor: data.map(city => getCityColor(city.population)),
          pointRadius: 10,
          pointHoverRadius: 15,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            callbacks: {
              title: function(context) {
                const city = context.raw.city;
                return `${city.name} (${city.province})`;
              },
              label: function(context) {
                const city = context.raw.city;
                return [
                  `排名: 第${context.parsed.x}名`,
                  `人口: ${context.parsed.y}万人`,
                  `等级: ${tierNames[city.tier] || city.tier}`
                ];
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '人口 (万人)',
              font: {
                size: 14,
                weight: 'bold'
              }
            },
            ticks: {
              callback: function(value) {
                return value + '万';
              }
            }
          },
          x: {
            title: {
              display: true,
              text: '城市排名',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          }
        }
      }
    });
  };

  const createPieChart = () => {
    const tierData = {};
    data.forEach(city => {
      const tierName = tierNames[city.tier] || city.tier;
      tierData[tierName] = (tierData[tierName] || 0) + 1;
    });

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];

    return new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: Object.keys(tierData),
        datasets: [{
          data: Object.values(tierData),
          backgroundColor: colors.slice(0, Object.keys(tierData).length),
          borderColor: '#fff',
          borderWidth: 3,
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              padding: 20,
              usePointStyle: true,
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            callbacks: {
              label: function(context) {
                const total = Object.values(tierData).reduce((a, b) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ${context.parsed}个城市 (${percentage}%)`;
              }
            }
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
  };

  const createHistogram = () => {
    const intervals = getPopulationIntervals(data);

    return new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: intervals.map(interval => interval.label),
        datasets: [{
          label: '城市数量',
          data: intervals.map(interval => interval.count),
          backgroundColor: '#667eea',
          borderColor: '#667eea',
          borderWidth: 2,
          borderRadius: 8,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed.y}个城市`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '城市数量'
            },
            ticks: {
              stepSize: 1
            }
          },
          x: {
            title: {
              display: true,
              text: '人口区间'
            },
            ticks: {
              maxRotation: 45
            }
          }
        }
      }
    });
  };

  const createUrbanRuralChart = () => {
    const totalUrban = data.reduce((sum, city) => sum + (city.urban || 0), 0);
    const totalRural = data.reduce((sum, city) => sum + (city.rural || 0), 0);
    
    return new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['城镇人口', '农村人口'],
        datasets: [{
          data: [totalUrban, totalRural],
          backgroundColor: ['#4ECDC4', '#96CEB4'],
          borderColor: '#fff',
          borderWidth: 3,
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20,
              usePointStyle: true,
              font: {
                size: 16
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            callbacks: {
              label: function(context) {
                const total = totalUrban + totalRural;
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ${context.parsed}万人 (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (data.length === 0) return;

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    switch (chartType) {
      case 'bar':
        chartInstance.current = createBarChart();
        break;
      case 'line':
        chartInstance.current = createLineChart();
        break;
      case 'scatter':
        chartInstance.current = createScatterChart();
        break;
      case 'pie':
        chartInstance.current = createPieChart();
        break;
      case 'histogram':
        chartInstance.current = createHistogram();
        break;
      case 'urbanRural':
        chartInstance.current = createUrbanRuralChart();
        break;
      default:
        chartInstance.current = createBarChart();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, chartType]);

  return (
    <div className="chart-section">
      <div className="chart-header">
        <h3 className="chart-title">{getChartTitle()}</h3>
        <div className="chart-info">
          显示 {data.length} 个城市的数据
        </div>
      </div>
      
      <div className="chart-container">
        {data.length === 0 ? (
          <div className="no-data">
            <div className="no-data-icon">📊</div>
            <div className="no-data-text">暂无符合条件的数据</div>
            <div className="no-data-subtitle">请调整筛选条件或搜索关键词</div>
          </div>
        ) : (
          <canvas ref={chartRef}></canvas>
        )}
      </div>
    </div>
  );
};

export default ChartSection;