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
    back: props.directionData['next']
      ? Number(props.directionData['next'].page) - 2
      : Number(props.directionData['last'].page),
    activePage: props.directionData['next']
      ? Number(props.directionData['next'].page) - 1
      : Number(props.directionData['last'].page),
    next: props.directionData['next']
      ? Number(props.directionData['next'].page)
      : Number(props.directionData['last'].page),
    last: Number(props.directionData['last'].page),
  };

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
      case 'first':
        if (pages.activePage <= 1) return;
        props.handlePagination(pages.first, displayCount);
        break;
      case 'last':
        if (pages.activePage >= pages.last) return;
        props.handlePagination(pages.last, displayCount);
        break;
    }
  };

  return <div onClick={handleChange}>{props.direction}</div>;
};

export default Arrow;
