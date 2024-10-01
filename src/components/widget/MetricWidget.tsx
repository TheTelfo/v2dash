import React from 'react';

interface MetricWidgetProps {
  title: string;
}

const MetricWidget: React.FC<MetricWidgetProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default MetricWidget;
