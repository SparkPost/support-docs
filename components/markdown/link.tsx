import React from 'react';
import Link from 'next/link';
import { Box } from '@sparkpost/matchbox';
import styled from 'styled-components';
import css from '@styled-system/css';

const StyledLink = styled(Box)`
  &,
  &:visited {
    ${css({
      color: 'gray.900',
    })}
  }

  &:hover {
    ${css({
      color: 'blue.700',
    })}
  }
`;

export type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  children?: React.ReactNode;
  href?: string;
};

const AnchorLink = (props: LinkProps): JSX.Element => {
  return (
    <Link prefetch={false} passHref href={props.href || '/'}>
      <StyledLink as="a">{props.children}</StyledLink>
    </Link>
  );
};

export default AnchorLink;
