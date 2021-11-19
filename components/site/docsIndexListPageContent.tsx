import Link from 'next/link';
import { Box, Tag, Button } from '@sparkpost/matchbox';
import { formatDate } from 'utils/string';
import type { NavigationItemProps } from 'components/site/navigation';

interface DocsIndexListPageContentProps {
  navigationData: NavigationItemProps | undefined;
}

const DocsIndexListPageContent = (props: DocsIndexListPageContentProps) => {
  const { navigationData } = props;
  return (
    <>
      {navigationData && navigationData.items ? (
        navigationData.items.map((item) => {
          return (
            <>
              <Box px="500" py="650">
                <Box as="h3">{item.title}</Box>
                {item.lastUpdated && (
                  <Box pt="200" pb="400">
                    <Tag>{formatDate(item.lastUpdated)}</Tag>
                  </Box>
                )}
                {item.description && <Box as="p">{item.description}</Box>}
                <Box pt="400">
                  <Link href={item.link} passHref>
                    <Button variant="outline" color="blue">
                      Read More
                    </Button>
                  </Link>
                </Box>
              </Box>
              <hr />
            </>
          );
        })
      ) : (
        <>Whoops! This section is empty.</>
      )}
    </>
  );
};

export default DocsIndexListPageContent;
