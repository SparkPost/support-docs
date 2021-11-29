import React from 'react';
import { Text, Stack, Box } from '@sparkpost/matchbox';
import { Feedback, HelpOutline, QuestionAnswer } from '@sparkpost/matchbox-icons';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
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

type SimpleStyledLinkProp = {
  $inlineBlock?: boolean;
};

/*
███████╗████████╗██╗   ██╗██╗     ███████╗███████╗
██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝
███████╗   ██║    ╚████╔╝ ██║     █████╗  ███████╗
╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ╚════██║
███████║   ██║      ██║   ███████╗███████╗███████║
╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝
*/

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
      url: '/docs/getting-started/getting-started-sparkpost/',
      title: 'New User Guide',
      desc: 'New to SparkPost? Get set up with our new user guide.',
      linkText: 'Learn More',
    },
    {
      url: '/docs/getting-started/getting-started-sparkpost/#sending-email',
      title: 'Sending Your First Email',
      desc: 'Sending your first email via SMTP or REST.',
      linkText: 'Learn More',
    },
    {
      url: 'https://developers.sparkpost.com/api/?_ga=2.250190661.237172531.1637112870-1549692369.1636156807',
      title: 'API Docs',
      desc: 'Check out our full API reference.',
      linkText: 'View Documentation',
    },
  ],
};

const migrationGuides = {
  title: 'Migration Guides',
  desc: 'Moving to SparkPost from another service? Read through our in-depth migration guides.',
  content: [
    {
      text: 'SendGrid Migration Guide',
      url: 'https://www.sparkpost.com/migration-guides/sendgrid/',
    },
    {
      text: 'Mandrill Migration Guide',
      url: 'https://www.sparkpost.com/migration-guides/mandrill/',
    },
    { text: 'Mailgun Migration Guide', url: 'https://www.sparkpost.com/migration-guides/mailgun/' },
    { text: 'Mailjet Migration Guide', url: 'https://www.sparkpost.com/migration-guides/mailjet/' },
  ],
};

const clientLibraries = {
  title: 'Client Libraries',
  desc: 'Our client libraries allow you to use SparkPost with your language of choice',
  content: [
    { name: 'Node', url: 'https://github.com/SparkPost/node-sparkpost', Icon: Node },
    { name: 'PHP', url: 'https://github.com/SparkPost/php-sparkpost', Icon: PHP },
    { name: 'Python', url: 'https://github.com/SparkPost/python-sparkpost', Icon: Python },
    { name: 'Java', url: 'https://github.com/SparkPost/java-sparkpost', Icon: Java },
    { name: 'Elixir', url: 'https://github.com/SparkPost/elixir-sparkpost', Icon: Elixir },
    {
      name: 'NodeMailer',
      url: 'https://github.com/SparkPost/nodemailer-sparkpost-transport',
      Icon: NodeMailer,
    },
    { name: 'Go', url: 'https://github.com/SparkPost/gosparkpost', Icon: Go },
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
    { text: 'Submit a ticket', url: '/submit-a-ticket', Icon: Feedback },
    { text: 'FAQs', url: '/docs/faq/', Icon: HelpOutline },
    {
      text: 'Slack Community',
      url: 'http://slack.sparkpost.com/?_ga=2.81558740.237172531.1637112870-1549692369.1636156807',
      Icon: QuestionAnswer,
    },
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
          <SectionContent title={migrationGuides.title} desc={migrationGuides.desc} />
          <Box>
            {migrationGuides.content.map((link, i) => {
              return <GuideLink key={`guideLink${i}`} {...link} />;
            })}
          </Box>
        </Box>
        <hr />
        <Box px="800">
          <SectionContent title={clientLibraries.title} desc={clientLibraries.desc} />
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            {clientLibraries.content.map((library, i) => {
              return <Library key={`library${i}`} {...library} />;
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
