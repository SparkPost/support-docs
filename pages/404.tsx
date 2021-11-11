import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from 'components/site/seo';
import LayoutWrap from 'components/site/layoutWrap';
import LayoutInnerContent from 'components/site/layoutInnerContent';
import { Box } from '@sparkpost/matchbox';
import styled from 'styled-components';
import css from '@styled-system/css';

const StyledLink = styled(Box)`
  &,
  &:visited {
    ${css({
      color: 'gray.900',
    })}
  }

  &:hover {
    ${css({
      color: 'blue.700',
    })}
  }
`;

const OhhhNoes: NextPage = () => {
  return (
    <>
      <SEO
        title={'404 Page'}
        description={'Oops! Looks like we can’t find the page you’re looking for.'}
      />
      <LayoutWrap bg="white">
        <LayoutInnerContent>
          <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box
              as="h1"
              fontSize={['800', null, '228.39px']}
              lineHeight={['800', null, '285.49px']}
              fontWeight="semibold"
              mt={['0', null, '750']}
            >
              404
            </Box>
            <Box
              as="p"
              fontSize={['200', null, '600']}
              lineHeight={['200', null, '600']}
              textAlign="center"
              mt={['100', null, '0']}
            >
              Oops! Looks like we can’t find the page you’re looking for.
            </Box>
            <Box
              as="p"
              fontSize={['200', null, '600']}
              lineHeight={['200', null, '600']}
              textAlign="center"
              my={['400', null, '500']}
            >
              Return to{' '}
              <Link href="/docs" passHref>
                <StyledLink as="a" href="/docs">
                  Home
                </StyledLink>
              </Link>
              .
            </Box>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              width="100%"
              mt="500"
              mb={['700', null, '434px']}
            >
              <Image className="next-image" src="/404.png" width="1179" height="532" />
            </Box>
          </Box>
          {/* <div className={`next-image-wrapper`} style={style}> */}

          {/* </div> */}
        </LayoutInnerContent>
      </LayoutWrap>
    </>
  );
};

export default OhhhNoes;
