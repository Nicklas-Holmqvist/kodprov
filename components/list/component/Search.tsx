import React from 'react';

const Search = (props: {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
  reset: () => void;
}) => {
  return (
    <>
      <label>
        Sök hus:
        <input
          type="text"
          value={props.value}
          onChange={(event) => props.handleChange(event)}
        />
      </label>
      <input
        type="button"
        value="Sök"
        onClick={() => props.value.length > 0 && props.search()}
      />
      <input type="button" value="Reset" onClick={props.reset} />
    </>
  );
};

export default Search;
