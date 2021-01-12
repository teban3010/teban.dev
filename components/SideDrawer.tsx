import { Divider, Drawer, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Bio from './Bio';
import { MyTheme } from 'styles/theme';
import NavigationItems from './NavigationItems';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const useStyles = makeStyles((theme: MyTheme) => ({
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

export interface DrawerProps {
  open: boolean;
  onClose?: any;
  container?: any;
}

const DesktopDrawer: React.FC<DrawerProps> = ({ children }) => {
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

const MobileDrawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  container,
}) => {
  const classes = useStyles();
  const theme = useTheme();

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

const SideDrawer = ({ open, onDrawerToggle, container }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const DrawerComponent = matchesDesktop ? DesktopDrawer : MobileDrawer;

  return (
    <div className={classes.drawer}>
      <DrawerComponent
        open={open}
        onClose={onDrawerToggle}
        container={container}>
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
