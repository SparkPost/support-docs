import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Tag, Button } from '@sparkpost/matchbox';
import { KeyboardArrowDown } from '@sparkpost/matchbox-icons';
import { formatDate } from 'utils/string';
import type { NavigationItemProps } from 'components/site/navigation';

interface DocsIndexListPageContentProps {
  navigationData: NavigationItemProps | undefined;
}

const DocsIndexListPageContent = (props: DocsIndexListPageContentProps) => {
  const postsPerClick = 7;
  const [paginationCount, setPaginationCount] = useState<number>(postsPerClick);
  const { navigationData } = props;
  return (
    <>
      {navigationData && navigationData.items ? (
        navigationData.items.slice(0, paginationCount).map((item, i) => {
          return (
            <React.Fragment key={`navDataItem${i}`}>
              <Box px="500" py="650">
                <Box as="h3">{item.title}</Box>
                {item.lastUpdated && (
                  <Box pt="200" pb="400">
                    <Tag>{formatDate(item.lastUpdated)}</Tag>
                  </Box>
                )}
                {item.description && (
                  <Box as="p" maxWidth="1150">
                    {item.description}
                  </Box>
                )}
                <Box pt="400">
                  <Link href={item.link} passHref>
                    <Button variant="outline" color="blue">
                      Read More
                    </Button>
                  </Link>
                </Box>
              </Box>
              <hr />
            </React.Fragment>
          );
        })
      ) : (
        <>Whoops! This section is empty.</>
      )}
      {navigationData && navigationData.items && paginationCount < navigationData.items.length && (
        <Box textAlign="center">
          <Button
            variant="outline"
            color="blue"
            onClick={() => setPaginationCount(paginationCount + postsPerClick)}
          >
            Show More <KeyboardArrowDown />
          </Button>
        </Box>
      )}
    </>
  );
};

export default DocsIndexListPageContent;
