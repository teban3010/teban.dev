import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import SEO from 'components/Seo';
import { getSortedTips } from 'utils/tip';

import {
  Typography,
  Box,
  Link as MuiLink,
  useMediaQuery,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
} from '@material-ui/core';
import { Apps, ListAlt } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import Banner from 'components/Banner';
import Image from 'components/Image';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '1.75rem',
  },
  article: {
    marginBottom: 20,
    maxWidth: 350,
  },
  articleList: {
    maxWidth: '100%',
    maxHeight: 150,
  },
  tipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  tipsContainerList: {
    flexDirection: 'column',
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
  link: {
    boxShadow: `none`,
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  description: {
    color: theme.palette.text.secondary,
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

const ListItemLink = (props) => <ListItem button component="a" {...props} />;

const Tip = ({ tip }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [listDisplay, setListDisplay] = useState(true);

  const tipLinks = [
    {
      href: 'https://twitch.tv/teban3010',
      color: '#6441a5',
      icon: faTwitch,
      description: 'Podes ver cada edición en vivo y hacer consultas',
    },
    {
      href: 'https://anchor.fm/teban3010',
      color: '#292f36',
      icon: faPodcast,
      description: 'Podes escuchar alguna edición pasada',
    },
    {
      href:
        'https://www.youtube.com/playlist?list=PLhozVkJRFf2sDvQ7AaXIRL6NaGjEriME9',
      color: '#c4302b',
      icon: faYoutube,
      description: 'Podes ver alguna edición pasada',
    },
    {
      href: 'https://twitter.com/TIP_PodcastOk',
      color: '#00ACEE',
      icon: faTwitter,
      description: 'Seguinos en twitter para enterarte de las novedades',
    },
    {
      href: 'https://cafecito.app/techinterviewpodcast',
      color: '#8fa2cc',
      icon: faCoffee,
      description: 'Si queres darnos, podés darnos un cafecito! :)',
    },
  ];

  return (
    <>
      <SEO title="All tips" />
      <Box component="section" className={classes.header}>
        <Typography variant="h1" component="h1">
          Tech Podcast Interview
        </Typography>
        <Banner />
        <Typography variant="body1">
          Tech Podcast Interview (TIP) es un espacio para juntarnos a charlar de
          tecnología. Todas las semanas habrá al menos una nueva edición la cual
          se transmite en vivo por{' '}
          <a href="https://twitch.tv/teban3010" target="blank">
            Twitch
          </a>{' '}
          y son anunciadas por{' '}
          <a href="https://twitter.com/TIP_PodcastOk" target="blank">
            Twitter
          </a>
          .
        </Typography>
        <List component="ul" dense>
          {tipLinks.map((l) => (
            <ListItemLink
              key={l.href}
              className={classes.link}
              href={l.href}
              target="blank">
              <ListItemIcon
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesomeIcon color={l.color} icon={l.icon} height={25} />
              </ListItemIcon>
              <ListItemText primary={l.description} />
            </ListItemLink>
          ))}
        </List>
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
      <Box
        component="section"
        className={clsx(classes.tipsContainer, {
          [classes.tipsContainerList]: matchesDesktop && listDisplay,
        })}>
        {tip.map(
          ({
            frontmatter: { title, description, date, featuredImage: src },
            slug,
          }) => (
            <Box
              component="article"
              key={slug}
              className={clsx(classes.article, {
                [classes.articleList]: matchesDesktop && listDisplay,
              })}>
              <Link
                className={classes.link}
                href={'/tip/[slug]'}
                as={`/tip/${slug}`}>
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
                          : require(`../../content/assets/${src}`)
                      }
                      previewSrc={
                        src.includes('http://') || src.includes('https://')
                          ? src
                          : require(`../../content/assets/${src}?lqip`)
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
                      <Typography
                        variant="subtitle2"
                        className={classes.description}>
                        {description}
                      </Typography>
                    </section>
                  </div>
                </Card>
              </Link>
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default Tip;

export const getStaticProps = () => ({
  props: {
    tip: getSortedTips(),
  },
});
