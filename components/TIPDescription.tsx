import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import Banner from './Banner';

const useStyles = makeStyles((theme) => ({
  link: {
    boxShadow: `none`,
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
}));

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

const ListItemLink = (props) => <ListItem button component="a" {...props} />;

const TIPDescription = () => {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
};

export default TIPDescription;
