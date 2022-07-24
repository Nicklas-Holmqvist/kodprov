import React from 'react';
import { useHousesContext } from '../context/housesContext';

const PageSize = () => {
  const context = useHousesContext();
  const { pageSize, fetchAllHouses } = context;

  const pageSizes: number[] = [10, 30, 50];

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value);
    fetchAllHouses(1, pageSize);
  };

  return (
    <>
      <p>Antal per sida</p>
      <label>
        <select onChange={handleOnChange} value={pageSize}>
          {pageSizes.map((size: number, index: number) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default PageSize;
