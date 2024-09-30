import React from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { toggleNavBar, toggleSmartPanel } from '../../app/layoutSlice';

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  const dispatch = useDispatch();

  const handleToggleNavBar = () => {
    dispatch(toggleNavBar());
  };

  const handleToggleSmartPanel = () => {
    dispatch(toggleSmartPanel());
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="toggle navigation bar"
          onClick={handleToggleNavBar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="toggle smart panel"
          onClick={handleToggleSmartPanel}
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;