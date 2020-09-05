import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Typography } from '@material-ui/core';
import { MenuBook, Mic, Message, Home, Contacts } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import ActiveLink from './ActiveLink';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationItem: {
    position: 'relative',
    color: theme.palette.text.hint,
    textDecoration: 'none',
    boxSizing: 'border-box',
    display: 'block',
    padding: 5,
    fontSize: 'large',
    fontWeight: 600,
    boxShadow: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  active: {
    color: theme.palette.primary.main,
  },
  label: {
    display: 'flex',
    alignItems: 'center',

    '& span': {
      padding: '0 10px',
    },
  },
  labelContentCentered: {
    justifyContent: 'center',
  },
}));

const NavigationItems = (props) => {
  const classes = useStyles();

  const navigationItems = [
    {
      link: '/',
      icon: <Home />,
      label: 'Home',
      exact: true,
    },
    // {
    //   link: '/resume',
    //   icon: <Contacts />,
    //   label: 'About',
    // },
    {
      link: '/blog',
      icon: <MenuBook />,
      label: 'Blog',
    },
    {
      link: '/talks',
      icon: <Message />,
      label: 'Talks',
    },
    {
      link: '/tip',
      icon: <Mic />,
      label: 'TIP',
    },
  ];

  return (
    <List className={clsx(classes.list, { [classes.listRow]: props.row })}>
      {navigationItems.map((ni) => (
        <ActiveLink
          key={ni.link}
          href={ni.link}
          exact={ni.exact}
          className={classes.navigationItem}
          activeClassName={classes.active}>
          <ListItem button onClick={props.clicked}>
            <Typography
              variant="inherit"
              className={clsx(classes.label, {
                [classes.labelContentCentered]: props.row,
              })}>
              <span>{ni.icon}</span>
              {ni.label}
            </Typography>
          </ListItem>
        </ActiveLink>
      ))}
    </List>
  );
};

export default NavigationItems;
