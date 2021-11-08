import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

const StyledBlockQuote = styled.blockquote`
  box-sizing: content-box;
  ${css({
    bg: 'blue.100',
    fontStyle: 'italic',
    p: '400',
    mx: '500',
    mb: '550',
    maxWidth: '1150',
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
  return <StyledBlockQuote>{props.children}</StyledBlockQuote>;
};

export default BlockQuote;
