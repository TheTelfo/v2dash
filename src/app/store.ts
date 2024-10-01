import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layoutSlice';
import goalSelectionReducer from './goalSelectionSlice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    goalSelection: goalSelectionReducer,
    // Add other reducers here as we create them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
