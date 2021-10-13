import Head from 'next/head';
import { useRouter } from 'next/router';

type SeoProps = {
  title?: string;
  description?: string;
};

const SEO = (props: SeoProps): JSX.Element => {
  const { title = "SparkPost Support", description = "SparkPost Support Docs" } = props;
  const router = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={router.asPath}></link>
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
          <meta name="og:site_name" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta name="og:locale" content="en_US" />
      <meta name="og:url" content={router.asPath} />
      <meta name="og:site_name" content="SparkPost Support" />
      <meta name="twitter:site" content="SparkPost Support"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:image" content="/SparkPostLogo.png" />
      <meta name="twitter:image" content="/SparkPostLogo.png" />
      <meta name="twitter:card" content="summary_large_image"></meta>
    </Head>
  )
}

export default SEO;