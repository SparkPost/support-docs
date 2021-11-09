import React from 'react';
import { Box, BoxProps } from '@sparkpost/matchbox';
import Container from './container';

const Paragraph = (props: BoxProps): JSX.Element => {
  return (
    <Container>
      <Box mb="550" as="p">
        {props.children}
      </Box>
    </Container>
  );
};

export default Paragraph;
