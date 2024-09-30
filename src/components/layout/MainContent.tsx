import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Box } from '@mui/material';

const MainContent: React.FC = () => {
  const { navBarOpen, smartPanelOpen } = useSelector((state: RootState) => state.layout);
  const drawerWidth = 240; // Ensure this matches the width of your NavBar and SmartPanel

  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        padding: theme.spacing(0.5),
        transition: theme.transitions.create(['margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: navBarOpen ? `${drawerWidth}px` : '0px',
        marginRight: smartPanelOpen ? `${drawerWidth}px` : '0px',
        height: 'calc(100vh - 64px)', // Adjust based on your TopBar height
        overflow: 'hidden',
        backgroundColor: 'grey', // For visualization; remove or change as needed
      })}
    >
      {/* Your main content goes here */}
    </Box>
  );
};

export default MainContent;


