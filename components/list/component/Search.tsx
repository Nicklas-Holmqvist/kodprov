import React from 'react';

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
            placeholder="Sök på hela husets namn"
          />
        </label>
        <input type="submit" value="Sök" />
      </form>
      {props.resultMessage.resultBoolean && <p>{props.resultMessage.msg}</p>}
      <input type="button" value="Reset" onClick={props.reset} />
    </>
  );
};

export default Search;
