import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GoalSelectionState {
    activeStep: number;
    selectedGoalType: string | null;
    selectedGoalModel: string | null;
    selectedGoal: string | null;
    selectedFeatures: string | [];
}

const initialState: GoalSelectionState = {
    activeStep: 0,
    selectedGoalType: null,
    selectedGoalModel: null,
    selectedGoal: null,
    selectedFeatures: [],
};

const goalSelectionSlice = createSlice ({
    name: 'goalSelection',
    initialState,
    reducers: {
        setActiveStep(state, action: PayloadAction<string | null>) {
            state.activeStep = action.payload;
        },
        setSelectedGoalType(state, action: PayloadAction<string | null>) {
            state.selectedGoalType = action.payload;
        },
        setSelectedGoalModel(state, action: PayloadAction<string | null>) {
            state.selectedGoalModel = action.payload;
        },
        setSelectedGoal(state, action: PayloadAction<string | null>) {
            state.selectedGoal = action.payload;
        },
        setSelectedFeatures(state, action: PayloadAction<string[]\>) {
            state.selectedFeatures = action.payload;
        },
    },
});

export const {
    setActiveStep,
    setSelectedGoalType,
    setSelectedGoalModel,
    setSelectedFeatures,
} = goalSelectionSlice.actions;

export default goalSelectionSlice.reducer;