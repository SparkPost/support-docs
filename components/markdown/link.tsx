import React from 'react';
import Link from 'next/link';
import { Box } from '@sparkpost/matchbox';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const checkLink = (href: string): string => {
    let link = href;
    if (href.startsWith('./') && !href.includes('./media')) {
      const routeComponents = router.asPath.split('/');

      // Trailing slashes
      if (!routeComponents[routeComponents.length - 1]) {
        routeComponents.pop();
      }

      // Remove the last item in the url since we're staying in the same directory
      routeComponents.pop();

      const updatedHref = href.replace('./', '');
      routeComponents.push(updatedHref);

      link = routeComponents.join('/');
    }
    return link;
  };

  return (
    <Link passHref href={checkLink(props.href || '/')}>
      <StyledLink as="a">{props.children}</StyledLink>
    </Link>
  );
};

export default AnchorLink;
