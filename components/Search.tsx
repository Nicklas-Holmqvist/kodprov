import React from 'react';

import Icon from './Icon';
import reset from '../assets/svg/bi_x-circle.svg';
import styles from '../styles/Search.module.css';
import { useHousesContext } from '../context/housesContext';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const context = useHousesContext();
  const {
    searchValue,
    handleInputChange,
    fetchSearchResult,
    resetSearch,
    noResult,
  } = context;

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
            onChange={(event) => handleInputChange(event)}
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
      <div className={styles.hardReset} onClick={resetSearch}>
        <span>Reset the list</span>
      </div>
      <div className={styles.searchReset}>
        {noResult.resultBoolean && <p>{noResult.msg}</p>}
      </div>
    </div>
  );
};

export default Search;
