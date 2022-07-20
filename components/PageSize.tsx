import React from 'react';

const PageSize = (props: {
  pageSize: number;
  handlePageSize: (page: number, displayCount: number) => void;
}) => {
  const pageSizes: number[] = [10, 30, 50];

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value);
    props.handlePageSize(1, pageSize);
  };

  return (
    <>
      <p>Antal per sida</p>
      <label>
        <select onChange={handleOnChange} value={props.pageSize}>
          {pageSizes.map((pageSize: number, index: number) => (
            <option key={index} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default PageSize;
