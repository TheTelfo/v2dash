// src/app/App.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CssBaseline, ThemeProvider, createTheme, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';
import NavBar from '../components/layout/NavBar';
import SmartPanel from '../components/layout/SmartPanel';
import { RootState } from './store';
import Overview from '../pages/Overview';
import Data from '../pages/Data';
import Goals from '../pages/Goals';
import LogicLayer from '../pages/LogicLayer';
import Actions from '../pages/Actions';
import Insights from '../pages/Insights';
import Reports from '../pages/Reports';
import Builder from '../pages/Builder';

const theme = createTheme({
  // Customize your theme here
});

const App: React.FC = () => {
  const { navBarOpen, smartPanelOpen } = useSelector((state: RootState) => state.layout);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <TopBar title="Bend Logic Dashboard" />
        <NavBar open={navBarOpen} /> {/* Now inside Router */}
        <SmartPanel open={smartPanelOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* Spacer to push content below TopBar */}
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/data" element={<Data />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/logic-layer" element={<LogicLayer />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/builder" element={<Builder />} />
            {/* Add more routes as needed */}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;



