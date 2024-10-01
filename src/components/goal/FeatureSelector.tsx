// src/components/goal/FeatureSelector.tsx

import React, { Component } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemText,
  ListItemIcon,
  Checkbox,
  IconButton,
  Chip,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { features } from '../data/goalData';

interface FeatureSelectorProps {
  onSelect: (features: string[]) => void;
  selectedFeatures: string[];
}

const FeatureSelector: React.FC<FeatureSelectorProps> = ({ onSelect, selectedFeatures }) => {
  const handleToggle = (featureId: string) => () => {
    const currentIndex = selectedFeatures.indexOf(featureId);
    const newSelectedFeatures = [...selectedFeatures];

    if (currentIndex === -1) {
      newSelectedFeatures.push(featureId);
    } else {
      newSelectedFeatures.splice(currentIndex, 1);
    }

    onSelect(newSelectedFeatures);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Select Data Features
      </Typography>
      <List>
        {features.map((feature) => (
          <Component key={feature.id} dense button onClick={handleToggle(feature.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={selectedFeatures.indexOf(feature.id) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
              primary={feature.name}
              secondary={
                feature.recommended && (
                  <Chip label="Recommended" size="small" color="primary" />
                )
              }
            />
            <IconButton edge="end" aria-label={`Info about ${feature.name}`}>
              <InfoIcon />
            </IconButton>
          </Component>
        ))}
      </List>
    </Box>
  );
};

export default FeatureSelector;
