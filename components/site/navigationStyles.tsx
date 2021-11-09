import styled from 'styled-components';
import css from '@styled-system/css';
import { Box, BoxProps } from '@sparkpost/matchbox';

export const StyledLink = styled(Box)<BoxProps & { $active?: boolean }>`
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

export const StatusColorMap = {
  none: 'green.700',
  minor: 'yellow.400',
  major: 'brand.orange',
  critical: 'red.700',
};
