import Container from './container';
import styled from 'styled-components';
import css from '@styled-system/css';

const StyledUl = styled.ul`
  ${css({
    pl: '550',
    m: '0',
    mb: '450',
  })}

  li p, li > div {
    ${css({
      p: '0',
      m: '0',
    })}
  }

  li {
    ${css({
      pl: '0',
      lineHeight: '300',
    })}
    position: relative;
    list-style-type: none;
  }

  li:before {
    display: block;
    content: '';
    height: 5px;
    width: 5px;
    position: absolute;
    left: -18px;
    border-radius: 50%;
    top: 9px;

    ${css({
      bg: 'gray.1000',
    })}
  }
`;

type UlProps = {
  children?: React.ReactNode;
};

export const Ul = (props: UlProps): JSX.Element => {
  return (
    <Container>
      <StyledUl>{props.children}</StyledUl>
    </Container>
  );
};

const StyledOl = styled.ol`
  counter-reset: item;
  list-style-type: none;
  ${css({
    pl: '550',
    m: '0',
    mb: '450',
  })}

  li p, li > div {
    ${css({
      p: '0',
      m: '0',
    })}
  }

  & > li {
    counter-increment: item;
    position: relative;
    ${css({
      pl: '0',
      lineHeight: '300',
    })}
  }

  & > li::before {
    content: counter(item) '.';
    display: inline-block;
    position: absolute;
    left: -1.25rem;
    ${css({
      fontWeight: 'medium',
    })}
  }
`;

export const Ol = (props: UlProps): JSX.Element => {
  return (
    <Container>
      <StyledOl>{props.children}</StyledOl>
    </Container>
  );
};
