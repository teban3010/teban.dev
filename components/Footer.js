import React from 'react';
import { useRouter } from 'next/router';
import { Typography, useMediaQuery, Divider, Link } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Bio from './Bio';
import Social from './Social';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  footerText: { margin: 0 },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const { pathname } = useRouter();

  return (
    <footer className={classes.footer}>
      <Divider />
      {!matchesDesktop && pathname !== '/' && <Bio />}
      <Social />
      <Typography className={classes.footerText}>
        © {new Date().getFullYear()}, Built with{' '}
        <Link href="https://nextjs.org/"> Next.js</Link>
        &#128293;
      </Typography>
    </footer>
  );
};

export default Footer;
