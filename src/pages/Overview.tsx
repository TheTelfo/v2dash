import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct Import Path
import MainContent from '../components/layout/MainContent';
import ChartWidget from '../components/widget/ChartWidget';
import MetricWidget from '../components/widget/MetricWidget';
import GridWidget from '../components/widget/GridWidget';

const Overview: React.FC = () => {
  return (
    <MainContent>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Overview Dashboard
          </Typography>
          <Typography variant="body1">
            Welcome to the overview dashboard. Here you can find a summary of key metrics and data visualizations.
          </Typography>
        </Box>

        <Grid2 container spacing={3}>
          {/* Metric Widgets */}
          <Grid2 xs={12} sm={6} md={4}>
            <MetricWidget title="Total Revenue" />
          </Grid2>
          <Grid2 xs={12} sm={6} md={4}>
            <MetricWidget title="Active Users" />
          </Grid2>
          <Grid2 xs={12} sm={6} md={4}>
            <MetricWidget title="Conversion Rate" />
          </Grid2>

          {/* Chart Widget */}
          <Grid2 xs={12} md={8}>
            <ChartWidget title="Monthly Sales" />
          </Grid2>

          {/* Grid Widget */}
          <Grid2 xs={12} md={4}>
            <GridWidget title="Recent Transactions" />
          </Grid2>
        </Grid2>
      </Container>
    </MainContent>
  );
};

export default Overview;