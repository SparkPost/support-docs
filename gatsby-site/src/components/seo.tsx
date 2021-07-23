import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface ISEO {
  title?: string
  description?: string
  image?: string
  article?: boolean
}

const SEO: FunctionComponent<ISEO> = ({
  title,
  description,
  image,
  article,
}) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    facebookPage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="pg:type" content="article" />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:site_name" content={seo.title} />
      // Twitter
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta property="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta property="twitter:image" content={seo.image} />}
      // Facebook
      {facebookPage && <meta name="article:publisher" content={facebookPage} />}
      <meta
        property="article:author"
        content="https://www.facebook.com/sparkpost/"
      />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/sparkpost/"
      />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage
        twitterUsername
        facebookPage
      }
    }
  }
`
