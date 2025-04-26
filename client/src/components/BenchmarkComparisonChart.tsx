import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { useLocation } from '@/contexts/LocationContext';

interface BenchmarkComparisonProps {
  metrics: {
    strategy: {
      totalReturn: string;
      annualizedReturn: string;
      sharpeRatio: string;
      maxDrawdown: string;
      positiveMonths: string;
    };
    bitcoin: {
      totalReturn: string;
      annualizedReturn: string;
      sharpeRatio: string;
      maxDrawdown: string;
      positiveMonths: string;
    };
    sp500: {
      totalReturn: string;
      annualizedReturn: string;
      sharpeRatio: string;
      maxDrawdown: string;
      positiveMonths: string;
    };
    nifty50: {
      totalReturn: string;
      annualizedReturn: string;
      sharpeRatio: string;
      maxDrawdown: string;
      positiveMonths: string;
    };
  };
}

const BenchmarkComparisonChart: React.FC<BenchmarkComparisonProps> = ({ metrics }) => {
  const { region } = useLocation();
  const isIndian = region === 'india';
  
  // Helper function to convert string percentages to numbers
  const percentToNumber = (percentStr: string) => {
    return parseFloat(percentStr.replace('%', ''));
  };
  
  // Prepare data for the chart
  const chartData = [
    {
      name: 'Total Return',
      Strategy: percentToNumber(metrics.strategy.totalReturn),
      Bitcoin: percentToNumber(metrics.bitcoin.totalReturn),
      [isIndian ? 'NIFTY 50' : 'S&P 500']: isIndian 
        ? percentToNumber(metrics.nifty50.totalReturn)
        : percentToNumber(metrics.sp500.totalReturn),
    },
    {
      name: 'Annual Return',
      Strategy: percentToNumber(metrics.strategy.annualizedReturn),
      Bitcoin: percentToNumber(metrics.bitcoin.annualizedReturn),
      [isIndian ? 'NIFTY 50' : 'S&P 500']: isIndian 
        ? percentToNumber(metrics.nifty50.annualizedReturn)
        : percentToNumber(metrics.sp500.annualizedReturn),
    },
    {
      name: 'Sharpe Ratio',
      Strategy: parseFloat(metrics.strategy.sharpeRatio),
      Bitcoin: parseFloat(metrics.bitcoin.sharpeRatio),
      [isIndian ? 'NIFTY 50' : 'S&P 500']: isIndian 
        ? parseFloat(metrics.nifty50.sharpeRatio)
        : parseFloat(metrics.sp500.sharpeRatio),
    },
    {
      name: 'Max Drawdown',
      Strategy: Math.abs(percentToNumber(metrics.strategy.maxDrawdown)), // Convert to positive for visualization
      Bitcoin: Math.abs(percentToNumber(metrics.bitcoin.maxDrawdown)),
      [isIndian ? 'NIFTY 50' : 'S&P 500']: isIndian 
        ? Math.abs(percentToNumber(metrics.nifty50.maxDrawdown))
        : Math.abs(percentToNumber(metrics.sp500.maxDrawdown)),
    }
  ];
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      // Handle both percentage metrics and ratio metrics
      const formatValue = (value: number, name: string) => {
        if (name === 'Sharpe Ratio') return value.toFixed(2);
        if (name === 'Max Drawdown') return `-${value.toFixed(2)}%`;
        return `${value.toFixed(2)}%`;
      };
      
      return (
        <div className="bg-white dark:bg-gray-800 p-3 shadow-md rounded border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-text-medium dark:text-dark-text-medium">{label}</p>
          <div className="mt-2">
            {payload.map((entry: any, index: number) => (
              <p 
                key={`tooltip-${index}`} 
                style={{ color: entry.color }}
                className="font-medium"
              >
                {entry.name}: {formatValue(entry.value, label)}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="w-full rounded-lg mb-6 overflow-hidden">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6b7280' }}
            angle={-45}
            textAnchor="end"
            interval={0}
          />
          <YAxis 
            tickFormatter={(value) => `${value}${chartData[0].name !== 'Sharpe Ratio' ? '%' : ''}`}
            tick={{ fill: '#6b7280' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />
          <Bar 
            name="Strategy" 
            dataKey="Strategy" 
            fill="#2563eb" 
            radius={[4, 4, 0, 0]}
          >
            <LabelList 
              dataKey="Strategy" 
              position="top" 
              formatter={(value: number) => 
                chartData[0].name === 'Sharpe Ratio' ? value.toFixed(1) : `${value.toFixed(0)}%`
              }
              style={{ fill: '#4b5563', fontSize: '12px' }}
            />
          </Bar>
          <Bar 
            name="Bitcoin" 
            dataKey="Bitcoin" 
            fill="#eab308"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            name={isIndian ? 'NIFTY 50' : 'S&P 500'} 
            dataKey={isIndian ? 'NIFTY 50' : 'S&P 500'} 
            fill="#f97316"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BenchmarkComparisonChart;