import React from 'react';
import Link from 'next/link';
import { Box } from '@sparkpost/matchbox';
import {
  PeopleOutline,
  Code,
  DeviceHub,
  Feedback,
} from '@sparkpost/matchbox-icons';
import useStatus from 'hooks/useStatus';
import BaseNavigation, {NavigationProps, StyledLink, StatusColorMap} from './baseNavigation';

const Navigation = (props: NavigationProps): JSX.Element | null => {
  const { data = [], title, titleLink } = props;
  const { status } = useStatus();

  return (
    <BaseNavigation data={data} title={title} titleLink={titleLink}>
      <Box py="450" mt="450" borderTop="400">
        <Link href="/submit-a-ticket" passHref>
          <StyledLink>
            <Box px="500">
              <Feedback size={20} />
              <Box as="span" pl="300">
                Submit a Ticket
              </Box>
            </Box>
          </StyledLink>
        </Link>

        <Link href="https://www.sparkpost.com/case-studies/" passHref>
          <StyledLink target="_blank" rel="noreferrer">
            <Box px="500">
              <PeopleOutline size={20} />
              <Box as="span" pl="300">
                Customers
              </Box>
            </Box>
          </StyledLink>
        </Link>

        <Link href="https://www.sparkpost.com/blog/category/developer/" passHref>
          <StyledLink target="_blank" rel="noreferrer">
            <Box px="500">
              <Code size={20} />
              <Box as="span" pl="300">
                Developer Blog
              </Box>
            </Box>
          </StyledLink>
        </Link>

        <Link href="https://developers.sparkpost.com/" passHref>
          <StyledLink target="_blank" rel="noreferrer">
            <Box px="500">
              <DeviceHub size={20} />
              <Box as="span" pl="300">
                Developer Hub
              </Box>
            </Box>
          </StyledLink>
        </Link>

        <Link href="https://status.sparkpost.com/" passHref>
          <StyledLink target="_blank" rel="noreferrer">
            <Box px="500">
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
            </Box>
          </StyledLink>
        </Link>
      </Box>
    </BaseNavigation>
  );
};

export default Navigation;
