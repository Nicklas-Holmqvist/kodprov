import React, { useState } from 'react';

import Icon from '../../../utils/icons/Icon';
import { IPagination } from '../../../types';

const Arrow = (props: {
  direction: string;
  directionData: IPagination;
  icon: string;
  handlePagination: (page: number, displayCount: number) => void;
}) => {
  const pageSize = Number(props.directionData['first'].pageSize);
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
        props.handlePagination(pages.back, pageSize);
        break;
      case 'next':
        if (pages.activePage >= pages.last) return;
        props.handlePagination(pages.next, pageSize);
        break;
      case 'first':
        if (pages.activePage <= 1) return;
        props.handlePagination(pages.first, pageSize);
        break;
      case 'last':
        if (pages.activePage >= pages.last) return;
        props.handlePagination(pages.last, pageSize);
        break;
    }
  };

  return (
    <div onClick={handleChange}>
      <Icon type={props.icon} alt={props.direction} />
    </div>
  );
};

export default Arrow;
