import React from 'react';
import Head from 'next/head';
import { getSiteMetaData } from 'utils/helpers';

const SEO = ({ title, description = '', previewImage }) => {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;
  const metaPreviewImage = previewImage
    ? previewImage.includes('http://') || previewImage.includes('https://')
      ? previewImage
      : require(`../content/assets/${previewImage}`)
    : require('../content/assets/banner.png');

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      {/* Open Graph */}
      <meta property="og:url" content={'teban.dev'} key="ogurl" />
      <meta property="og:image" content={metaPreviewImage} key="ogimage" />
      <meta property="og:site_name" content={'teban.dev'} key="ogsitename" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} key="ogtitle" />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
        key="ogdesc"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta
        name="twitter:creator"
        content={siteMetadata.social.twitter}
        key="twhandle"
      />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
    </Head>
  );
};

export default SEO;
