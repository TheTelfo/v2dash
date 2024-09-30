import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
  navBarOpen: boolean;
  smartPanelOpen: boolean;
}

const initialState: LayoutState = {
  navBarOpen: false,
  smartPanelOpen: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleNavBar: (state) => {
      state.navBarOpen = !state.navBarOpen;
    },
    toggleSmartPanel: (state) => {
      state.smartPanelOpen = !state.smartPanelOpen;
    },
  },
});

export const { toggleNavBar, toggleSmartPanel } = layoutSlice.actions;
export default layoutSlice.reducer;