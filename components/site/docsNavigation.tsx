import React from 'react';
import { getWindow } from 'utils/ssr';
import Link from 'next/link';
import { Box, BoxProps } from '@sparkpost/matchbox';
import { PeopleOutline, Code, DeviceHub, Article, Email } from '@sparkpost/matchbox-icons';
import styled from 'styled-components';
import css from '@styled-system/css';
// import { tokens } from '@sparkpost/design-tokens';
import useStatus from 'hooks/useStatus';

const StyledLink = styled(Box)<BoxProps & { $active?: boolean }>`
  cursor: pointer;
  overflow-wrap: anywhere;
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    ${({ $active }) => {
      return css({
        bg: $active ? 'blue.700' : 'gray.200',
        color: $active ? 'white' : 'inherit',
      });
    }}
  }
  ${({ $active }) => {
    return css({
      bg: $active ? 'blue.700' : 'transparent',
      color: $active ? 'white' : 'inherit',
    });
  }}
`;

const StatusColorMap = {
  none: 'green.700',
  minor: 'yellow.400',
  major: 'brand.orange',
  critical: 'red.700',
};

const DocsNavigation = () => {
  const { status } = useStatus();
  const environment = getWindow();

  return (
    <Box width="260px" position="sticky" top="0">
      <StyledLink $active={environment?.location?.pathname === '/docs'}>
        <Link href="/docs" passHref>
          <Box
            as="a"
            display="inline-block"
            fontSize="200"
            fontWeight="semibold"
            py="200"
            lineHeight="200"
            px="500"
          >
            Help & API
          </Box>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/getting-started/" passHref>
          <a>
            <Box as="span">Getting Started</Box>
          </a>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/user-guide/" passHref>
          <a>
            <Box as="span">Guides</Box>
          </a>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/deliverability/" passHref>
          <a>
            <Box as="span">Deliverability</Box>
          </a>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/tech-resources/" passHref>
          <a>
            <Box as="span">Tech Resources</Box>
          </a>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/reporting/" passHref>
          <a>
            <Box as="span">Reporting</Box>
          </a>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/recipient-validation/" passHref>
          <a>
            <Box as="span">Recipient Validation</Box>
          </a>
        </Link>
      </StyledLink>
      <StyledLink px="500" py="200">
        <Link href="/docs/integrations/" passHref>
          <a>
            <Box as="span">Integrations</Box>
          </a>
        </Link>
      </StyledLink>
      <Box py="450" mt="450" borderTop="400">
        <StyledLink px="500" py="200">
          <Link href="/docs/faq/" passHref>
            <a>
              <Box as="span">FAQ</Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link href="/docs/my-account-and-profile/" passHref>
            <a>
              <Box as="span">My Account & Profile</Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link href="/docs/billing/" passHref>
            <a>
              <Box as="span">Billing</Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link href="https://www.sparkpost.com/submit-a-ticket/" passHref>
            <a target="_blank">
              <Box as="span">Submit A Ticket</Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link
            href="http://slack.sparkpost.com/?_ga=2.149922291.418019158.1635793484-1444072519.1556951988"
            passHref
          >
            <a>
              <Box as="span">Community</Box>
            </a>
          </Link>
        </StyledLink>
      </Box>
      <Box py="450" mt="450" borderTop="400">
        <StyledLink px="500" py="200">
          <Link href="https://www.sparkpost.com/email-tools/" passHref>
            <a target="_blank">
              <Email size={20} />
              <Box as="span" pl="300">
                Email Tools
              </Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link href="https://www.sparkpost.com/case-studies/" passHref>
            <a target="_blank">
              <PeopleOutline size={20} />
              <Box as="span" pl="300">
                Customers
              </Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link href="https://www.sparkpost.com/blog/category/developer/" passHref>
            <a target="_blank">
              <Code size={20} />
              <Box as="span" pl="300">
                Developer Blog
              </Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link
            href="https://developers.sparkpost.com/?_ga=2.71296469.418019158.1635793484-1444072519.1556951988"
            passHref
          >
            <a target="_blank">
              <DeviceHub size={20} />
              <Box as="span" pl="300">
                Developer Hub
              </Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link
            href="https://developer.sparkpost.com/api?_ga=2.49717731.418019158.1635793484-1444072519.1556951988"
            passHref
          >
            <a target="_blank">
              <Article size={20} />
              <Box as="span" pl="300">
                API Documentation
              </Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link
            href="https://status.sparkpost.com/?_ga=2.49717731.418019158.1635793484-1444072519.1556951988"
            passHref
          >
            <a target="_blank">
              {/* Placeholder until Circle icon is added to Matchbox */}
              <Box
                as="span"
                display="inline-block"
                width="20px"
                height="20px"
                verticalAlign="middle"
              >
                <Box
                  width="16px"
                  height="16px"
                  backgroundColor={StatusColorMap[status]}
                  borderRadius="50%"
                />
              </Box>
              <Box as="span" pl="300">
                Service Status
              </Box>
            </a>
          </Link>
        </StyledLink>
      </Box>
    </Box>
  );
};

export default DocsNavigation;
