import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'components/site/seo';
import LayoutWrap from 'components/site/layoutWrap';
import LayoutInnerContent from 'components/site/layoutInnerContent';
import { Box } from '@sparkpost/matchbox';

const OhhhNoes: NextPage = () => {
  const width = 1179;
  const height = 532;
  const style = { paddingBottom: `min(350px, ${100 / (width / height)}%)` };
  return (
    <>
      <SEO
        title={'404 Page'}
        description={'Oops! Looks like we can’t find the page you’re looking for.'}
      />
      <LayoutWrap bg="white">
        <LayoutInnerContent>
          <Box display="flex" width="100%">
            <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">
              404
            </Box>
            <div className={`next-image-wrapper`} style={style}>
              <Image className="next-image" src="/404.png" layout="fill" objectFit="contain" />
            </div>
          </Box>
        </LayoutInnerContent>
      </LayoutWrap>
      ;
    </>
  );
};

export default OhhhNoes;
