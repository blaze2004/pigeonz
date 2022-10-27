import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';

import SideNavBar from '../components/sidenavigation';
import Header from '../components/header';
// import Header from '../components/header';
import './base.css';
import { Routes } from '../../values/routes';

import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth=220;

function GetTitle() {
  let title;
  const location=useLocation();
  const currentPath=location.pathname.replace(/\/$/, '');

  title=[...Routes].find(([key, val]) => val===currentPath)[0]
  return title;
}

export function BaseLayout() {

  const { signOut }=useAuthenticator((context) => [
    context.signOut,
  ]);
  const navigate=useNavigate();

  function logOut() {
    signOut();
    navigate(Routes.get("Auth"));
  }

  const [mobileOpen, setMobileOpen]=React.useState(false);

  const handleDrawerToggle=() => {
    setMobileOpen(!mobileOpen);
  };

  const container=window!==undefined? () => window.document.body:undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <SideNavBar onlogOut={() => logOut()} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', lg: 'block' },
            '& .MuiDrawer-body': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <SideNavBar onlogOut={() => logOut()} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Header>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Heading level={3}>
              {GetTitle()}
            </Heading>
          </Toolbar>
        </Header>
        <Outlet />
      </Box>
    </Box>
  );
}