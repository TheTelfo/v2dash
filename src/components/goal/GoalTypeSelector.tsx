// src/components/goal/GoalTypeSelector.tsx

import React, { Component } from 'react';
import { Box, Typography, Card, CardActionArea } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Updated import
import { goalTypes } from '../data/goalData';

interface GoalTypeSelectorProps {
  onSelect: (type: string) => void;
  selectedType: string | null;
}

const GoalTypeSelector: React.FC<GoalTypeSelectorProps> = ({
  onSelect,
  selectedType,
}) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Select Goal Type
      </Typography>
      <Grid2 container spacing={3}>
        {goalTypes.map((goal) => (
          <Component xs={12} sm={4} key={goal.type}>
            <Card
              raised={selectedType === goal.type}
              sx={{ height: '100%', cursor: 'pointer' }}
            >
              <CardActionArea
                onClick={() => onSelect(goal.type)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <goal.icon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {goal.type}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {goal.description}
                </Typography>
              </CardActionArea>
            </Card>
          </Component>
        ))}
      </Grid2>
    </Box>
  );
};

export default GoalTypeSelector;

