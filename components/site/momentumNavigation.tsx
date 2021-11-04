import React from 'react';
import { getWindow } from 'utils/ssr';
import Link from 'next/link';
import { Box, BoxProps } from '@sparkpost/matchbox';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Forum,
  PeopleOutline,
  Code,
  DeviceHub,
} from '@sparkpost/matchbox-icons';
import styled from 'styled-components';
import css from '@styled-system/css';
import { tokens } from '@sparkpost/design-tokens';
import useStatus from 'hooks/useStatus';
import data from 'content/momentum/navigation.yml';

export interface MomentumNavigationItemProps {
  title: string;
  link: string;
  items?: this[];
  level?: number;
}

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

const MomentumNavigation = (): JSX.Element | null => {
  const { status } = useStatus();
  const environment = getWindow();

  return (
    <Box width="260px" position="sticky" top="0">
      <StyledLink $active={environment?.location?.pathname === '/momentum'}>
        <Link href="/momentum" passHref>
          <Box
            as="a"
            display="inline-block"
            fontSize="200"
            fontWeight="semibold"
            py="200"
            lineHeight="200"
            px="500"
          >
            Momentum Documentation
          </Box>
        </Link>
      </StyledLink>
      {data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
      <Box py="450" mt="450" borderTop="400">
        <StyledLink px="500" py="200">
          <Link href="http://slack.sparkpost.com" passHref>
            <a target="_blank">
              <Forum size={20} />
              <Box as="span" pl="300">
                Community
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
          <Link href="https://developers.sparkpost.com/" passHref>
            <a target="_blank">
              <DeviceHub size={20} />
              <Box as="span" pl="300">
                Developer Hub
              </Box>
            </a>
          </Link>
        </StyledLink>
        <StyledLink px="500" py="200">
          <Link href="https://status.sparkpost.com/" passHref>
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

const getActiveUrl = (location: any) => {
  if (!location) {
    return '';
  }

  return location.pathname + location.hash;
};

const findActiveChild = (
  items: MomentumNavigationItemProps[],
  activeUrl: string,
): MomentumNavigationItemProps | undefined => {
  return items.find((item) => {
    const hasDirectChild = item.link == activeUrl;

    if (!hasDirectChild && item.items) {
      return findActiveChild(item.items, activeUrl);
    }

    return hasDirectChild;
  });
};

const Chevron = (props: { expanded: boolean }): JSX.Element => {
  const { expanded } = props;
  return expanded ? <KeyboardArrowUp size={18} /> : <KeyboardArrowDown size={18} />;
};

const Item = (props: MomentumNavigationItemProps): JSX.Element => {
  const { link, title, items, level = 0 } = props;
  const [active, setActive] = React.useState<boolean>(false);
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const environment = getWindow();
  const activeUrl = getActiveUrl(environment?.location);
  const hasActiveChild = items && findActiveChild(items, activeUrl);

  React.useEffect(() => {
    const isExpanded = Boolean(hasActiveChild) || activeUrl === link || activeUrl.includes(link);
    const isActive = activeUrl === link;

    setExpanded(isExpanded);
    setActive(isActive);
  }, [link, activeUrl]);

  return (
    <Box fontSize="200" lineHeight="200">
      <StyledLink
        py="200"
        px="500"
        display="flex"
        justifyContent="space-between"
        pl={`calc(${tokens.spacing_500} + ${tokens.spacing_200} * ${level})`}
        $active={active}
      >
        <Link href={link} passHref>
          <Box as="a" display="flex" justifyContent="space-between" flex="1">
            <Box as="span">{title}</Box>
          </Box>
        </Link>
        {items && (
          <Box width="18px" height="18px" ml="200" onClick={() => setExpanded(!expanded)}>
            <Chevron expanded={expanded} />
          </Box>
        )}
      </StyledLink>
      <Box>
        {expanded && items && items.map((item, i) => <Item level={level + 1} key={i} {...item} />)}
      </Box>
    </Box>
  );
};

export default MomentumNavigation;
