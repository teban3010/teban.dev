import { Container, useMediaQuery } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Footer from './Footer';
import { MyTheme } from 'styles/theme';
import SideDrawer from './SideDrawer';
import Toolbar from './Toolbar';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: MyTheme) => ({
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

const Layout: React.FC<any> = ({ children, window }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useLayout, setUseLayout] = useState(true);
  const [title, setTitle] = useState('');
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {useLayout && (
        <>
          {!matchesDesktop && (
            <Toolbar title={title} onDrawerToggle={handleDrawerToggle} />
          )}
          <SideDrawer
            open={mobileOpen}
            onDrawerToggle={handleDrawerToggle}
            container={container}
          />
        </>
      )}
      <main
        className={clsx(classes.content, {
          [classes.contentFullWith]: !useLayout,
        })}>
        <Container>
          {!matchesDesktop && useLayout && <div className={classes.toolbar} />}
          {children}
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
