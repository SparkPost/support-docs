import React from 'react';
import { getWindow } from 'utils/ssr';
import Link from 'next/link';
import { Box, BoxProps } from '@sparkpost/matchbox';
import { KeyboardArrowDown, KeyboardArrowUp } from '@sparkpost/matchbox-icons';
import styled from 'styled-components';
import css from '@styled-system/css';
import { tokens} from '@sparkpost/design-tokens';

export interface MomentumNavigationItemProps {
  title: string;
  link: string;
  items?: this[];
  level?: number;
}

export type MomentumNavigationProps = {
  data?: MomentumNavigationItemProps[];
};

const StyledLink = styled(Box)<BoxProps & { $active?: boolean }>`
  cursor: pointer;
  a, a:visited, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    ${({ $active }) => {
      return css({
        bg: $active ? 'blue.700' : 'gray.200',
        color: $active ? 'white' : 'inherit'
      })
    }}
  }
  ${({ $active }) => {
    return css({
      bg: $active ? 'blue.700' : 'transparent',
      color: $active ? 'white' : 'inherit'
    })
  }}
`;

const MomentumNavigation = (props: MomentumNavigationProps): JSX.Element | null => {
  if (!props.data) {
    return null;
  }

  return (
    <Box width="260px" position="sticky" top="0">
      <Box as="h5" fontSize="200" fontWeight="semibold" py="200" lineHeight="200" px="500">Momentum Documentation</Box>
      {props.data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Box>
  );
};

function getActiveUrl(location: any) {
  if(!location) {
    return '';
  }

  return location.pathname + location.hash;
}

function findActiveChild(items: MomentumNavigationItemProps[], activeUrl: string): MomentumNavigationItemProps | undefined {
  return items.find(item => {
    const hasDirectChild = item.link == activeUrl;
    
    if(!hasDirectChild && item.items) {
      return findActiveChild(item.items, activeUrl)
    }
    
    return hasDirectChild;
  });
}

const Chevron = (props: { expanded: boolean }): JSX.Element => {
  const { expanded } = props;
  return expanded ? <KeyboardArrowUp size={18} /> : <KeyboardArrowDown size={18} />;
}

const Item = (props: MomentumNavigationItemProps): JSX.Element => {
  const { link, title, items, level = 0 } = props;
  
  const environment = getWindow();
  const activeUrl = getActiveUrl(environment?.location);
  const hasActiveChild = items && findActiveChild(items, activeUrl);
  const expanded = Boolean(hasActiveChild) || (activeUrl === link) || activeUrl.includes(link);
  const isActive = activeUrl === link;

  return (
    <Box
      fontSize="200"
      lineHeight="200"
    >
      <StyledLink 
        py="200"
        px="500"
        pl={`calc(${tokens.spacing_500} + ${tokens.spacing_200} * ${level})`}
        $active={isActive}
      >
        <Link href={link} passHref>
          <Box as="a" display="flex" justifyContent="space-between">
            <Box as="span">{title}</Box>
            {items && 
              <Box width="18px" height="18px" ml="200">
                <Chevron expanded={expanded} />
              </Box>
            }
          </Box>
        </Link>
      </StyledLink>
      <Box>{expanded && items && items.map((item, i) => <Item level={level + 1} key={i} {...item} />)}</Box>
    </Box>
  );
};

export default MomentumNavigation;
