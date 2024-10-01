import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import * as echarts from 'echarts';

interface ChartWidgetProps {
  title: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ title }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: echarts.ECharts | null = null;

    if (chartRef.current) {
      chart = echarts.init(chartRef.current);
      const option = {
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [400, 300, 200, 278, 189, 239, 349],
            type: 'line',
          },
        ],
      };
      chart.setOption(option);
    }

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <div ref={chartRef} style={{ flexGrow: 1 }} />
    </div>
  );
};

export default ChartWidget;
