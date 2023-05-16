import React from 'react';
import { Feedback, HelpOutline, QuestionAnswer } from '@sparkpost/matchbox-icons';
import Link from 'next/link';
import { Elixir, PHP, Java, NodeMailer, Python, Node, Go } from './icons';
import BaseHomePageContent, { SimpleStyledLink } from './baseHomePageContent';

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

const DocsHomePageContent = () => {
  return (
    <BaseHomePageContent
      gettingStarted={gettingStarted}
      help={help}
      clientLibraries={clientLibraries}
      migrationGuides={migrationGuides}
    />
  );
};

export default DocsHomePageContent;
