import React from 'react';
import { Link } from '@material-ui/core';
import { Twitter, GitHub, YouTube, LinkedIn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { getSiteMetaData } from 'utils/helpers';

const link = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  color: '#FFF',
  width: 30,
  height: 30,
  borderRadius: 5,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    boxSizing: 'border-box',
    width: '100%',
  },
  content: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  twitter: {
    ...link,
    backgroundColor: '#00ACEE',
  },
  github: {
    ...link,
    backgroundColor: '#333',
  },
  linkedIn: {
    ...link,
    backgroundColor: '#0E76A8',
  },
  youTube: {
    ...link,
    backgroundColor: '#c4302b',
  },
}));

const Social = () => {
  const { social } = getSiteMetaData();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Link href={social.twitter} className={classes.twitter}>
          <Twitter />
        </Link>
        <Link href={social.linkedIn} className={classes.linkedIn}>
          <LinkedIn />
        </Link>
        <Link href={social.github} className={classes.github}>
          <GitHub />
        </Link>
        <Link href={social.youTube} className={classes.youTube}>
          <YouTube />
        </Link>
      </div>
    </div>
  );
};

export default Social;
