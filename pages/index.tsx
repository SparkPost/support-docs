import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SparkPost Support Docs</title>
        <meta name="description" content="SparkPost Support Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        There&apos;s nothing here yet
        <button
          type="button"
          onClick={() => {
            throw new Error('Sentry Support Docs Error');
          }}
        >
          Throw error
        </button>
      </main>
    </>
  );
};

export default Home;
