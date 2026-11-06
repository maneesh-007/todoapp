import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Divider
} from '@mui/material';

// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 260;

export default function UserHeader() {
  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sub-menu toggle states
  const [myListOpen, setMyListOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  // Active selection state
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMyListClick = () => {
    setMyListOpen(!myListOpen);
  };

  const handleSettingClick = () => {
    setSettingOpen(!settingOpen);
  };

  const handleItemSelect = (itemName) => {
    setSelectedItem(itemName);
  };

  // Navigation Drawer Content
  const drawerContent = (
    <Box sx={{ overflow: 'auto' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          My To-Do List
        </Typography>
      </Toolbar>
      <Divider />
      <List component="nav">
        {/* 1. Dashboard */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedItem === 'Dashboard'}
            onClick={() => handleItemSelect('Dashboard')}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* 2. My List (Collapsible Sub-menu) */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleMyListClick}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="My List" />
            {myListOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={myListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {/* My Important List */}
              <ListItemButton
                selected={selectedItem === 'My Important List'}
                onClick={() => handleItemSelect('My Important List')}
              >
                <ListItemIcon>
                  <StarIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My Important List" />
              </ListItemButton>

              {/* My Casual List */}
              <ListItemButton
                selected={selectedItem === 'My Casual List'}
                onClick={() => handleItemSelect('My Casual List')}
              >
                <ListItemIcon>
                  <PeopleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My Casual List" />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>

        {/* 3. Setting (Collapsible Sub-menu) */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleSettingClick}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
            {settingOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={settingOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {/* User Profile Update */}
              <ListItemButton
                selected={selectedItem === 'User Profile Update'}
                onClick={() => handleItemSelect('User Profile Update')}
              >
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="User Profile Update" />
              </ListItemButton>

              {/* Password Update */}
              <ListItemButton
                selected={selectedItem === 'Password Update'}
                onClick={() => handleItemSelect('Password Update')}
              >
                <ListItemIcon>
                  <LockIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Password Update" />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Top Header Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectedItem}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Navigation Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="side navigation"
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
}