import React from 'react';
import { Text, Stack, Box } from '@sparkpost/matchbox';
import { Feedback, HelpOutline } from '@sparkpost/matchbox-icons';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';

/* Quick Jump: 
	#Types
	#Styles
	#Content
	#Compenents
*/

/* #Types */
type CardProps = {
  url: string;
  title: string;
  desc: string;
  linkText: string;
};

type SectionContentProps = {
  title: string;
  desc: string;
  desc2?: JSX.Element;
};

type HelpLinkProps = {
  text: string;
  url: string;
  Icon: React.ElementType;
};

type SimpleStyledLinkProp = {
  $inlineBlock?: boolean;
};

/* #Styles */
const SimpleStyledLink = styled.a<SimpleStyledLinkProp>`
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

/* #Content */
const gettingStarted = {
  title: 'Getting Started',
  desc: 'Welcome to Analyst! Get familiar with our product and explore its features:',
  content: [
    {
      url: '/general/',
      title: 'General',
      desc: 'General platform definitions & common account-level inquiries',
      linkText: 'Learn More',
    },
		{
      url: '/inbox-tracker/',
      title: 'Inbox Tracker',
      desc: 'A collection of How-To Guides',
      linkText: 'Learn More',
    },
    {
      url: '/competitive-tracker/',
      title: 'Competitve Tracker',
      desc: 'Guides for optimizing your use of Competitive Tracker',
      linkText: 'Learn More',
    },
    {
      url: '/design-tracker/',
      title: 'Design Tracker',
      desc: 'Design Tracker help docs',
      linkText: 'Learn More',
    },
    {
      url: '/sfmc/',
      title: 'Salesforce Marketing Cloud Integration',
      desc: 'A set of guides on the installation and integration of the Inbox Tracker application',
      linkText: 'Learn More',
    },
    {
      url: 'https://api.edatasource.com/docs',
      title: 'API Docs',
      desc: 'Check out our full API reference.',
      linkText: 'View Documentation',
    },
  ],
};

const help = {
  title: "Questions? We're here to help.",
  desc: 'We’re always happy to help with code or other questions you might have!',
  desc2: (
    <>
      To find the best resource for your question and fastest resolution, check out our
      <Link href="/" passHref>
        <SimpleStyledLink $inlineBlock={true}>how to get help guide</SimpleStyledLink>
      </Link>
    </>
  ),
  content: [
    { text: 'Submit a ticket', url: 'mailto:support@emailanalyst.com', Icon: Feedback },
    { text: 'FAQs', url: '/docs/faq/', Icon: HelpOutline },
	],
};

/* #Compenents */
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

const DocsHomePageContent = () => {
  return (
    <>
      <Stack space="200">
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
        <hr />
        <Box px="800">
          <SectionContent title={help.title} desc={help.desc} desc2={help.desc2} />
          <Box display="flex" flexWrap="wrap">
            {help.content.map((links, i) => {
              return <HelpLink key={`helpLink${i}`} {...links} />;
            })}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default DocsHomePageContent;
