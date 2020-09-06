import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useMediaQuery, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(3),
    maxWidth: '100%',
    position: 'relative',
    minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      maxWidth: `calc(100% - ${theme.drawerWidth}px)`,
      flexShrink: 0,
    },
  },
  contentFullWith: {
    maxWidth: '100%',
  },
}));

const Layout = ({ children, window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useLayout, setUseLayout] = useState(true);
  const [title, setTitle] = useState(false);
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (pathname.includes('404')) {
      setTitle('Page Not Found');
      setUseLayout(true);

      return;
    }

    const splittedPath = pathname.split('/');

    setTitle(
      splittedPath.length > 1
        ? splittedPath[1].toLocaleUpperCase()
        : 'teban.dev'
    );

    setUseLayout(pathname !== '/');
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      {useLayout && (
        <>
          {!matchesDesktop && (
            <Toolbar title={title} onDrawerToggle={handleDrawerToggle} />
          )}
          <SideDrawer
            mobileOpen={mobileOpen}
            onDrawerToggle={handleDrawerToggle}
            window={window}
          />
        </>
      )}
      <main
        className={clsx(classes.content, {
          [classes.contentFullWith]: !useLayout,
        })}>
        <Container>
          {!matchesDesktop && useLayout && <Container className={classes.toolbar} />}
          {children}
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
