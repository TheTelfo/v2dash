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
  ChevronRight as ChevronRightIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  Help as HelpIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleSmartPanel } from '../../app/layoutSlice';

interface SmartPanelProps {
  open: boolean;
}

const drawerWidth = 240;

const SmartPanel: React.FC<SmartPanelProps> = ({ open }) => {
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(toggleSmartPanel());
  };

  return (
    <Drawer
      variant="persistent"
      anchor="right"
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
      <IconButton onClick={handleDrawerClose} sx={{ justifyContent: 'flex-start', p: 1 }}>
        <ChevronRightIcon />
      </IconButton>
      <Divider />
      <List>
        {['Settings', 'Info', 'Help'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <SettingsIcon /> : index === 1 ? <InfoIcon /> : <HelpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SmartPanel;