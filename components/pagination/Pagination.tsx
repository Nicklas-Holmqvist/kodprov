import React from 'react';
import { IPagination } from '../../types';

import first from '../../utils/icons/svg/first-arrow.svg';
import prev from '../../utils/icons/svg/prev-arrow.svg';
import next from '../../utils/icons/svg/next-arrow.svg';
import last from '../../utils/icons/svg/last-arrow.svg';
import Arrow from './components/Arrow';
import PageDropdown from './components/PageDropdown';

const Pagination = (props: {
  pages: IPagination;
  handlePagination: (page: number, displayCount: number) => void;
}) => {
  return (
    <>
      <Arrow
        icon={first}
        direction={'first'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
      <Arrow
        icon={prev}
        direction={'back'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
      <PageDropdown pages={props.pages} handlePage={props.handlePagination} />
      <Arrow
        icon={next}
        direction={'next'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
      <Arrow
        icon={last}
        direction={'last'}
        directionData={props.pages}
        handlePagination={props.handlePagination}
      />
    </>
  );
};

export default Pagination;
