import React from 'react';
import { Drawer, Divider, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Bio from './Bio';
import NavigationItems from './NavigationItems';
import ThemeSwitch from './ThemeSwitch';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
}));

const DesktopDrawer = ({ children }) => {
  const classes = useStyles();
  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      open>
      {children}
    </Drawer>
  );
};

const MobileDrawer = ({ open, onClose, children, window }) => {
  const classes = useStyles();
  const theme = useTheme();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}>
      {children}
    </Drawer>
  );
};

const SideDrawer = ({ mobileOpen, onDrawerToggle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const DrawerComponent = matchesDesktop ? DesktopDrawer : MobileDrawer;

  return (
    <div className={classes.drawer}>
      <DrawerComponent open={mobileOpen} onClose={onDrawerToggle}>
        <ThemeSwitch />
        {matchesDesktop && (
          <>
            <Bio />
            <Divider />
          </>
        )}
        <NavigationItems clicked={onDrawerToggle} />
      </DrawerComponent>
    </div>
  );
};

export default SideDrawer;
