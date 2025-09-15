import React from 'react';
import { getWindow } from 'utils/ssr';
import Link from 'next/link';
import { Box, BoxProps, ScreenReaderOnly, styles } from '@sparkpost/matchbox';
import { KeyboardArrowDown, KeyboardArrowUp } from '@sparkpost/matchbox-icons';
import styled from 'styled-components';
import css from '@styled-system/css';
import { tokens } from '@sparkpost/design-tokens';

export interface NavigationItemProps {
  title: string;
  link: string;
  items?: this[];
  level?: number;
  lastUpdated?: string;
  description?: string;
}

export type NavigationProps = {
  children?: React.ReactNode;
  data?: NavigationItemProps[];
  title: string;
  titleLink: string;
};

export const StyledLink = styled.a<{ $active?: boolean; $level?: number }>`
  display: block;
  cursor: pointer;
  overflow-wrap: anywhere;

  &,
  &:visited,
  &:active {
    text-decoration: none;
    ${({ $active, $level }) =>
      css({
        py: '200',
        pr: '700',
        pl: `calc(${tokens.spacing_500} + ${tokens.spacing_200} * ${$level})`,
        bg: $active ? 'blue.700' : 'transparent',
        color: $active ? 'white' : 'gray.900',
      })}
  }

  &:hover {
    ${({ $active }) => {
      return css({
        bg: $active ? 'blue.700' : 'gray.200',
        color: $active ? 'white' : 'gray.900',
      });
    }}
  }
`;

export const StatusColorMap = {
  none: 'green.700',
  minor: 'yellow.400',
  major: 'brand.orange',
  critical: 'red.700',
};

const BaseNavigation = (props: NavigationProps): JSX.Element | null => {
  const { data = [], title, titleLink, children } = props;

  return (
    <Box width={['100%', null, '260px']} position="sticky" top="0">
      <Link href={titleLink} passHref>
        <StyledLink>
          <Box
            display={['none', null, 'inline-block']}
            fontSize="200"
            lineHeight="200"
            fontWeight="semibold"
            pl="500"
          >
            {title}
          </Box>
        </StyledLink>
      </Link>
      {data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
      {children}
    </Box>
  );
};

const getActiveUrl = (location: Location | undefined) => {
  if (!location) {
    return '';
  }

  return location.pathname + location.hash;
};

const findActiveChild = (
  items: NavigationItemProps[],
  activeUrl: string,
): NavigationItemProps | undefined => {
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

const StyledChevronWrapper = styled(Box)<BoxProps & { $active?: boolean }>`
  ${styles.buttonReset}
  cursor: pointer;
  &:hover {
    ${({ $active }) => {
      return css({
        color: $active ? 'white' : 'blue.700',
      });
    }}
  }
  ${({ $active }) => {
    return css({
      color: $active ? 'white' : 'inherit',
    });
  }}
`;

const Item = (props: NavigationItemProps): JSX.Element => {
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
  }, [link, activeUrl, hasActiveChild]);

  return (
    <Box fontSize="200" lineHeight="200" position="relative">
      <Link href={link} passHref>
        <StyledLink $active={active} $level={level}>
          {title}
        </StyledLink>
      </Link>

      {items && (
        <StyledChevronWrapper
          as="button"
          position="absolute"
          right="400"
          top="6px"
          width="24px"
          height="24px"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`${link}__items`}
          $active={active}
        >
          <ScreenReaderOnly>Expand Menu</ScreenReaderOnly>
          <Chevron expanded={expanded} />
        </StyledChevronWrapper>
      )}
      <Box id={`${link}__items`}>
        {expanded && items && items.map((item, i) => <Item level={level + 1} key={i} {...item} />)}
      </Box>
    </Box>
  );
};

export default BaseNavigation;
