import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteName,
    siteUrl,
    defaultImage,
    twitterUsername,
    facebookPage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta name="description" content={seo.description} />
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="pg:type" content="article" />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:site_name" content={site.siteMetadata.siteName} />
      // Twitter
      <meta name="twitter:card" content="summary_large_image" />
      {site.siteMetadata.title} && (
      <meta name="twitter:title" content={site.siteMetadata.title} />
      )}
      {seo.description && (
        <meta property="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta property="twitter:image" content={seo.image} />}
      // Facebook
      <meta
        property="article:author"
        content="https://www.facebook.com/sparkpost/"
      />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/sparkpost/"
      />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // image: PropTypes.string,
  // article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  // image: null,
  // article: false,
};

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        defaultDescription: description
        siteName
        siteUrl: url
        defaultImage
        twitterUsername
        facebookPage
      }
    }
  }
`;
