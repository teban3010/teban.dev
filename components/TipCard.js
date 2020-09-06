import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {
  Typography,
  Box,
  Link as MuiLink,
  Card,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Image from 'components/Image';

const useStyles = makeStyles((theme) => ({
  article: {
    marginBottom: 20,
    maxWidth: 350,
  },
  articleList: {
    maxWidth: '100%',
    maxHeight: 150,
  },
  link: {
    boxShadow: `none`,
    color: theme.palette.text.primary,

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',

    '& div': {
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },

    '& img': {
      margin: 0,
    },
  },
  cardList: {
    flexDirection: 'row',

    '& img': {
      height: 150,
    },
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  description: {
    color: theme.palette.text.secondary,
  },
}));

const TipCard = ({ title, description, date, src, slug, listDisplay }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      component="article"
      key={slug}
      className={clsx(classes.article, {
        [classes.articleList]: matchesDesktop && listDisplay,
      })}>
      <Link className={classes.link} href={'/tip/[slug]'} as={`/tip/${slug}`}>
        <Card
          className={clsx(classes.card, {
            [classes.cardList]: matchesDesktop && listDisplay,
          })}>
          {src && (
            <Image
              alt={title}
              src={
                src.includes('http://') || src.includes('https://')
                  ? src
                  : require(`../content/assets/${src}`)
              }
              previewSrc={
                src.includes('http://') || src.includes('https://')
                  ? src
                  : require(`../content/assets/${src}?lqip`)
              }
            />
          )}
          <div style={{ width: '100%' }}>
            <header>
              <Typography variant="h3" className={classes.title}>
                <MuiLink className={classes.link}>{title}</MuiLink>
              </Typography>
              <Typography variant="caption">{date}</Typography>
            </header>
            <section>
              <Typography variant="subtitle2" className={classes.description}>
                {description}
              </Typography>
            </section>
          </div>
        </Card>
      </Link>
    </Box>
  );
};

export default TipCard;
