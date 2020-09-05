import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';
import { getSiteMetaData } from 'utils/helpers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: `flex`,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  description: {
    textAlign: 'center',
    margin: 0,
  },
}));

const Bio = ({ hideProfilePic }) => {
  const classes = useStyles();
  const { author } = getSiteMetaData();

  return (
    <div className={classes.container}>
      {!hideProfilePic && (
        <Image
          src={require('../content/assets/profile.jpg')}
          previewSrc={require('../content/assets/profile.jpg?lqip')}
          alt={author.name}
          style={{
            marginBottom: 20,
            minWidth: 150,
            minHeight: 150,
            width: '100%',
            maxWidth: 250,
            borderRadius: `100%`,
            border: '5px solid black',
          }}
        />
      )}
      <Typography className={classes.description}>
        Written and developed by <strong>{author.name}</strong> {author.summary}
      </Typography>
    </div>
  );
};

export default Bio;
