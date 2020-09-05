import React from 'react';
import Link from 'next/link';

import SEO from 'components/Seo';
import { getSortedPosts } from 'utils/posts';

import { Typography, Link as MuiLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  article: {
    marginBottom: 20,
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
}));

export default function Blog({ posts }) {
  const classes = useStyles();

  return (
    <>
      <SEO title="All posts" />
      <Typography variant="h1">Blog</Typography>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug} className={classes.article}>
          <header>
            <Link href={'/post/[slug]'} as={`/post/${slug}`}>
              <Typography variant="h3" className={classes.title}>
                <MuiLink className={classes.link}>{title}</MuiLink>
              </Typography>
            </Link>
            <Typography variant="caption">{date}</Typography>
          </header>
          <section>
            <Typography variant="subtitle2" className={classes.description}>
              {description}
            </Typography>
          </section>
        </article>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
