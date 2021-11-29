import React from 'react';
import { CategoriesContext } from 'context/categories';
import { Box, Inline, Stack } from '@sparkpost/matchbox';
import { ChevronRight } from '@sparkpost/matchbox-icons';
import { connectStateResults, Highlight, Hits } from 'react-instantsearch-dom';
import Link from 'next/link';
import css from '@styled-system/css';
import styled from 'styled-components';
import { toTitleCase } from 'utils/string';

const ResultsWrapper = styled.div`
  .ais-Hits-item {
    margin: 0;
    cursor: pointer;
  }

  .ais-Highlight-highlighted,
  .ais-Snippet-highlighted {
    ${css({
      bg: 'yellow.200',
    })}
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const ResultCount = connectStateResults(({ searchResults }): JSX.Element => {
  const resultCount = searchResults && searchResults.nbHits;
  return resultCount > 0 ? (
    <Box fontSize="200" lineHeight="200" p="200">
      <span>
        {resultCount} result{resultCount > 1 ? 's' : ''}
      </span>
    </Box>
  ) : (
    <Box fontSize="200" lineHeight="200" p="200">
      No Results
    </Box>
  );
});

type ResultProps = {
  hit: {
    slug: string;
  };
};

const StyledLink = styled.a`
  display: block;
  text-decoration: none;

  ${css({
    py: '400',
    px: '300',
  })}

  &:hover, &:focus {
    outline: none;
    ${css({
      bg: 'blue.200',
    })}
  }
`;

const Result = ({ hit }: ResultProps) => {
  const parts = hit.slug.split('/');
  const crumbLength = parts.length - 1;
  const crumbs = parts.slice(1, crumbLength);
  const categories = React.useContext(CategoriesContext);

  return (
    <Link href={hit.slug} passHref>
      <StyledLink href={hit.slug}>
        <Stack space="100">
          <Box fontSize="400" color="gray.900">
            <Highlight attribute="title" hit={hit} tagName="mark" />
            <Box fontSize="200" color="gray.700" style={{ whiteSpace: 'nowrap' }}>
              <Inline space="100">
                In
                {crumbs.map((crumb, i) => {
                  const category = categories.find(({ key }) => key === crumb);
                  const label = category?.label || toTitleCase(crumb);
                  return (
                    <span key={i}>
                      {label} {i !== crumbs.length - 1 ? <ChevronRight size={16} /> : null}
                    </span>
                  );
                })}
              </Inline>
            </Box>
          </Box>
          <Box fontSize="100" lineHeight="100" color="gray.700">
            <Highlight attribute="description" hit={hit} tagName="mark" />
          </Box>
        </Stack>
      </StyledLink>
    </Link>
  );
};

type SearchResultsProps = {
  show?: boolean;
};

const SearchResults = React.forwardRef<HTMLDivElement, SearchResultsProps>(function SearchResults(
  props,
  ref,
) {
  const { show } = props;

  if (!show) {
    return null;
  }

  return (
    <Box ref={ref}>
      <Box
        position="absolute"
        width="100%"
        bg="white"
        border="400"
        borderRadius="200"
        boxShadow="400"
        top="100%"
        mt="200"
        maxHeight={['400px', null, '70vh']}
        overflow="auto"
        zIndex="1"
      >
        <ResultCount />
        <ResultsWrapper>
          <Hits hitComponent={Result} />
        </ResultsWrapper>
      </Box>
    </Box>
  );
});

export default SearchResults;
