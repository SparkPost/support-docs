import React from 'react';
import Link from 'next/link';
import { Box } from '@sparkpost/matchbox';
import {
  DeviceHub,
  Feedback,
} from '@sparkpost/matchbox-icons';
import useStatus from 'hooks/useStatus';
import BaseNavigation, { NavigationProps, StyledLink, StatusColorMap } from './baseNavigation';

const AnalystNavigation = (props: NavigationProps): JSX.Element | null => {
  const { data = [], title, titleLink } = props;
  const { status } = useStatus();

  return (
    <BaseNavigation data={data} title={title} titleLink={titleLink}>
      <Box py="450" mt="450" borderTop="400">
        <Link href="mailto:support@edatasource.com" passHref>
          <StyledLink>
            <Box px="500">
              <Feedback size={20} />
              <Box as="span" pl="300">
                Submit a Ticket
              </Box>
            </Box>
          </StyledLink>
        </Link>

        <Link href="https://api.edatasource.com/" passHref>
          <StyledLink target="_blank" rel="noreferrer">
            <Box px="500">
              <DeviceHub size={20} />
              <Box as="span" pl="300">
                API Docs
              </Box>
            </Box>
          </StyledLink>
        </Link>

        <Link href="http://status.edatasource.com/" passHref>
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

export default AnalystNavigation;
