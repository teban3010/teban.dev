import Image from './Image';
import React from 'react';
import { Typography } from '@material-ui/core';
import { getSiteMetaData } from 'utils/helpers';
import { makeStyles } from '@material-ui/core/styles';

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

export interface BioProps {
  hideProfilePic?: boolean;
}

const Bio: React.FC<BioProps> = ({ hideProfilePic }) => {
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
