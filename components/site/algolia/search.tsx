import React from 'react';
import { Box, useWindowEvent } from '@sparkpost/matchbox';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from 'components/site/algolia/searchBox';
import SearchResults from 'components/site/algolia/results';

type SearchProps = {
  indexName: 'next_momentum_documentation';
};

const Search = (props: SearchProps): JSX.Element => {
  const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '';
  const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '';
  const searchClient = algoliasearch(appId, searchKey);

  const [query, setQuery] = React.useState('');
  const [hasFocus, setHasFocus] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);

  useWindowEvent('click', function (e) {
    const isInside = container && container.current?.contains(e.target as Node);

    if (hasFocus && !isInside) {
      setHasFocus(false);
    }
  });

  return (
    <Box ref={container} position="relative">
      <InstantSearch
        searchClient={searchClient}
        indexName={props.indexName}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setHasFocus(true)} hasFocus={hasFocus} />
        <SearchResults show={query.length > 0 && hasFocus} />
      </InstantSearch>
    </Box>
  );
};

export default Search;
