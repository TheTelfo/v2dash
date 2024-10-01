// src/components/layout/NavBar.tsx

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  ListItemButton,
  Toolbar,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  Flag as FlagIcon,
  Layers as LayersIcon,
  Build as BuildIcon,
  Insights as InsightsIcon,
  Assessment as AssessmentIcon,
  BuildCircle as BuildCircleIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleNavBar } from '../../app/layoutSlice';
import { Link as RouterLink } from 'react-router-dom';

interface NavBarProps {
  open: boolean;
}

const drawerWidth = 240;

const NavBar: React.FC<NavBarProps> = ({ open }) => {
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(toggleNavBar());
  };

  const menuItems = [
    { text: 'Overview', icon: <DashboardIcon />, path: '/' },
    { text: 'Data', icon: <BarChartIcon />, path: '/data' },
    { text: 'Goals', icon: <FlagIcon />, path: '/goals' },
    { text: 'Logic Layer', icon: <LayersIcon />, path: '/logic-layer' },
    { text: 'Actions', icon: <BuildIcon />, path: '/actions' },
    { text: 'Insights', icon: <InsightsIcon />, path: '/insights' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Builder', icon: <BuildCircleIcon />, path: '/builder' },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar /> {/* Spacer to align Drawer below TopBar */}
      <IconButton onClick={handleDrawerClose} sx={{ justifyContent: 'flex-end', p: 1 }}>
        <ChevronLeftIcon />
      </IconButton>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;

