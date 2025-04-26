import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useLocation } from '@/contexts/LocationContext';

// Sample performance data
const generateMonthlyData = (startDate: Date, months: number, strategyBase: number, benchmarkBase: number, volatility: number) => {
  const data = [];
  let strategyValue = strategyBase;
  let benchmarkValue = benchmarkBase;
  let strategyDrawdown = 0;
  let benchmarkDrawdown = 0;
  
  let strategyHighWatermark = strategyBase;
  let benchmarkHighWatermark = benchmarkBase;
  
  const currentDate = new Date();
  
  for (let i = 0; i < months; i++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    
    // Don't generate future data beyond current date
    if (date > currentDate) break;
    
    // Strategy performance (with some volatility)
    const strategyMonthlyReturn = (Math.random() * volatility - volatility/3) + 0.033; // average 3.3% monthly
    strategyValue = strategyValue * (1 + strategyMonthlyReturn);
    
    // Benchmark performance (with higher volatility and lower returns)
    const benchmarkMonthlyReturn = (Math.random() * volatility * 1.2 - volatility/2) + 0.015; // average 1.5% monthly
    benchmarkValue = benchmarkValue * (1 + benchmarkMonthlyReturn);
    
    // Calculate drawdowns
    if (strategyValue > strategyHighWatermark) {
      strategyHighWatermark = strategyValue;
      strategyDrawdown = 0;
    } else {
      strategyDrawdown = ((strategyValue / strategyHighWatermark) - 1) * 100;
    }
    
    if (benchmarkValue > benchmarkHighWatermark) {
      benchmarkHighWatermark = benchmarkValue;
      benchmarkDrawdown = 0;
    } else {
      benchmarkDrawdown = ((benchmarkValue / benchmarkHighWatermark) - 1) * 100;
    }
    
    data.push({
      date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }),
      strategy: parseFloat((strategyValue).toFixed(2)),
      benchmark: parseFloat((benchmarkValue).toFixed(2)),
      strategyDrawdown: parseFloat(strategyDrawdown.toFixed(2)),
      benchmarkDrawdown: parseFloat(benchmarkDrawdown.toFixed(2))
    });
  }
  
  return data;
};

// Generate 5 years of monthly data
const startDate = new Date(2021, 0); // Jan 2021
const strategyData = generateMonthlyData(startDate, 60, 100, 100, 0.08);

interface PerformanceChartProps {
  returnType: 'compound' | 'non-compound';
  timeframe?: '1Y' | '3Y' | '5Y' | 'All';
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ 
  returnType,
  timeframe = '5Y'
}) => {
  const { region } = useLocation();
  const isIndian = region === 'india';
  const benchmarkName = isIndian ? 'NIFTY 50' : 'S&P 500';
  const cryptoBenchmarkName = 'Bitcoin';
  
  // Filter data based on timeframe
  const filterDataByTimeframe = () => {
    const now = new Date();
    let filterDate = new Date();
    
    switch(timeframe) {
      case '1Y':
        filterDate.setFullYear(now.getFullYear() - 1);
        break;
      case '3Y':
        filterDate.setFullYear(now.getFullYear() - 3);
        break;
      case '5Y':
        filterDate.setFullYear(now.getFullYear() - 5);
        break;
      case 'All':
      default:
        filterDate = new Date(2021, 0); // Jan 2021 (start of our data)
    }
    
    return strategyData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= filterDate;
    });
  };

  const filteredData = filterDataByTimeframe();
  
  const formatYAxis = (value: number) => {
    if (returnType === 'compound') {
      return `$${value}`;
    }
    // Calculate percent change from base 100
    return `${(value - 100).toFixed(0)}%`;
  };

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 shadow-md rounded border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-text-medium dark:text-dark-text-medium">{label}</p>
          <div className="mt-2">
            <p className="text-blue-600">
              <span className="font-medium">Our Strategy:</span> {returnType === 'compound' ? `$${payload[0].value}` : `${(payload[0].value - 100).toFixed(1)}%`}
            </p>
            {returnType === 'compound' ? (
              <p className="text-yellow-500">
                <span className="font-medium">{cryptoBenchmarkName}:</span> {`$${payload[1].value}`}
              </p>
            ) : (
              <p className="text-orange-500">
                <span className="font-medium">{benchmarkName}:</span> {`${(payload[1].value - 100).toFixed(1)}%`}
              </p>
            )}
            <p className="text-red-400 mt-1">
              <span className="font-medium">Strategy Drawdown:</span> {payload[2].value.toFixed(1)}%
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={filteredData}
        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorStrategy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
            <stop 
              offset="5%" 
              stopColor={returnType === 'compound' ? "#eab308" : "#f97316"} 
              stopOpacity={0.8} 
            />
            <stop 
              offset="95%" 
              stopColor={returnType === 'compound' ? "#eab308" : "#f97316"}
              stopOpacity={0.1} 
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="date" 
          tick={{ fill: '#6b7280' }}
          tickLine={{ stroke: '#9ca3af' }}
          axisLine={{ stroke: '#d1d5db' }}
          minTickGap={30}
        />
        <YAxis 
          tickFormatter={formatYAxis}
          tick={{ fill: '#6b7280' }}
          tickLine={{ stroke: '#9ca3af' }}
          axisLine={{ stroke: '#d1d5db' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ paddingTop: 10 }} />
        <Area 
          name="Our Strategy" 
          type="monotone" 
          dataKey="strategy" 
          stroke="#2563eb" 
          fillOpacity={1} 
          fill="url(#colorStrategy)" 
          strokeWidth={2}
        />
        <Area 
          name={returnType === 'compound' ? cryptoBenchmarkName : benchmarkName} 
          type="monotone" 
          dataKey="benchmark" 
          stroke={returnType === 'compound' ? "#eab308" : "#f97316"} 
          fillOpacity={1} 
          fill="url(#colorBenchmark)" 
          strokeWidth={2}
        />
        <Area 
          name="Strategy Drawdown" 
          type="monotone" 
          dataKey="strategyDrawdown" 
          stroke="#f87171" 
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="3 3"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;