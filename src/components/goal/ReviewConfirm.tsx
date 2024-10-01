// src/components/goal/ReviewConfirm.tsx

import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { goalTypes, goalModels, goals, features as allFeatures } from '../data/goalData';

interface ReviewConfirmProps {
  goalType: string | null;
  goalModel: string | null;
  goal: string | null;
  features: string[];
}

const ReviewConfirm: React.FC<ReviewConfirmProps> = ({ goalType, goalModel, goal, features }) => {
  const getGoalTypeName = (type: string | null) => {
    const goalTypeObj = goalTypes.find((gt) => gt.type === type);
    return goalTypeObj ? goalTypeObj.description : 'Not selected';
  };

  const getGoalModelName = (modelId: string | null) => {
    const model = goalModels.find((gm) => gm.id === modelId);
    return model ? model.name : 'Not selected';
  };

  const getGoalName = (goalId: string | null) => {
    const selectedGoal = goals.find((g) => g.id === goalId);
    return selectedGoal ? selectedGoal.name : 'Not selected';
  };

  const getFeatureName = (featureId: string) => {
    const feature = allFeatures.find((f) => f.id === featureId);
    return feature ? feature.name : 'Unknown feature';
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Review Your Selections
      </Typography>
      <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
        <List>
          <ListItem>
            <ListItemText primary="Goal Type" secondary={getGoalTypeName(goalType)} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Goal Model" secondary={getGoalModelName(goalModel)} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Selected Goal" secondary={getGoalName(goal)} />
          </ListItem>
        </List>
      </Paper>
      <Typography variant="subtitle1" gutterBottom>
        Selected Features:
      </Typography>
      <Paper elevation={1} sx={{ p: 2 }}>
        <List>
          {features.map((featureId) => (
            <ListItem key={featureId}>
              <ListItemText primary={getFeatureName(featureId)} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ReviewConfirm;
