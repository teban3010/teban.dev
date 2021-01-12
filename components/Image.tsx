import 'lazysizes';

import React from 'react';

export interface ImageProps {
  alt?: string;
  src?: string;
  previewSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  previewSrc,
  className,
  style,
}) => {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={src}
      style={{ maxWidth: '100%', ...(style ? style : {}) }}
    />
  );
};

export default Image;
