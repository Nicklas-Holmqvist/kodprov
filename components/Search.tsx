import React from 'react';

import styles from '../styles/List.module.css';

const Search = (props: {
  value: string;
  resultMessage: { msg: string; resultBoolean: boolean };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
  reset: () => void;
}) => {
  return (
    <>
      <form
        className={styles.searchForm}
        onSubmit={(event: React.ChangeEvent<SubmitEventInit>) => {
          event.preventDefault();
          props.value.length > 0 && props.search();
        }}
      >
        <label>
          Sök hus:
          <input
            type="text"
            value={props.value}
            onChange={(event) => props.handleChange(event)}
            placeholder="Sök på hela husets namn tex. Amber"
            className={styles.searchInput}
          />
        </label>
        <input type="submit" value="Sök" />
        <input
          className={styles.searchReset}
          type="button"
          value="Reset"
          onClick={props.reset}
        />
      </form>
      {props.resultMessage.resultBoolean && <p>{props.resultMessage.msg}</p>}
    </>
  );
};

export default Search;
