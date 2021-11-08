import React from 'react';
import { Box } from '@sparkpost/matchbox';

type ContainerProps = {
  children?: React.ReactNode;
};

export const styles = {
  maxWidth: '1150',
  mx: '500',
};

const Container = (props: ContainerProps) => {
  return <Box {...styles}>{props.children}</Box>;
};

export default Container;
