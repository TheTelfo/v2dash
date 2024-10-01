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
  TableChart as TableChartIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleNavBar } from '../../app/layoutSlice';

interface NavBarProps {
  open: boolean;
}

const drawerWidth = 240;

const NavBar: React.FC<NavBarProps> = ({ open }) => {
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(toggleNavBar());
  };

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
        {['Dashboard', 'Charts', 'Tables'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <DashboardIcon />
                ) : index === 1 ? (
                  <BarChartIcon />
                ) : (
                  <TableChartIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;
