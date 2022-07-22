import React from 'react';

import reset from '../utils/icons/svg/bi_x-circle.svg';
import Icon from '../utils/icons/Icon';
import styles from '../styles/List.module.css';

const Search = (props: {
  value: string;
  resultMessage: { msg: string; resultBoolean: boolean };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
  reset: () => void;
}) => {
  return (
    <div className={styles.searchSection}>
      <form
        className={styles.searchContainer}
        onSubmit={(event: React.ChangeEvent<SubmitEventInit>) => {
          event.preventDefault();
          props.value.length > 0 && props.search();
        }}
      >
        <label className={styles.searchLabel}>
          <input
            type="text"
            value={props.value}
            onChange={(event) => props.handleChange(event)}
            placeholder="Sök på hela husets namn tex. Amber"
            className={styles.searchInput}
          />
        </label>
        {props.value.length > 0 && (
          <div className={styles.searchReset} onClick={props.reset}>
            <Icon type={reset} alt="reset" />
          </div>
        )}
        <input className={styles.searchSubmit} type="submit" value="Sök" />
      </form>
      <div className={styles.searchError}>
        {props.resultMessage.resultBoolean && <p>{props.resultMessage.msg}</p>}
      </div>
    </div>
  );
};

export default Search;
