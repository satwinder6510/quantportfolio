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
import { useLocation } from '@/hooks/use-location';

// Function to create more consistent, realistic data that matches our metrics
const generatePerformanceData = () => {
  // Start date for our data (Jan 2021)
  const startDate = new Date(2021, 0, 1);
  // Current Date
  const currentDate = new Date();
  
  // Target values from our metrics
  // Compound metrics
  const compoundMetrics = {
    strategy: {
      totalReturn: 610.68, // 610.68%
      annualizedReturn: 117.13, // 117.13%
      maxDrawdown: -18.88, // -18.88%
    },
    bitcoin: {
      totalReturn: 533.82, // 533.82%
      annualizedReturn: 102.55, // 102.55%
      maxDrawdown: -86.24, // -86.24%
    }
  };
  
  // Non-compound metrics
  const nonCompoundMetrics = {
    strategy: {
      totalReturn: 206.65, // 206.65%
      annualizedReturn: 39.64, // 39.64%
      maxDrawdown: -8.09, // -8.09%
    },
    sp500: {
      totalReturn: 75.71, // 75.71%
      annualizedReturn: 14.54, // 14.54%
      maxDrawdown: -33.72, // -33.72%
    }
  };
  
  // Function to generate monthly returns that will reach our target
  // Define the item type explicitly
  interface DataItem {
    date: string;
    value: number;
    drawdown: number;
  }
  
  const generateMonthlySeries = (startValue: number, totalMonths: number, totalReturn: number, volatility: number, maxDrawdown: number, isCompound: boolean): DataItem[] => {
    const data: DataItem[] = [];
    let currentValue = startValue;
    let highWatermark = startValue;
    let drawdown = 0;
    
    // Determine monthly growth rate for compound returns
    let targetMonthlyReturn;
    
    if (isCompound) {
      // Formula: (1 + r)^n = (1 + totalReturn)
      // r = (1 + totalReturn)^(1/n) - 1
      targetMonthlyReturn = Math.pow(1 + (totalReturn / 100), 1/totalMonths) - 1;
    } else {
      // For non-compound, simply divide the total return by number of months
      targetMonthlyReturn = (totalReturn / 100) / totalMonths;
    }
    
    // Add randomness but ensure we reach our target
    let cumulativeReturn = 0;
    
    for (let i = 0; i < totalMonths; i++) {
      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i);
      
      // Don't generate future data
      if (date > currentDate) break;
      
      // Calculate this month's return with some volatility
      let monthlyReturn;
      
      if (i === totalMonths - 1 && isCompound) {
        // Make sure final value reaches target exactly
        const targetFinalValue = startValue * (1 + (totalReturn / 100));
        monthlyReturn = (targetFinalValue / currentValue) - 1;
      } else if (i === totalMonths - 1 && !isCompound) {
        // For non-compound, make sure we reach exactly the target
        monthlyReturn = (totalReturn / 100) - cumulativeReturn;
      } else {
        // Random return with tendency toward target
        monthlyReturn = targetMonthlyReturn + (Math.random() * volatility - volatility/2);
        
        // Ensure some negative months to create drawdowns
        if (i % 4 === 0) { // Every 4th month on average
          monthlyReturn = -Math.abs(monthlyReturn * 0.8);
        }
      }
      
      if (isCompound) {
        currentValue = currentValue * (1 + monthlyReturn);
      } else {
        cumulativeReturn += monthlyReturn;
        currentValue = startValue * (1 + cumulativeReturn);
      }
      
      // Calculate drawdown
      if (currentValue > highWatermark) {
        highWatermark = currentValue;
        drawdown = 0;
      } else {
        drawdown = ((currentValue / highWatermark) - 1) * 100;
      }
      
      // Ensure max drawdown reaches our target at least once
      if (i === Math.floor(totalMonths * 0.4) && drawdown > maxDrawdown) { // Around 40% through the series
        // Force drawdown to reach max
        const drawdownFactor = (1 + (maxDrawdown / 100));
        currentValue = highWatermark * drawdownFactor;
        drawdown = maxDrawdown;
      }
      
      data.push({
        date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }),
        value: parseFloat(currentValue.toFixed(2)),
        drawdown: parseFloat(drawdown.toFixed(2))
      });
    }
    
    return data;
  };
  
  // Generate data series
  const totalMonths = 52; // ~4.3 years from Jan 2021 to Apr 2025
  
  // Generate the four data series we need
  const compoundStrategy = generateMonthlySeries(
    100, totalMonths, compoundMetrics.strategy.totalReturn, 0.08, compoundMetrics.strategy.maxDrawdown, true
  );
  
  const compoundBitcoin = generateMonthlySeries(
    100, totalMonths, compoundMetrics.bitcoin.totalReturn, 0.15, compoundMetrics.bitcoin.maxDrawdown, true
  );
  
  const nonCompoundStrategy = generateMonthlySeries(
    100, totalMonths, nonCompoundMetrics.strategy.totalReturn, 0.04, nonCompoundMetrics.strategy.maxDrawdown, false
  );
  
  const nonCompoundSP500 = generateMonthlySeries(
    100, totalMonths, nonCompoundMetrics.sp500.totalReturn, 0.06, nonCompoundMetrics.sp500.maxDrawdown, false
  );
  
  // Define our data types
  interface DataPoint {
    date: string;
    strategy: number;
    benchmark: number;
    strategyDrawdown: number;
    benchmarkDrawdown: number;
  }
  
  // Combine the data for compound returns
  const compoundData: DataPoint[] = compoundStrategy.map((item, i) => {
    return {
      date: item.date,
      strategy: item.value,
      benchmark: compoundBitcoin[i] ? compoundBitcoin[i].value : 0,
      strategyDrawdown: item.drawdown,
      benchmarkDrawdown: compoundBitcoin[i] ? compoundBitcoin[i].drawdown : 0
    };
  });
  
  // Combine the data for non-compound returns
  const nonCompoundData: DataPoint[] = nonCompoundStrategy.map((item, i) => {
    return {
      date: item.date,
      strategy: item.value,
      benchmark: nonCompoundSP500[i] ? nonCompoundSP500[i].value : 0,
      strategyDrawdown: item.drawdown,
      benchmarkDrawdown: nonCompoundSP500[i] ? nonCompoundSP500[i].drawdown : 0
    };
  });
  
  return { compoundData, nonCompoundData };
};

// Generate our performance data
const { compoundData, nonCompoundData } = generatePerformanceData();

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
    
    // Use the appropriate data source based on return type
    const dataSource = returnType === 'compound' ? compoundData : nonCompoundData;
    
    return dataSource.filter(item => {
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