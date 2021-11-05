import styled from 'styled-components';
import css from '@styled-system/css';

// Description Lists are not a native markdown element
// But are used in docs via HTML tags

const StyledDescriptionList = styled.div`
  dl {
    ${css({
      // Matches Container component
      maxWidth: '1150',
      px: '500',
    })}
  }

  dt {
    ${css({
      // Matches Heading H5
      fontSize: '200',
      lineHeight: '200',
      fontWeight: 'semibold',
      mb: '300',
      pt: '300',
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

const DescriptionLists = (props) => {
  return <StyledDescriptionList>{props.children}</StyledDescriptionList>;
};

export default DescriptionLists;
