import React from 'react';
import {
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MarkdownContent from 'components/MarkdownContent';
import ActiveLink from 'components/ActiveLink';
import SEO from 'components/Seo';
import { getPostBySlug, getPostsSlugs } from 'utils/posts';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    boxShadow: `none`,
    color: theme.palette.text.secondary,
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}));

const Post = ({ post, frontmatter, nextPost, previousPost }) => {
  const classes = useStyles();

  return (
    <Container>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <Breadcrumbs>
        <ActiveLink href={'/blog'} className={classes.link}>
          <Typography style={{ margin: 0 }}>Blog</Typography>
        </ActiveLink>
        <Typography style={{ margin: 0 }} color="textPrimary">
          {frontmatter.title}
        </Typography>
      </Breadcrumbs>

      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-6xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>
          <p className="text-sm">{frontmatter.date}</p>
        </header>
        <MarkdownContent escapeHtml={false} source={post.content} />
        <Divider className={classes.divider} />
      </article>
      <nav
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}>
        {previousPost ? (
          <ActiveLink
            href={'/post/[slug]'}
            as={`/post/${previousPost.slug}`}
            className={classes.link}>
            <Link>← {previousPost.frontmatter.title}</Link>
          </ActiveLink>
        ) : (
          <div />
        )}
        {nextPost ? (
          <ActiveLink
            href={'/post/[slug]'}
            as={`/post/${nextPost.slug}`}
            className={classes.link}>
            <Link>{nextPost.frontmatter.title} →</Link>
          </ActiveLink>
        ) : (
          <div />
        )}
      </nav>
    </Container>
  );
};

export default Post;

export const getStaticPaths = () => ({
  paths: getPostsSlugs(),
  fallback: false,
});

export const getStaticProps = async ({ params: { slug } }) => {
  const data = await getPostBySlug(slug);

  if (!data.previousPost) {
    data.previousPost = null;
  }

  if (!data.nextPost) {
    data.nextPost = null;
  }

  return { props: data };
};
