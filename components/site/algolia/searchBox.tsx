import type { SearchBoxProvided } from 'react-instantsearch-core';
import { connectSearchBox } from 'react-instantsearch-dom';
import { TextField, useWindowEvent } from '@sparkpost/matchbox';
import { Search as SearchIcon } from '@sparkpost/matchbox-icons';
import { FormEvent } from 'react';

type InputProps = SearchBoxProvided & {
  hasFocus?: boolean;
  onFocus?: () => void;
};

const Input = ({ currentRefinement, onFocus, hasFocus, refine }: InputProps) => {
  useWindowEvent('keydown', function (e) {
    if (hasFocus && e.key === 'Escape') {
      refine('');
    }
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form noValidate action="" autoComplete="off" role="search" onSubmit={onSubmit}>
      <TextField
        id="algolia-search"
        label="Search"
        prefix={<SearchIcon />}
        placeholder="e.g. Getting Started"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        onFocus={onFocus}
      />
    </form>
  );
};

const SearchBox = connectSearchBox<InputProps>(Input);
export default SearchBox;
