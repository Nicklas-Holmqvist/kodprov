import React, { useState } from 'react';
import { IPagination } from '../../../types';

const Arrow = (props: {
  direction: string;
  directionData: IPagination;
  handlePagination: (page: number, displayCount: number) => void;
}) => {
  const displayCount = Number(props.directionData.pageSize);
  const pages = {
    first: Number(props.directionData['first'].page),
    back: Number(props.directionData['next'].page) - 2,
    activePage: Number(props.directionData['next'].page) - 1,
    next: Number(props.directionData['next'].page),
    last: Number(props.directionData['last'].page),
  };
  console.log(props.directionData);

  const handleChange = () => {
    switch (props.direction) {
      case 'back':
        if (pages.activePage <= 1) return;
        props.handlePagination(pages.back, displayCount);
        break;
      case 'next':
        if (pages.activePage >= pages.last) return;
        props.handlePagination(pages.next, displayCount);
        break;
    }
  };

  return <div onClick={handleChange}>arrow</div>;
};

export default Arrow;
