import React from 'react';
import { Container, Typography } from '@material-ui/core';

import Image from 'components/Image';

const Custom404 = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        src={require('../content/assets/404.png')}
        previewSrc={require('../content/assets/404.png?lqip')}
        alt="404"
        style={{ width: '100%' }}
      />
      <Typography variant="h1">OOPS</Typography>
      <Typography variant="h2">Page not found</Typography>
    </Container>
  );
};

export default Custom404;
