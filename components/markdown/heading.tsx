import React from 'react';
import { Box, BoxProps } from '@sparkpost/matchbox';
import * as Polymorphic from 'utils/types';

const getFontSize = (as?: string): string => {
  switch (as) {
    case 'h1':
      return '700';
    case 'h2':
      return '600';
    default:
      return '400';
  }
};

const Heading = React.forwardRef(function Heading(props, ref) {
  const { children, as } = props;

  return (
    <Box as={as} fontSize={getFontSize(as)} fontWeight="medium" ref={ref} mb="400">
      {children}
    </Box>
  );
}) as Polymorphic.ForwardRefComponent<'div', BoxProps>;

export default Heading;
