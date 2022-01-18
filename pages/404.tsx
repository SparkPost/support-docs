import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const { asPath } = useRouter();
  const category = asPath.split('/')[1];

  return (
    <>
      <SEO
        title={'404 Page'}
        description={'Oops! Looks like we can’t find the page you’re looking for.'}
      />
      <LayoutWrap bg="white">
        <LayoutInnerContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            maxWidth="86vh"
            m="0 auto"
          >
            <Box>
              <Box
                as="h1"
                fontSize={['800', null, 'clamp(3.5rem, 18vh, 14.27rem)']}
                lineHeight={['800', null, 'clamp(3.5rem, 20vh, 17.84rem)']}
                fontWeight="semibold"
                textAlign="center"
              >
                404
              </Box>
              <Box
                as="p"
                fontSize={['200', null, 'clamp(1rem, 4vh, 2rem)']}
                lineHeight={['200', null, 'clamp(1.25rem, 4.2vh, 2.5rem)']}
                textAlign="center"
                mt={['100', null, '0']}
              >
                Oops! Looks like we can’t find the page you’re looking for.
              </Box>
              <Box
                as="p"
                fontSize={['200', null, 'clamp(1rem, 4vh, 2rem)']}
                lineHeight={['200', null, 'clamp(1.25rem, 4.2vh, 2.5rem)']}
                textAlign="center"
                my={['400', null, '500']}
              >
                Return to{' '}
                <Link href={`/${category}`} passHref>
                  <StyledLink as="a" href="/docs">
                    Home
                  </StyledLink>
                </Link>
                .
              </Box>
            </Box>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              width="100%"
              mt="500"
              mb="700"
            >
              <Image
                className="next-image"
                alt="404 image"
                src="/404.png"
                width="1179"
                height="532"
              />
            </Box>
          </Box>
        </LayoutInnerContent>
      </LayoutWrap>
    </>
  );
};

export default OhhhNoes;
