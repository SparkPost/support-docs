import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import Container from './container';

const StyledBlockQuote = styled.blockquote`
  ${css({
    bg: 'blue.100',
    fontStyle: 'italic',
    p: '400',
    m: '0',
    mb: '550',
    borderLeftColor: 'blue.300',
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid',
  })}

  & > div, & > div:last-child p {
    margin: 0;
    padding: 0;
  }
`;

const BlockQuote = (props: { children?: React.ReactNode }): JSX.Element => {
  return (
    <Container>
      <StyledBlockQuote>{props.children}</StyledBlockQuote>
    </Container>
  );
};

export default BlockQuote;
