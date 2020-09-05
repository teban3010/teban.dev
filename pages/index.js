import React from 'react';
import { Container, Paper, Divider } from '@material-ui/core';

import SEO from 'components/Seo';
import Bio from 'components/Bio';
import Banner from 'components/Banner';
import NavigationItems from 'components/NavigationItems';

export default function Home() {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Paper style={{ maxWidth: 900 }}>
        <SEO title="Home" />
        <Banner />
        <Bio hideProfilePic />
        <Divider />
        <NavigationItems row />
      </Paper>
    </Container>
  );
}
