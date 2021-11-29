import { Box, BoxProps /*, Button*/ } from '@sparkpost/matchbox';
import LogoWhite from 'components/site/logoWhite';
import styled from 'styled-components';

const StyledNav = styled(Box)<BoxProps>`
  list-style: none;
  a {
    color: inherit;
    text-decoration: none;
    &:visited {
      color: inherit;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Box
      as="footer"
      pt="750"
      pb="800"
      backgroundColor="gray.900"
      color="white"
      display="flex"
      justifyContent="center"
    >
      <Box width="100%" maxWidth="1400" px="400">
        {/* Waiting on Copy */}
        {/* <Box fontSize="400" lineHeight="400" pb="200" fontWeight="semibold">Turpis nunc eget lorem dolor sed viverra ipsum</Box>
        <Box fontSize="400" lineHeight="400" pb="450">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae.</Box>
        <Button as="a" href="https://www.sparkpost.com/newsletter" target="_blank" rel="noreferrer" size="small" color="blue" variant="filled">Subscribe To Our Newsletter</Button> */}
        <Box as="hr" mt="800" mb="400" backgroundColor="white" />
        <Box display="flex" justifyContent="space-between">
          <LogoWhite />
          <StyledNav as="ul" fontSize="300" fontWeight="semibold">
            <Box
              as="li"
              display={['block', null, 'inline-block']}
              pl="600"
              mt={['200', null, '0']}
              mb={['300', null, '0']}
              color="white"
            >
              <a href="https://www.sparkpost.com/features" target="_blank" rel="noreferrer">
                Features
              </a>
            </Box>
            <Box
              as="li"
              display={['block', null, 'inline-block']}
              pl="600"
              mb={['300', null, '0']}
              color="white"
            >
              <a href="https://www.sparkpost.com/pricing" target="_blank" rel="noreferrer">
                Pricing
              </a>
            </Box>
            <Box
              as="li"
              display={['block', null, 'inline-block']}
              pl="600"
              mb={['300', null, '0']}
              color="white"
            >
              <a href="https://www.sparkpost.com/blog" target="_blank" rel="noreferrer">
                Blog
              </a>
            </Box>
          </StyledNav>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
