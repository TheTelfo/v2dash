// src/data/goalData.ts
import {
    AssessmentOutlined,
    TrackChangesOutlined,
    ShowChartOutlined,
    TrendingUp,
    GroupWork,
    Timeline,
  } from '@mui/icons-material';
  
  export const goalTypes = [
    { type: 'KPI', icon: AssessmentOutlined, description: 'Key Performance Indicator' },
    { type: 'OKR', icon: TrackChangesOutlined, description: 'Objectives and Key Results' },
    { type: 'Metric', icon: ShowChartOutlined, description: 'General Metric' },
  ];
  
  export const goalModels = [
    { id: '1', name: 'SMART Goals', description: 'Specific, Measurable, Achievable, Relevant, Time-bound', icon: TrendingUp },
    { id: '2', name: 'OKR', description: 'Objectives and Key Results', icon: GroupWork },
    { id: '3', name: 'BSC', description: 'Balanced Scorecard', icon: Timeline },
  ];
  
  export const goals = [
    { id: '1', name: 'Increase Revenue', category: 'Finance', tags: ['sales', 'growth'] },
    { id: '2', name: 'Improve Customer Satisfaction', category: 'Customer Service', tags: ['customer', 'satisfaction'] },
    { id: '3', name: 'Reduce Churn Rate', category: 'Customer Retention', tags: ['customer', 'retention'] },
  ];
  
  export const features = [
    { id: '1', name: 'Sales Volume', recommended: true },
    { id: '2', name: 'Customer Acquisition Cost', recommended: true },
    { id: '3', name: 'Churn Rate', recommended: false },
    { id: '4', name: 'Customer Lifetime Value', recommended: true },
  ];
  