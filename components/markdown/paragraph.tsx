import React from 'react';
import { Box, BoxProps } from '@sparkpost/matchbox';

function Paragraph(props: BoxProps): JSX.Element {
  return <Box mb="400">{props.children}</Box>;
}

export default Paragraph;
