import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * See: https://nextjs.org/docs/advanced-features/custom-document
 */
class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/assets/Calibre.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/Calibre-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/Calibre-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          {process.env.NODE_ENV === 'production' && (
            <>
              {/* Google Tag Manager (noscript) */}
              <noscript>
                <iframe
                  title="Google Tag Manager (noscript)"
                  src={`//www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                />
              </noscript>
              {/* End Google Tag Manager (noscript) */}
            </>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
