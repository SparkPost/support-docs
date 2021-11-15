import Breadcrumbs from 'components/site/breadcrumbs';
import { Box, Tag } from '@sparkpost/matchbox';
import Feedback from 'components/site/feedback';
import React from 'react';

type DocumentationContentProps = {
  children?: React.ReactNode;
  title?: string;
  lastUpdated?: string;
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
};

const DocumentationContent = ({
  children,
  title,
  lastUpdated,
}: DocumentationContentProps): JSX.Element => {
  return (
    <>
      <Box px="500">
        <Breadcrumbs title={title} />
        <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">
          {title}
        </Box>
        {lastUpdated && (
          <Box fontSize="200" lineHeight="200" pt="200">
            Last updated
            <Tag ml="300">{formatDate(lastUpdated)}</Tag>
          </Box>
        )}
      </Box>
      <Box as="hr" my="500" />
      <Box px="0">{children}</Box>
      <Feedback />
    </>
  );
};

export default DocumentationContent;
