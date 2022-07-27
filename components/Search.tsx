import React from 'react';

import Icon from './Icon';
import reset from '../assets/svg/bi_x-circle.svg';
import styles from '../styles/Search.module.css';
import { NoResult } from './Layout';

export interface SearchProps {
  noResult: NoResult;
  searchValue: string;
  resetSearch: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fetchSearchResult: () => void;
}

const Search: React.FC<SearchProps> = ({
  noResult,
  searchValue,
  resetSearch,
  onInputChange,
  fetchSearchResult,
}) => {
  return (
    <div className={styles.searchSection}>
      <form
        className={styles.searchContainer}
        onSubmit={(event: React.ChangeEvent<SubmitEventInit>) => {
          event.preventDefault();
          searchValue.length > 0 && fetchSearchResult();
        }}
      >
        <label className={styles.searchLabel}>
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onInputChange(event)}
            placeholder="Search for full name ex. Amber"
            className={styles.searchInput}
          />
        </label>
        {searchValue.length > 0 && (
          <div className={styles.searchReset} onClick={resetSearch}>
            <Icon type={reset} alt="reset" />
          </div>
        )}
        <input className={styles.searchSubmit} type="submit" value="Search" />
      </form>
      <div className={styles.searchReset}>
        {noResult.resultBoolean && <p>{noResult.msg}</p>}
      </div>
    </div>
  );
};

export default Search;
