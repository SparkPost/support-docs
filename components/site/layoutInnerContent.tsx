import { Box, BoxProps } from '@sparkpost/matchbox';
import Header from 'components/site/header';

import styled from 'styled-components';

type LayoutInnerContentProps = {
  children?: React.ReactNode;
  getActivatorProps?: () => object;
};

const StyledSkipToContent = styled(Box)<BoxProps>`
  opacity: 0;
  text-decoration: none;
  z-index: -1;
  &:focus {
    opacity: 1;
    z-index: 1;
    color: white;
  }
`;

const LayoutInnerContent = (props: LayoutInnerContentProps): JSX.Element => {
  const { children, getActivatorProps } = props;

  return (
    <div>
      <StyledSkipToContent
        as="a"
        href="#main-content"
        position="absolute"
        display="inline-block"
        p="200"
        top="0"
        left="0"
        bg="blue.700"
      >
        Skip to main content
      </StyledSkipToContent>
      <Header getActivatorProps={getActivatorProps} />
      {children}
    </div>
  );
};

export default LayoutInnerContent;
