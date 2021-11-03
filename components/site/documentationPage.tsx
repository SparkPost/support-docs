import Breadcrumbs from 'components/site/breadcrumbs';
import { Box, Tag } from '@sparkpost/matchbox'
import React from 'react';

type DocumentationPageProps = {
  children?: React.ReactNode,
  title?: string,
  lastUpdated?: string
}

const DocumentationPage = ({ children, title, lastUpdated }: DocumentationPageProps): JSX.Element => {
  return (
    <>
      <Box px="500">
        <Breadcrumbs title={title} />
        <Box as="h1" fontSize="600" lineHeight="600" fontWeight="semibold">{title}</Box>
        {lastUpdated && <Box fontSize="200" lineHeight="200" pt="200">
          Last updated
          <Tag ml="300">{lastUpdated}</Tag>
        </Box>}
      </Box>
      <Box as="hr" my="500" />
      <Box px="500">
        {children}
      </Box>
    </>
  )
}

export default DocumentationPage;