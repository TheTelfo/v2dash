import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CssBaseline, ThemeProvider, createTheme, Toolbar } from '@mui/material';
import TopBar from '../components/layout/TopBar';
import NavBar from '../components/layout/NavBar';
import SmartPanel from '../components/layout/SmartPanel';
import MainContent from '../components/layout/MainContent';
import { RootState } from './store';

const theme = createTheme({
  // Customize your theme here
});

const App: React.FC = () => {
  const { navBarOpen, smartPanelOpen } = useSelector((state: RootState) => state.layout);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
        <TopBar title="Bend Logic Dashboard" />
        <NavBar open={navBarOpen} />
        <SmartPanel open={smartPanelOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* Spacer to push content below TopBar */}
          <MainContent>
            {/* Inject different content here */}
            {/* Example: <DashboardPage /> */}
          </MainContent>
        </Box>
      
    </ThemeProvider>
  );
};

export default App;