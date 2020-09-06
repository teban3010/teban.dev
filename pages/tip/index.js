import React, { useState } from 'react';
import clsx from 'clsx';

import SEO from 'components/Seo';
import { getSortedTips } from 'utils/tip';

import {
  Typography,
  Box,
  useMediaQuery,
  Button,
  Divider,
} from '@material-ui/core';
import { Apps, ListAlt } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import TipCard from 'components/TipCard';
import TIPDescription from 'components/TIPDescription';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '1.75rem',
  },
  tipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  tipsContainerList: {
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: theme.palette.background.paper,
    margin: 5,
  },
}));

const Tip = ({ tip }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [listDisplay, setListDisplay] = useState(true);

  return (
    <>
      <SEO title="All tips" />
      <Box component="section" className={classes.header}>
        <Typography variant="h1" component="h1">
          Tech Podcast Interview
        </Typography>
        <TIPDescription />
        {matchesDesktop && (
          <Box className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => setListDisplay(false)}
              size="small"
              disabled={!listDisplay}>
              <Apps />
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => setListDisplay(true)}
              size="small"
              disabled={listDisplay}>
              <ListAlt />
            </Button>
          </Box>
        )}
        <Divider />
      </Box>
      <section
        className={clsx(classes.tipsContainer, {
          [classes.tipsContainerList]: matchesDesktop && listDisplay,
        })}>
        {tip.map(
          ({
            frontmatter: { title, description, date, featuredImage: src },
            slug,
          }) => (
            <TipCard
              key={title}
              title={title}
              description={description}
              date={date}
              src={src}
              slug={slug}
              listDisplay={listDisplay}
            />
          )
        )}
      </section>
    </>
  );
};

export default Tip;

export const getStaticProps = () => ({
  props: {
    tip: getSortedTips(),
  },
});
