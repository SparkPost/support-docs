import React from 'react';
import { Box, BoxProps } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';
import * as Polymorphic from 'utils/types';
import { slugify } from 'utils/string';
import Container from './container';
import css from '@styled-system/css';
import styled from 'styled-components';

const StyledHeading = styled(Box)<BoxProps>`
  div:first-child > & {
    padding-top: 0;
  }
`;

const StyledAnchorLink = styled.a<{ $hovered?: boolean }>`
  display: inline-block;
  text-decoration: none;
  transition: ${tokens.motionDuration_fast};

  &,
  &:visited {
    ${({ $hovered }) =>
      css({
        color: 'gray.700',
        pl: '200',
        opacity: $hovered ? '1' : '0',
      })}
  }
  &:hover {
    ${css({
      color: 'blue.700',
    })}
  }
`;

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  as: As;
};

export const getFontSize = (as?: As): string => {
  switch (as) {
    case 'h1':
      return '600';
    case 'h2':
      return '500';
    case 'h3':
      return '400';
    case 'h4':
      return '300';
    case 'h5':
    case 'h6':
      return '200';
    default:
      return '400';
  }
};

export const getMarginBottom = (as?: As): string => {
  switch (as) {
    case 'h1':
      return '200';
    case 'h2':
    case 'h3':
      return '300';
    case 'h4':
    case 'h5':
    case 'h6':
      return '500';
    default:
      return '200';
  }
};

export const getPaddingTop = (as?: As): string => {
  switch (as) {
    case 'h1':
    case 'h2':
      return '500';
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return '300';
    default:
      return '200';
  }
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(props, ref) {
  const { children, as } = props;
  const [hovered, setHovered] = React.useState<boolean>(false);

  const childrenAsString = React.Children.toArray(children)
    .filter((child) => typeof child === 'string')
    .join('-');
  const slugified = slugify(childrenAsString);

  return (
    <Container>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <StyledHeading
          as={as}
          id={slugified}
          fontSize={getFontSize(as)}
          lineHeight={getFontSize(as)}
          mb={getMarginBottom(as)}
          pt={getPaddingTop(as)}
          fontWeight="medium"
          ref={ref}
          color="gray.1000"
        >
          {children}
          <StyledAnchorLink href={`#${slugified}`} aria-hidden="true" $hovered={hovered}>
            #
          </StyledAnchorLink>
        </StyledHeading>
      </div>
    </Container>
  );
}) as Polymorphic.ForwardRefComponent<'div', BoxProps>;

export default Heading;
