import React from 'react';

import reset from '../utils/icons/svg/bi_x-circle.svg';
import Icon from '../utils/icons/Icon';
import styles from '../styles/List.module.css';
import { useHousesContext } from '../context/housesContext';

const Search = () => {
  const context = useHousesContext();
  const {
    searchValue,
    handleChange,
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
            onChange={(event) => handleChange(event)}
            placeholder="Sök på hela husets namn tex. Amber"
            className={styles.searchInput}
          />
        </label>
        {searchValue.length > 0 && (
          <div className={styles.searchReset} onClick={resetSearch}>
            <Icon type={reset} alt="reset" />
          </div>
        )}
        <input className={styles.searchSubmit} type="submit" value="Sök" />
      </form>
      <div className={styles.searchError}>
        {noResult.resultBoolean && <p>{noResult.msg}</p>}
      </div>
    </div>
  );
};

export default Search;
