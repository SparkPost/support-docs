import React from 'react';
import { Box } from '@sparkpost/matchbox';

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <Box maxWidth="1150" px="500">
      {props.children}
    </Box>
  );
};

export default Container;
