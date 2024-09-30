import { Breakpoint } from "@mui/material";

export interface WidgetConfig {
  id: string;
  type: WidgetType;
  title: string;
  gridSize: Partial<Record<Breakpoint, number>>; // e.g., { xs: 12, sm: 6, md: 4, lg: 3 }
}

export enum WidgetType {
  Chart = 'Chart',
  Grid = 'Grid',
  Metric = 'Metric',
}