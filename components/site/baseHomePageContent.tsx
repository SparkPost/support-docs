import React from 'react';
import { Text, Stack, Box } from '@sparkpost/matchbox';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';

/* Types */

type CardProps = {
  url: string;
  title: string;
  desc: string;
  linkText: string;
};

type GuideLinkProps = {
  text: string;
  url: string;
};

type SectionContentProps = {
  title: string;
  desc: string;
  desc2?: JSX.Element;
};

type LibraryProps = {
  name: string;
  url: string;
  Icon: () => JSX.Element;
};

type HelpLinkProps = {
  text: string;
  url: string;
  Icon: React.ElementType;
};

type SimpleStyledLinkProp = {
  $inlineBlock?: boolean;
};

export type BaseHomePageContentProps = {
  gettingStarted?: { content: CardProps[] } & SectionContentProps;
  migrationGuides?: { content: GuideLinkProps[] } & SectionContentProps;
  clientLibraries?: { content: LibraryProps[] } & SectionContentProps;
  help?: { content: HelpLinkProps[] } & SectionContentProps;
};

/* Styles */
export const SimpleStyledLink = styled.a<SimpleStyledLinkProp>`
  display: ${(props) => (props.$inlineBlock ? 'inline-block' : 'block')};
  text-decoration: none;
  transition: color 0.3s;
  ${css({
  marginY: '200',
})}
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

  ${css({
  fontWeight: 'normal',
  textDecoration: 'underline',
})}
`;

const BlueStyledLink = styled.a`
  text-decoration: none;
  ${css({
  paddingY: '200',
  paddingX: '400',
  marginRight: '200',
})}
  transition: background-color .3s;
  > svg {
    ${css({
  marginRight: '200',
})}
  }
  &:hover {
    ${css({
  backgroundColor: 'blue.200',
})}
  }
`;

const StyledCard = styled(Box)`
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    right: 0;
    width: calc(100% + 2px);
    height: 4px;
    ${css({
  backgroundColor: 'blue.700',
})}
  }
`;

const BoxStyledLink = styled.a`
  display: flex;
  align-items: center;
  width: 30%;
  text-decoration: none;
  border-radius: 1px;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  transition: background-color 0.3s;
  min-width: 165px;
  ${css({
  color: 'gray.900',
  paddingX: '450',
  paddingY: '300',
  borderColor: 'gray.900',
  marginBottom: '500',
  fontSize: '200',
  lineHeight: '200',
})}
  &:hover {
    ${css({
  backgroundColor: 'gray.300',
  color: 'gray.900',
})}
  }
  > svg {
    ${css({
  marginRight: '300',
})}
  }
`;


/* Components */
const SectionContent = (props: SectionContentProps): JSX.Element => {
  const { title, desc, desc2 } = props;
  return (
    <>
      <Text fontWeight="semibold" fontSize="500" lineHeight="500">
        {title}
      </Text>
      <Text my="300" mb={!desc2 ? '550' : '300'}>
        {desc}
      </Text>
      {desc2 && <Text mb="550">{desc2}</Text>}
    </>
  );
};

const GuideLink = (props: GuideLinkProps) => {
  const { url, text } = props;
  return (
    <Link href={url} passHref>
      <SimpleStyledLink>{text}</SimpleStyledLink>
    </Link>
  );
};

const Card = (props: CardProps): JSX.Element => {
  const { url, title, desc, linkText } = props;
  return (
    <Link href={url} passHref>
      <StyledCard
        p="16px 20px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.300"
        width={['100%', '48%', '31%']}
        position="relative"
        minWidth="175px"
        my={['500', null, '200']}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box fontWeight="semibold" fontSize="400" lineHeight="400">
          {title}
        </Box>
        <Box fontSize="300" lineHeight="300" my="200">
          {desc}
        </Box>
        <SimpleStyledLink>{linkText}</SimpleStyledLink>
      </StyledCard>
    </Link>
  );
};

const Library = (props: LibraryProps): JSX.Element => {
  const { Icon, name, url } = props;
  return (
    <Link href={url} passHref>
      <BoxStyledLink>
        <Icon /> {name}
      </BoxStyledLink>
    </Link>
  );
};

const HelpLink = (props: HelpLinkProps): JSX.Element => {
  const { Icon, text, url } = props;
  return (
    <Link href={url} passHref>
      <BlueStyledLink>
        <Icon /> {text}
      </BlueStyledLink>
    </Link>
  );
};

const BaseHomePageContent = (props: BaseHomePageContentProps) => {
  const { gettingStarted, migrationGuides, clientLibraries, help } = props;
  return (
    <>
      <Stack space="200">
        {gettingStarted && (<>
          <Box px="800" pt="800">
            <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">
              Help & API
            </Box>
            <SectionContent title={gettingStarted.title} desc={gettingStarted.desc} />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              {gettingStarted.content.map((cc, i) => {
                return <Card key={`cardKey${i}`} {...cc} />;
              })}
            </Box>
          </Box>
        </>)}
        {migrationGuides && (<>
          <hr />
          <Box px="800">
            <SectionContent title={migrationGuides.title} desc={migrationGuides.desc} />
            <Box>
              {migrationGuides.content.map((link, i) => {
                return <GuideLink key={`guideLink${i}`} {...link} />;
              })}
            </Box>
          </Box>
        </>)}
        {clientLibraries && (<>
          <hr />
          <Box px="800">
            <SectionContent title={clientLibraries.title} desc={clientLibraries.desc} />
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
              {clientLibraries.content.map((library, i) => {
                return <Library key={`library${i}`} {...library} />;
              })}
            </Box>
          </Box>
        </>)}
        {help && (<>
          <hr />
          <Box px="800">
            <SectionContent title={help.title} desc={help.desc} desc2={help.desc2} />
            <Box display="flex" flexWrap="wrap">
              {help.content.map((links, i) => {
                return <HelpLink key={`helpLink${i}`} {...links} />;
              })}
            </Box>
          </Box>
        </>)}
      </Stack>
    </>
  );
};

export default BaseHomePageContent;
