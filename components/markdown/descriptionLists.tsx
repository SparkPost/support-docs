import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { styles } from './container';
import { getFontSize, getMarginBottom, getPaddingTop } from './heading';

// Description Lists are not a native markdown element
// But are used in docs via HTML tags

const StyledDescriptionList = styled.div`
  dl {
    ${css(styles)}
  }

  dt {
    ${css({
      // Matches Heading H5
      fontSize: getFontSize('h5'),
      lineHeight: getFontSize('h5'),
      fontWeight: 'semibold',
      mb: getMarginBottom('h5'),
      pt: getPaddingTop('h5'),
    })}
  }

  dd,
  dd p,
  dd div {
    ${css({
      p: '0',
      ml: '0',
    })}
  }
`;

const DescriptionLists = (props: { children?: React.ReactNode }) => {
  return <StyledDescriptionList>{props.children}</StyledDescriptionList>;
};

export default DescriptionLists;
