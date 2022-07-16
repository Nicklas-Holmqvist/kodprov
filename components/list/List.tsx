import React from 'react';

import { House } from '../../types';
import ListItem from './component/ListItem';

const List = (props: { data: House[] }) => {
  const houses = props.data;
  return (
    <>
      {houses.map((house, index: number) => (
        <div key={index}>
          <ListItem house={house} />
        </div>
      ))}
    </>
  );
};

export default List;
