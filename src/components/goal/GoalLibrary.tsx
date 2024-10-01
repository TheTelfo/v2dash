// src/components/goal/GoalLibrary.tsx

import React, { Component, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItemText,
  ListItemIcon,
  IconButton,
  Chip,
} from '@mui/material';
import { Search as SearchIcon, Info as InfoIcon } from '@mui/icons-material';
import { goals } from '../data/goalData';

interface GoalLibraryProps {
  onSelect: (goalId: string) => void;
  selectedGoal: string | null;
}

const GoalLibrary: React.FC<GoalLibraryProps> = ({ onSelect, selectedGoal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGoals = goals.filter(
    (goal) =>
      goal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      goal.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      goal.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Choose Specific Goal
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search goals..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
      <List>
        {filteredGoals.map((goal) => (
          <Component
            key={goal.id}
            button
            selected={selectedGoal === goal.id}
            onClick={() => onSelect(goal.id)}
          >
            <ListItemText
              primary={goal.name}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    {goal.category}
                  </Typography>
                  {goal.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" sx={{ ml: 1 }} />
                  ))}
                </>
              }
            />
            <ListItemIcon>
              <IconButton edge="end" aria-label={`Info about ${goal.name}`}>
                <InfoIcon />
              </IconButton>
            </ListItemIcon>
          </Component>
        ))}
      </List>
    </Box>
  );
};

export default GoalLibrary;
