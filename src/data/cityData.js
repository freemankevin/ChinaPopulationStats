// data/cityData.js - 数据管理文件

// 完整的城市人口数据
export const cityData = [
  // 直辖市
  {name: '重庆', population: 3212, province: '重庆市', tier: 'tier1', urban: 2169, rural: 1043, region: '西南'},
  {name: '上海', population: 2487, province: '上海市', tier: 'tier1', urban: 2356, rural: 131, region: '华东'},
  {name: '北京', population: 2188, province: '北京市', tier: 'tier1', urban: 1916, rural: 272, region: '华北'},
  {name: '天津', population: 1387, province: '天津市', tier: 'tier1', urban: 1154, rural: 233, region: '华北'},
  
  // 新一线城市
  {name: '成都', population: 2094, province: '四川省', tier: 'newTier1', urban: 1635, rural: 459, region: '西南'},
  {name: '广州', population: 1868, province: '广东省', tier: 'tier1', urban: 1748, rural: 120, region: '华南'},
  {name: '深圳', population: 1756, province: '广东省', tier: 'tier1', urban: 1744, rural: 12, region: '华南'},
  {name: '武汉', population: 1364, province: '湖北省', tier: 'newTier1', urban: 1121, rural: 243, region: '华中'},
  {name: '西安', population: 1295, province: '陕西省', tier: 'newTier1', urban: 1020, rural: 275, region: '西北'},
  {name: '苏州', population: 1275, province: '江苏省', tier: 'newTier1', urban: 1035, rural: 240, region: '华东'},
  {name: '郑州', population: 1260, province: '河南省', tier: 'newTier1', urban: 967, rural: 293, region: '华中'},
  {name: '杭州', population: 1237, province: '浙江省', tier: 'newTier1', urban: 1021, rural: 216, region: '华东'},
  {name: '青岛', population: 1025, province: '山东省', tier: 'newTier1', urban: 749, rural: 276, region: '华东'},
  {name: '长沙', population: 1005, province: '湖南省', tier: 'newTier1', urban: 815, rural: 190, region: '华中'},
  {name: '东莞', population: 1047, province: '广东省', tier: 'newTier1', urban: 995, rural: 52, region: '华南'},
  {name: '沈阳', population: 907, province: '辽宁省', tier: 'newTier1', urban: 730, rural: 177, region: '东北'},
  {name: '南京', population: 942, province: '江苏省', tier: 'newTier1', urban: 825, rural: 117, region: '华东'},
  {name: '合肥', population: 937, province: '安徽省', tier: 'newTier1', urban: 726, rural: 211, region: '华东'},
  {name: '佛山', population: 955, province: '广东省', tier: 'newTier1', urban: 914, rural: 41, region: '华南'},
  
  // 二线城市
  {name: '无锡', population: 748, province: '江苏省', tier: 'tier2', urban: 603, rural: 145, region: '华东'},
  {name: '大连', population: 745, province: '辽宁省', tier: 'tier2', urban: 574, rural: 171, region: '东北'},
  {name: '福州', population: 842, province: '福建省', tier: 'tier2', urban: 671, rural: 171, region: '华东'},
  {name: '厦门', population: 518, province: '福建省', tier: 'tier2', urban: 459, rural: 59, region: '华东'},
  {name: '哈尔滨', population: 988, province: '黑龙江省', tier: 'tier2', urban: 696, rural: 292, region: '东北'},
  {name: '济南', population: 932, province: '山东省', tier: 'tier2', urban: 708, rural: 224, region: '华东'},
  {name: '昆明', population: 850, province: '云南省', tier: 'tier2', urban: 644, rural: 206, region: '西南'},
  {name: '石家庄', population: 1121, province: '河北省', tier: 'tier2', urban: 786, rural: 335, region: '华北'},
  {name: '长春', population: 908, province: '吉林省', tier: 'tier2', urban: 719, rural: 189, region: '东北'},
  {name: '温州', population: 965, province: '浙江省', tier: 'tier2', urban: 714, rural: 251, region: '华东'},
  {name: '泉州', population: 878, province: '福建省', tier: 'tier2', urban: 621, rural: 257, region: '华东'},
  {name: '南宁', population: 874, province: '广西壮族自治区', tier: 'tier2', urban: 680, rural: 194, region: '华南'},
  {name: '贵阳', population: 611, province: '贵州省', tier: 'tier2', urban: 506, rural: 105, region: '西南'},
  {name: '南昌', population: 658, province: '江西省', tier: 'tier2', urban: 542, rural: 116, region: '华中'},
  {name: '太原', population: 540, province: '山西省', tier: 'tier2', urban: 449, rural: 91, region: '华北'},
  {name: '宁波', population: 854, province: '浙江省', tier: 'tier2', urban: 720, rural: 134, region: '华东'},
  
  // 三线城市
  {name: '烟台', population: 713, province: '山东省', tier: 'tier3', urban: 448, rural: 265, region: '华东'},
  {name: '洛阳', population: 705, province: '河南省', tier: 'tier3', urban: 456, rural: 249, region: '华中'},
  {name: '唐山', population: 771, province: '河北省', tier: 'tier3', urban: 501, rural: 270, region: '华北'},
  {name: '台州', population: 664, province: '浙江省', tier: 'tier3', urban: 456, rural: 208, region: '华东'},
  {name: '嘉兴', population: 540, province: '浙江省', tier: 'tier3', urban: 432, rural: 108, region: '华东'},
  {name: '常州', population: 527, province: '江苏省', tier: 'tier3', urban: 456, rural: 71, region: '华东'},
  {name: '徐州', population: 908, province: '江苏省', tier: 'tier3', urban: 635, rural: 273, region: '华东'},
  {name: '南通', population: 773, province: '江苏省', tier: 'tier3', urban: 546, rural: 227, region: '华东'},
  {name: '扬州', population: 456, province: '江苏省', tier: 'tier3', urban: 348, rural: 108, region: '华东'},
  {name: '盐城', population: 672, province: '江苏省', tier: 'tier3', urban: 428, rural: 244, region: '华东'},
  {name: '金华', population: 712, province: '浙江省', tier: 'tier3', urban: 487, rural: 225, region: '华东'},
  {name: '绍兴', population: 533, province: '浙江省', tier: 'tier3', urban: 456, rural: 77, region: '华东'},
  {name: '中山', population: 442, province: '广东省', tier: 'tier3', urban: 421, rural: 21, region: '华南'},
  {name: '珠海', population: 244, province: '广东省', tier: 'tier3', urban: 231, rural: 13, region: '华南'},
  {name: '惠州', population: 606, province: '广东省', tier: 'tier3', urban: 456, rural: 150, region: '华南'},
  {name: '江门', population: 485, province: '广东省', tier: 'tier3', urban: 398, rural: 87, region: '华南'},
  {name: '湖州', population: 337, province: '浙江省', tier: 'tier3', urban: 269, rural: 68, region: '华东'},
  {name: '镇江', population: 321, province: '江苏省', tier: 'tier3', urban: 278, rural: 43, region: '华东'},
  {name: '连云港', population: 460, province: '江苏省', tier: 'tier3', urban: 301, rural: 159, region: '华东'},
  {name: '淮安', population: 470, province: '江苏省', tier: 'tier3', urban: 334, rural: 136, region: '华东'},
  
  // 四五线城市（部分示例）
  {name: '淄博', population: 471, province: '山东省', tier: 'tier4', urban: 341, rural: 130, region: '华东'},
  {name: '威海', population: 291, province: '山东省', tier: 'tier4', urban: 215, rural: 76, region: '华东'},
  {name: '日照', population: 295, province: '山东省', tier: 'tier4', urban: 201, rural: 94, region: '华东'},
  {name: '泰安', population: 564, province: '山东省', tier: 'tier4', urban: 398, rural: 166, region: '华东'},
  {name: '临沂', population: 1101, province: '山东省', tier: 'tier3', urban: 597, rural: 504, region: '华东'},
  {name: '德州', population: 561, province: '山东省', tier: 'tier4', urban: 335, rural: 226, region: '华东'},
  {name: '聊城', population: 596, province: '山东省', tier: 'tier4', urban: 356, rural: 240, region: '华东'},
  {name: '滨州', population: 394, province: '山东省', tier: 'tier4', urban: 245, rural: 149, region: '华东'},
  {name: '菏泽', population: 879, province: '山东省', tier: 'tier4', urban: 456, rural: 423, region: '华东'},
  
  // 更多城市可以继续添加...
  {name: '兰州', population: 436, province: '甘肃省', tier: 'tier2', urban: 367, rural: 69, region: '西北'},
  {name: '银川', population: 286, province: '宁夏回族自治区', tier: 'tier3', urban: 234, rural: 52, region: '西北'},
  {name: '西宁', population: 247, province: '青海省', tier: 'tier3', urban: 201, rural: 46, region: '西北'},
  {name: '乌鲁木齐', population: 405, province: '新疆维吾尔自治区', tier: 'tier2', urban: 342, rural: 63, region: '西北'},
  {name: '呼和浩特', population: 349, province: '内蒙古自治区', tier: 'tier2', urban: 289, rural: 60, region: '华北'},
  {name: '拉萨', population: 95, province: '西藏自治区', tier: 'tier4', urban: 78, rural: 17, region: '西南'},
  {name: '海口', population: 287, province: '海南省', tier: 'tier3', urban: 245, rural: 42, region: '华南'}
];

