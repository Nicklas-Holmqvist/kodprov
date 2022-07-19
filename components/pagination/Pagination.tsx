import React from 'react';
import { IPagination } from '../../types';

import Arrow from './components/Arrow';
import PageDropdown from './components/PageDropdown';

const Pagination = (props: {
  pages: IPagination;
  handlePagination: (page: number, displayCount: number) => void;
}) => {
  return (
    <>
      <Arrow
        direction={'first'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
      <Arrow
        direction={'back'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
      <PageDropdown pages={props.pages} handlePage={props.handlePagination} />
      <Arrow
        direction={'next'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
      <Arrow
        direction={'last'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
    </>
  );
};

export default Pagination;
