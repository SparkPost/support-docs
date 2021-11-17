import React from 'react';
import { Text, Stack, Panel, Box } from '@sparkpost/matchbox';
import { Feedback, HelpOutline, QuestionAnswer } from '@sparkpost/matchbox-icons';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import { getWindow } from 'utils/ssr';
import { Elixir, PHP, Java, NodeMailer, Python, Node, Go } from './icons';

/*
████████╗██╗   ██╗██████╗ ███████╗███████╗
╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
   ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
   ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
   ██║      ██║   ██║     ███████╗███████║
   ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝
 */
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

/*
███████╗████████╗██╗   ██╗██╗     ███████╗███████╗
██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝
███████╗   ██║    ╚████╔╝ ██║     █████╗  ███████╗
╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ╚════██║
███████║   ██║      ██║   ███████╗███████╗███████║
╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝
*/

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

const StyledLink = styled.a`
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

  ${css({
    fontWeight: 'normal',
    textDecoration: 'underline',
  })}
`;

/*
 ██████╗ ██████╗ ███╗   ██╗████████╗███████╗███╗   ██╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝████╗  ██║╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   █████╗  ██╔██╗ ██║   ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██║╚██╗██║   ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ███████╗██║ ╚████║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝   ╚═╝   
*/

const gettingStarted = {
  title: 'Getting Started',
  desc: 'Welcome to SparkPost! Get familiar with our product and explore its features:',
  content: [
    {
      url: '/',
      title: 'New User Guide',
      desc: 'New to SparkPost? Get set up with our new user guide.',
      linkText: 'Learn More',
    },
    {
      url: '/',
      title: 'Sending Your First Email',
      desc: 'Sending your first email via SMTP or REST.',
      linkText: 'Learn More',
    },
    {
      url: '/',
      title: 'New User Guide',
      desc: 'New to SparkPost? Get set up with our new user guide.',
      linkText: 'View Documentation',
    },
  ],
};

const migrationGuides = {
  title: 'Migration Guides',
  desc: 'Moving to SparkPost from another service? Read through our in-depth migration guides.',
  content: [
    { text: 'SendGrid Migration Guide', url: '/' },
    { text: 'Mandrill Migration Guide', url: '/' },
    { text: 'Mailgun Migration Guide', url: '/' },
    { text: 'Mailjet Migration Guide', url: '/' },
  ],
};

const clientLibraries = {
  title: 'Client Libraries',
  desc: 'Our client libraries allow you to use SparkPost with your language of choice',
  content: [
    { name: 'Node', url: '/', Icon: Node },
    { name: 'PHP', url: '/', Icon: PHP },
    { name: 'Python', url: '/', Icon: Python },
    { name: 'Java', url: '/', Icon: Java },
    { name: 'Elixir', url: '/', Icon: Elixir },
    { name: 'NodeMailer', url: '/', Icon: NodeMailer },
    { name: 'Go', url: '/', Icon: Go },
  ],
};

const help = {
  title: "Questions? We're here to help.",
  desc: 'We’re always happy to help with code or other questions you might have!',
  desc2: (
    <>
      To find the best resource for your question and fastest resolution, check out our
      <Link href="/" passHref>
        <StyledLink>how to get help guide</StyledLink>
      </Link>
    </>
  ),
  content: [
    { text: 'Submit a ticket', url: '/', Icon: Feedback },
    { text: 'FAQs', url: '/', Icon: HelpOutline },
    { text: 'Slack Community', url: '/', Icon: QuestionAnswer },
  ],
};

/*
 ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   ███████║
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
*/

const SectionContent = (props: SectionContentProps): JSX.Element => {
  const { title, desc, desc2 } = props;
  console.log(props);
  console.log(desc2);
  return (
    <>
      <Text fontWeight="semibold" fontSize="500" lineHeight="500">
        {title}
      </Text>
      <Text my="300" mb={!desc2 ? '600' : '300'}>
        {desc}
      </Text>
      {desc2 && <Text mb="600">{desc2}</Text>}
    </>
  );
};

const GuideLink = (props: GuideLinkProps) => {
  const { url, text } = props;
  return (
    <Link href={url} passHref>
      <StyledLink>{text}</StyledLink>
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
        width="30%"
        position="relative"
      >
        <Box fontWeight="semibold" fontSize="400" lineHeight="400">
          {title}
        </Box>
        <Box fontSize="300" lineHeight="300" my="200">
          {desc}
        </Box>
        <StyledLink>{linkText}</StyledLink>
      </StyledCard>
    </Link>
  );
};

const Library = (props: LibraryProps): JSX.Element => {
  const { Icon, name, url } = props;
  return (
    <Link href={url} passHref>
      <a>
        <Icon /> {name}
      </a>
    </Link>
  );
};

const HelpLinks = (props: HelpLinkProps): JSX.Element => {
  const { Icon, text, url } = props;
  return (
    <Link href={url} passHref>
      <a>
        <Icon /> {text}
      </a>
    </Link>
  );
};

const DocsHomePageContent = () => {
  // Hack to bypass a matchbox bug
  // TypeError: Cannot read property 'matches' of undefined
  // Panel relies on browser media queries which are not available on server
  // if (!getWindow()) {
  //   return null;
  // }

  return (
    <>
      <Stack>
        <Box px="500">
          <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">
            Help & API
          </Box>
          <SectionContent title={gettingStarted.title} desc={gettingStarted.desc} />
          <Box display="flex" justifyContent="space-between">
            {gettingStarted.content.map((cc) => {
              return <Card {...cc} />;
            })}
          </Box>
        </Box>
        <hr />
        <Box px="500">
          <SectionContent title={migrationGuides.title} desc={migrationGuides.desc} />
          <Box>
            {migrationGuides.content.map((link) => {
              return <GuideLink {...link} />;
            })}
          </Box>
        </Box>
        <hr />
        <Box px="500">
          <SectionContent title={clientLibraries.title} desc={clientLibraries.desc} />
          <Box display="flex">
            {clientLibraries.content.map((library) => {
              return <Library {...library} />;
            })}
          </Box>
        </Box>
        <hr />
        <Box px="500">
          <SectionContent title={help.title} desc={help.desc} desc2={help.desc2} />
          <Box display="flex">
            {help.content.map((links) => {
              return <HelpLinks {...links} />;
            })}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default DocsHomePageContent;
