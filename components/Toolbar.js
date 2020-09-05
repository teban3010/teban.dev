import React from 'react';
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar as MuiToolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
      marginLeft: theme.drawerWidth,
    },
  },
  toolbarTitle: {
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Toolbar = ({ onDrawerToggle, title }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <MuiToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          className={classes.menuButton}>
          <Menu />
        </IconButton>
        <Typography
          className={classes.toolbarTitle}
          variant="h2"
          component="p"
          noWrap>
          {title}
        </Typography>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
