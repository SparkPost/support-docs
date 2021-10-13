import type { NextPage } from 'next';
import SEO from 'components/site/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
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
