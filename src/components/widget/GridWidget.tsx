import React from 'react';

interface GridWidgetProps {
  title: string;
}

const GridWidget: React.FC<GridWidgetProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default GridWidget;
