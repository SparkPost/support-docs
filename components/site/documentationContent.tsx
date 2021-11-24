import Breadcrumbs from 'components/site/breadcrumbs';
import { Box, Tag } from '@sparkpost/matchbox';
import Feedback from 'components/site/feedback';
import React from 'react';
import { formatDate } from 'utils/string';

type DocumentationContentProps = {
  children?: React.ReactNode;
  title?: string;
  lastUpdated?: string;
  isIndex: boolean;
  description?: string;
};

const DocumentationContent = ({
  children,
  title,
  lastUpdated,
  isIndex,
  description,
}: DocumentationContentProps): JSX.Element => {
  return (
    <>
      <Box px="500">
        <Breadcrumbs title={title} />
        <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">
          {title}
        </Box>
        <Box fontSize="200" lineHeight="200" pt="200" maxWidth="1150">
          {lastUpdated && !isIndex ? (
            <>
              Last updated <Tag ml="300">{formatDate(lastUpdated)}</Tag>
            </>
          ) : (
            description
          )}
        </Box>
      </Box>
      <Box as="hr" my="500" />
      <Box px="0">{children}</Box>
      {!isIndex && <Feedback />}
    </>
  );
};

export default DocumentationContent;
