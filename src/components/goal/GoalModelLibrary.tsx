// src/components/goal/GoalModelLibrary.tsx

import React, { Component, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  TextField,
  InputAdornment,
} from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Import Grid2 from Unstable section in MUI v6
import { Search as SearchIcon } from '@mui/icons-material';
import { goalModels } from '../data/goalData';

interface GoalModelLibraryProps {
  onSelect: (modelId: string) => void;
  selectedModel: string | null;
}

const GoalModelLibrary: React.FC<GoalModelLibraryProps> = ({ onSelect, selectedModel }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModels = goalModels.filter(
    (model) =>
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Choose Goal Model
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search goal models..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4 }}
      />
      <Grid2 container spacing={3}>
        {filteredModels.map((model) => (
          <Component xs={12} sm={6} md={4} key={model.id}>
            <Card
              raised={selectedModel === model.id}
              sx={{ height: '100%', cursor: 'pointer' }}
            >
              <CardActionArea
                onClick={() => onSelect(model.id)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <model.icon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {model.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {model.description}
                </Typography>
              </CardActionArea>
            </Card>
          </Component>
        ))}
      </Grid2>
    </Box>
  );
};

export default GoalModelLibrary;
