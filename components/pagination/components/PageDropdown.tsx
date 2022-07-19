import React, { OptionHTMLAttributes } from 'react';

import { IPage, IPagination } from '../../../types';

const PageDropdown = (props: {
  pages: IPagination;
  handlePage: (page: number, displayCount: number) => void;
}) => {
  const pages = Number(props.pages['last'].page);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pageNumber = Number(event.target.value);
    const displayCount = Number(props.pages['last'].pageSize);
    props.handlePage(pageNumber, displayCount);
  };

  const activePage = props.pages['next']
    ? Number(props.pages['next'].page) - 1
    : Number(props.pages['last'].page);

  return (
    <div>
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
