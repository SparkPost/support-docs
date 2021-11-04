import React from 'react';
import { Text, Stack, Panel, Box } from '@sparkpost/matchbox';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import { getWindow } from 'utils/ssr';

const content = [
  [
    { label: 'Momentum 4.x Documentation', level: 1 },
    {
      label: 'Momentum 4.x API v1',
      url: 'https://support.messagesystems.com/docs/web-rest/v1_index.html',
      level: 2,
    },
    { label: 'Momentum 4.x Reference Manual', url: '/momentum/4/', level: 2 },
    { label: 'Introduction', url: '/momentum/4/p-intro', level: 3 },
    { label: 'Installing Momentum', url: '/momentum/4/p-intro', level: 3 },
    { label: 'Configuring Momentum', url: '/momentum/4/p-configuration', level: 3 },
    { label: 'Logging', url: '/momentum/4/p-logs', level: 3 },
    { label: 'Using the system Console', url: '/momentum/4/p-operations', level: 3 },
    { label: 'SMTP Injection', url: '/momentum/4/p-smtp-injections', level: 3 },
    { label: 'Message Generation using HTTP', url: '/momentum/4/p-http-rest', level: 3 },
    { label: 'Reporting and Engagement Tracking', url: '/momentum/4/p-analytics', level: 3 },
    { label: 'Writing Policy', url: '/momentum/4/p-policy', level: 3 },
    {
      label: 'Lua Functions, Modules, Options and Commands',
      url: '/momentum/4/p-reference',
      level: 3,
    },
  ],
  [
    { label: 'Momentum 3.x Documentation', level: 1 },
    {
      label: 'Momentum Reference Manual (3.x)',
      url: '/momentum/3/3-reference/',
      level: 2,
    },
    {
      label: 'Modules 3.x Summary',
      url: '/momentum/3/3-reference/modules-summary/',
      level: 3,
    },
    {
      label: 'Options 3.x Summary',
      url: '/momentum/3/3-reference/options-summary/',
      level: 3,
    },
    {
      label: 'Listener Options 3.x Summary',
      url: '/momentum/3/3-reference/ecelerity-conf/#table-listener-options',
      level: 3,
    },
    {
      label: 'Lua Functions 3.x Summary',
      url: '/momentum/3/3-reference/3-reference-lua-summary-table/',
      level: 3,
    },
    {
      label: 'Console Commands 3.x Summary',
      url: '/momentum/3/3-reference/console-commands-summary-table/',
      level: 3,
    },
    {
      label: 'Executable Commands 3.x Summary',
      url: '/momentum/3/3-reference/exe-summary-table/',
      level: 3,
    },
    {
      label: 'Sieve Functions 3.x Summary',
      url: '/momentum/3/3-reference/sieve-ref-3-function-summary/',
      level: 3,
    },
    {
      label: 'Momentum for Mobile Push Notifications',
      url: '/momentum/3/3-push/',
      level: 2,
    },
    {
      label: 'Default Policy User Guide',
      url: '/momentum/3/3-policy/',
      level: 2,
    },
    {
      label: 'Adaptive Delivery User Guide',
      url: '/momentum/3/3-ad/',
      level: 2,
    },
    {
      label: 'Momentum REST Injector',
      url: '/momentum/3/3-rest/',
      level: 2,
    },
    { label: 'Momentum API Reference (3.x)', url: '/momentum/3/3-api/', level: 2 },
  ],
  [
    { label: 'Mobile Momentum Documentation', level: 1 },
    {
      label: 'Mobile Momentum Reference Manual',
      url: '/momentum/mobile/mobile-reference/',
      level: 2,
    },
    { label: 'Mobile Momentum Quick Start', url: '/momentum/mobile/mobile-quick-start/', level: 2 },
    {
      label: 'Mobile Momentum Developer Guide',
      url: '/momentum/mobile/mobile-developer-guide/',
      level: 2,
    },
  ],
];

const StyledLink = styled.a<{ level: number }>`
  display: block;
  text-decoration: none;

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

  ${({ level }) => {
    if (level === 2) {
      return css({
        fontWeight: 'normal',
        fontSize: '400',
        lineHeight: '400',
      });
    }

    return css({
      fontWeight: 'normal',
      pl: '600',
      textDecoration: 'underline',
    });
  }}
`;

type TocLinkProps = {
  level: number;
  url: string;
  children: React.ReactNode;
};

const TocLink = React.forwardRef<HTMLAnchorElement, TocLinkProps>(function TocLink(props, ref) {
  const { level, url, children } = props;

  return (
    <StyledLink href={url} level={level} ref={ref}>
      {children}
    </StyledLink>
  );
});

const MomentumHomePageContent = () => {
  // Hack to bypass a matchbox bug
  // TypeError: Cannot read property 'matches' of undefined
  // Panel relies on browser media queries which are not available on server
  if (!getWindow()) {
    return null;
  }

  return (
    <Box px="500">
      <Stack>
        <Text fontSize="600" lineHeight="600" fontWeight="semibold">
          Momentum Documentation
        </Text>
        {content.map((category, i) => {
          return (
            <Panel key={i}>
              <Panel.Section>
                <Stack space="200">
                  {category.map(({ label, url, level }, j) => {
                    if (url) {
                      return (
                        <Link href={url} passHref key={`${i}-${j}`}>
                          <TocLink url={url} level={level}>
                            {label}
                          </TocLink>
                        </Link>
                      );
                    }

                    return (
                      <Text fontWeight="semibold" fontSize="400" lineHeight="400" key={`${i}-${j}`}>
                        {label}
                      </Text>
                    );
                  })}
                </Stack>
              </Panel.Section>
            </Panel>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MomentumHomePageContent;
