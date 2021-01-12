import Image from './Image';
import React from 'react';

export interface BannerProps {
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({ alt }) => (
  <Image
    src={require('../content/assets/banner.png')}
    previewSrc={require('../content/assets/banner.png?lqip')}
    alt={alt}
  />
);

export default Banner;
