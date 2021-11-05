import React from 'react';
import { Box, BoxProps } from '@sparkpost/matchbox';
import * as Polymorphic from 'utils/types';
import Container from './container';
import styled from 'styled-components';

const StyledHeading = styled(Box)<BoxProps>`
  div:first-child > & {
    padding-top: 0;
  }
`;

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  as: As;
};

const getFontSize = (as?: As): string => {
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

const getMarginBottom = (as?: As): string => {
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

const getPaddingTop = (as?: As): string => {
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

  return (
    <Container>
      <StyledHeading
        as={as}
        fontSize={getFontSize(as)}
        lineHeight={getFontSize(as)}
        mb={getMarginBottom(as)}
        pt={getPaddingTop(as)}
        fontWeight="medium"
        ref={ref}
        color="gray.1000"
      >
        {children}
      </StyledHeading>
    </Container>
  );
}) as Polymorphic.ForwardRefComponent<'div', BoxProps>;

export default Heading;