// 获取城市颜色
export const getCityColor = (population) => {
  if (population >= 2000) return '#FF1744';  // 超大城市
  if (population >= 1000) return '#FF6B6B';  // 特大城市
  if (population >= 500) return '#4ECDC4';   // 大城市
  if (population >= 300) return '#45B7D1';   // 中等城市I
  if (population >= 100) return '#96CEB4';   // 中等城市II
  return '#FFEAA7';                          // 小城市
};

// 城市等级映射
export const tierNames = {
  'tier1': '一线城市',
  'newTier1': '新一线城市',
  'tier2': '二线城市',
  'tier3': '三线城市',
  'tier4': '四五线城市'
};

// 筛选城市数据
export const filterCities = (cities, filters, searchTerm) => {
  let filtered = [...cities];
  
  // 搜索过滤
  if (searchTerm) {
    filtered = filtered.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.province.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // 人口规模过滤
  if (filters.population !== 'all') {
    switch(filters.population) {
      case '2000+':
        filtered = filtered.filter(city => city.population >= 2000);
        break;
      case '1000-2000':
        filtered = filtered.filter(city => city.population >= 1000 && city.population < 2000);
        break;
      case '500-1000':
        filtered = filtered.filter(city => city.population >= 500 && city.population < 1000);
        break;
      case '300-500':
        filtered = filtered.filter(city => city.population >= 300 && city.population < 500);
        break;
      case '200-300':
        filtered = filtered.filter(city => city.population >= 200 && city.population < 300);
        break;
      case '100-200':
        filtered = filtered.filter(city => city.population >= 100 && city.population < 200);
        break;
      case '50-100':
        filtered = filtered.filter(city => city.population >= 50 && city.population < 100);
        break;
      case '50-':
        filtered = filtered.filter(city => city.population < 50);
        break;
    }
  }
  
  // 省份过滤
  if (filters.province !== 'all') {
    filtered = filtered.filter(city => city.province === filters.province);
  }
  
  // 城市等级过滤
  if (filters.tier !== 'all') {
    filtered = filtered.filter(city => city.tier === filters.tier);
  }
  
  // 排序
  filtered.sort((a, b) => b.population - a.population);
  
  // 数量限制
  if (filters.limit !== 'all') {
    filtered = filtered.slice(0, parseInt(filters.limit));
  }
  
  return filtered;
};

// 计算统计数据
export const calculateStats = (cities) => {
  const totalCities = cities.length;
  const totalPopulation = cities.reduce((sum, city) => sum + city.population, 0);
  const totalUrban = cities.reduce((sum, city) => sum + (city.urban || 0), 0);
  const totalRural = cities.reduce((sum, city) => sum + (city.rural || 0), 0);
  const megaCities = cities.filter(city => city.population >= 1000).length;
  const avgPopulation = totalCities > 0 ? Math.round(totalPopulation / totalCities) : 0;
  const urbanizationRate = totalPopulation > 0 ? ((totalUrban / totalPopulation) * 100).toFixed(1) : 0;
  
  return {
    totalCities,
    totalPopulation: (totalPopulation / 10000).toFixed(2),
    totalUrban: (totalUrban / 10000).toFixed(2),
    totalRural: (totalRural / 10000).toFixed(2),
    megaCities,
    avgPopulation,
    urbanizationRate
  };
};

// 获取省份列表
export const getProvinces = (cities) => {
  return [...new Set(cities.map(city => city.province))].sort();
};

// 人口区间统计
export const getPopulationIntervals = (cities) => {
  const intervals = [
    { label: '0-100万', min: 0, max: 100 },
    { label: '100-300万', min: 100, max: 300 },
    { label: '300-500万', min: 300, max: 500 },
    { label: '500-800万', min: 500, max: 800 },
    { label: '800-1200万', min: 800, max: 1200 },
    { label: '1200-2000万', min: 1200, max: 2000 },
    { label: '2000万以上', min: 2000, max: Infinity }
  ];

  return intervals.map(interval => ({
    ...interval,
    count: cities.filter(city => 
      city.population >= interval.min && city.population < interval.max
    ).length
  }));
};