import React from 'react';

const Search = (props: {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: () => void;
  reset: () => void;
}) => {
  return (
    <>
      <form
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
          />
        </label>
        <input type="submit" value="Sök" />
      </form>
      <input type="button" value="Reset" onClick={props.reset} />
    </>
  );
};

export default Search;
