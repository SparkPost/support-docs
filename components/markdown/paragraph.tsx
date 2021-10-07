import React from 'react';
import { Box, BoxProps } from '@sparkpost/matchbox';

function Paragraph(props: BoxProps): JSX.Element {
  console.log(props);
  return <Box mb="400">{props.children}</Box>;
}

export default Paragraph;
