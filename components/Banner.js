import React from 'react';
import Image from './Image';

const Banner = ({ alt }) => (
  <Image
    src={require('../content/assets/banner.png')}
    previewSrc={require('../content/assets/banner.png?lqip')}
    alt={alt}
  />
);

export default Banner;
