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
  
  // Target values from our metrics - these match the values in PerformanceSection.tsx
  // Convert from percentage strings to numbers for calculations
  
  // Compound metrics
  const compoundMetrics = {
    strategy: {
      totalReturn: 610.68, // from '610.68%'
      annualizedReturn: 117.13, // from '117.13%'
      maxDrawdown: -18.88, // from '-18.88%'
    },
    bitcoin: {
      totalReturn: 533.82, // from '533.82%'
      annualizedReturn: 102.55, // from '102.55%'
      maxDrawdown: -86.24, // from '-86.24%'
    }
  };
  
  // Non-compound metrics
  const nonCompoundMetrics = {
    strategy: {
      totalReturn: 206.65, // from '206.65%'
      annualizedReturn: 39.64, // from '39.64%'
      maxDrawdown: -8.09, // from '-8.09%'
    },
    sp500: {
      totalReturn: 75.71, // from '75.71%'
      annualizedReturn: 14.54, // from '14.54%'
      maxDrawdown: -33.72, // from '-33.72%'
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
      
      // Update high water mark if we've reached a new peak
      if (currentValue > highWatermark) {
        highWatermark = currentValue;
      }
      
      // Force specific drawdown pattern to match reported metrics
      let drawdownValue = 0;
      
      if (i === Math.floor(totalMonths * 0.25)) {
        // First significant drawdown at 25% of timeline
        drawdownValue = Math.abs(maxDrawdown * 0.4);
        // Temporarily reduce current value to create drawdown
        const tempValue = highWatermark * (1 - drawdownValue/100);
        currentValue = tempValue;
      } 
      else if (i === Math.floor(totalMonths * 0.4)) {
        // Max drawdown at 40% of timeline - full drawdown
        drawdownValue = Math.abs(maxDrawdown);
        // Temporarily reduce current value to create drawdown
        const tempValue = highWatermark * (1 - drawdownValue/100);
        currentValue = tempValue;
      }
      else if (i === Math.floor(totalMonths * 0.6)) {
        // Another significant drawdown at 60% of timeline
        drawdownValue = Math.abs(maxDrawdown * 0.5);
        // Temporarily reduce current value to create drawdown
        const tempValue = highWatermark * (1 - drawdownValue/100);
        currentValue = tempValue;
      }
      else if (i % 8 === 0) {
        // Add smaller periodic drawdowns for visual interest
        drawdownValue = Math.abs(maxDrawdown * 0.2 * Math.random());
        // Only create minor drawdowns if they don't conflict with major ones
        const tempValue = highWatermark * (1 - drawdownValue/100);
        currentValue = tempValue;
      }
      
      // Calculate the current drawdown from high water mark
      drawdown = -Math.abs(((currentValue / highWatermark) - 1) * 100);
      
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
  
  // Adjust volatility based on real-world data patterns
  // For compound returns where volatility is typically higher
  const compoundVolatility = {
    strategy: 0.08,    // Lower for our strategy (more consistent)
    bitcoin: 0.20      // Higher for Bitcoin (more volatile)
  };
  
  // For non-compound returns where month-to-month changes are smaller
  const nonCompoundVolatility = {
    strategy: 0.04,    // Very consistent monthly performance
    sp500: 0.06        // Standard index volatility
  };
  
  // Generate the data series
  // Compound data - starts at $1000 and grows to target amounts with realistic month-to-month movements
  const compoundStrategy = generateMonthlySeries(
    1000, totalMonths, compoundMetrics.strategy.totalReturn, compoundVolatility.strategy, compoundMetrics.strategy.maxDrawdown, true
  );
  
  const compoundBitcoin = generateMonthlySeries(
    1000, totalMonths, compoundMetrics.bitcoin.totalReturn, compoundVolatility.bitcoin, compoundMetrics.bitcoin.maxDrawdown, true
  );
  
  // Non-compound data - starts at 100% (shown as 0% gain) and accumulates to target amounts
  const nonCompoundStrategy = generateMonthlySeries(
    100, totalMonths, nonCompoundMetrics.strategy.totalReturn, nonCompoundVolatility.strategy, nonCompoundMetrics.strategy.maxDrawdown, false
  );
  
  const nonCompoundSP500 = generateMonthlySeries(
    100, totalMonths, nonCompoundMetrics.sp500.totalReturn, nonCompoundVolatility.sp500, nonCompoundMetrics.sp500.maxDrawdown, false
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
      // For compound returns, show dollar amounts to emphasize total value growth
      if (value >= 10000) {
        return `$${Math.floor(value/1000)}K`; // Show in thousands for very large values
      } else if (value >= 5000) {
        return `$${Math.floor(value/1000)*1000}`; // Round to nearest thousand for large values
      } else if (value >= 2000) {
        return `$${Math.floor(value/500)*500}`; // Round to nearest 500 for medium-large values
      } else {
        return `$${Math.floor(value/100)*100}`; // Round to nearest 100 for smaller amounts
      }
    }
    // For non-compound returns, show percentage change from base 100
    return `${(value - 100).toFixed(0)}%`;
  };

  // Custom tooltip formatter with number formatting
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      // Format numbers nicely for the tooltip
      const formatTooltipValue = (value: number, isCompound: boolean) => {
        if (isCompound) {
          // Format dollar values
          return new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD',
            maximumFractionDigits: 0 
          }).format(value);
        } else {
          // Format percentage values
          return `${(value - 100).toFixed(1)}%`;
        }
      };
      
      // Only access payload values if they exist
      const strategyValue = payload[0] ? payload[0].value : 0;
      const benchmarkValue = payload[1] ? payload[1].value : 0;
      
      return (
        <div className="bg-white dark:bg-gray-800 p-3 shadow-md rounded border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-text-medium dark:text-dark-text-medium">{label}</p>
          <div className="mt-2">
            <p className="text-blue-600">
              <span className="font-medium">Our Strategy:</span> {formatTooltipValue(strategyValue, returnType === 'compound')}
            </p>
            {returnType === 'compound' ? (
              <p className="text-yellow-500">
                <span className="font-medium">{cryptoBenchmarkName}:</span> {formatTooltipValue(benchmarkValue, true)}
              </p>
            ) : (
              <p className="text-orange-500">
                <span className="font-medium">{benchmarkName}:</span> {formatTooltipValue(benchmarkValue, false)}
              </p>
            )}
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

      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;