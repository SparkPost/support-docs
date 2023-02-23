import React from 'react';
import { Feedback } from '@sparkpost/matchbox-icons';
import Link from 'next/link';
import BaseHomePageContent, {SimpleStyledLink} from './baseHomePageContent';

/* #Content */
const gettingStarted = {
  title: 'Getting Started',
  desc: 'Welcome to Analyst! Get familiar with our product and explore its features:',
  content: [
    {
      url: '/analyst/general/',
      title: 'General',
      desc: 'General platform definitions & common account-level inquiries',
      linkText: 'Learn More',
    },
		{
      url: '/analyst/inbox-and-design-tracker/',
      title: 'Inbox Tracker & Design Tracker',
      desc: 'A collection of How-To Guides',
      linkText: 'Learn More',
    },
    {
      url: '/analyst/competitive-tracker/',
      title: 'Competitve Tracker',
      desc: 'Guides for optimizing your use of Competitive Tracker',
      linkText: 'Learn More',
    },
    {
      url: '/analyst/sfmc/',
      title: 'Salesforce Marketing Cloud Integration',
      desc: 'A set of guides on the installation and integration of the Inbox Tracker application',
      linkText: 'Learn More',
    },
    {
      url: '/analyst/privacy-gdpr/',
      title: 'Privacy & GDPR',
      desc: 'We’re committed to keeping your private information private, your data protected and secure and being transparent about our practices',
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
	],
};

const AnalystHomePageContent = () => {
  return (
    <BaseHomePageContent
			gettingStarted={gettingStarted}
			help={help}
		/>
  );
};

export default AnalystHomePageContent;
