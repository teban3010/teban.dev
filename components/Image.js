import React from 'react';
import 'lazysizes';

const Image = ({ alt, src, previewSrc, className, style }) => {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={src}
      style={{ maxWidth: '100%', ...style }}
    />
  );
};

export default Image;
