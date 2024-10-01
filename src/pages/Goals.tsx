// src/pages/Goals.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import {
  setActiveStep,
  setSelectedGoalType,
  setSelectedGoalModel,
  setSelectedGoal,
  setSelectedFeatures,
} from '../app/goalSelectionSlice';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import GoalTypeSelector from '../components/goal/GoalTypeSelector';
import GoalModelLibrary from '../components/goal/GoalModelLibrary';
import GoalLibrary from '../components/goal/GoalLibrary';
import FeatureSelector from '../components/goal/FeatureSelector';
import ReviewConfirm from '../components/goal/ReviewConfirm';

const steps = [
  'Select Goal Type',
  'Choose Goal Model',
  'Choose Specific Goal',
  'Select Data Features',
  'Review and Confirm',
];

const Goals: React.FC = () => {
  const dispatch = useDispatch();

  const {
    activeStep,
    selectedGoalType,
    selectedGoalModel,
    selectedGoal,
    selectedFeatures,
  } = useSelector((state: RootState) => state.goalSelection);

  const handleNext = () => {
    dispatch(setActiveStep(activeStep + 1));
  };

  const handleBack = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <GoalTypeSelector
            onSelect={(type) => dispatch(setSelectedGoalType(type))}
            selectedType={selectedGoalType}
          />
        );
      case 1:
        return (
          <GoalModelLibrary
            onSelect={(modelId) => dispatch(setSelectedGoalModel(modelId))}
            selectedModel={selectedGoalModel}
          />
        );
      case 2:
        return (
          <GoalLibrary
            onSelect={(goalId) => dispatch(setSelectedGoal(goalId))}
            selectedGoal={selectedGoal}
          />
        );
      case 3:
        return (
          <FeatureSelector
            onSelect={(features) => dispatch(setSelectedFeatures(features))}
            selectedFeatures={selectedFeatures}
          />
        );
      case 4:
        return (
          <ReviewConfirm
            goalType={selectedGoalType}
            goalModel={selectedGoalModel}
            goal={selectedGoal}
            features={selectedFeatures}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep)}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default Goals;

