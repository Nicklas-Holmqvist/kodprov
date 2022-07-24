import React from 'react';

import styles from '../../../styles/PageDropdown.module.css';
import { useHousesContext } from '../../../context/housesContext';

const PageDropdown = () => {
  const context = useHousesContext();
  const { pagination, fetchAllHouses } = context;

  const pages = Number(pagination['last'].page);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageNumber = Number(event.target.value);
    const displayCount = Number(pagination['last'].pageSize);
    fetchAllHouses(pageNumber, displayCount);
  };

  const activePage = pagination['next']
    ? Number(pagination['next'].page) - 1
    : Number(pagination['last'].page);

  return (
    <div className={styles.pageDropdownLabel}>
      <label>
        <select value={activePage} onChange={onChange}>
          {Array.from({ length: pages }, (page: number, index: number) => (
            <option key={index} value={index + 1}>
              {index + 1} of {pages}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default PageDropdown;
