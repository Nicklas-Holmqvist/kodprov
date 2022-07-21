import React from 'react';

import { House } from '../../types';
import styles from '../../styles/List.module.css';
import ListItem from './component/ListItem';

const List = (props: { data: House[] }) => {
  const houses = props.data;
  return (
    <div className={styles.listContainer}>
      {houses.map((house, index: number) => (
        <div key={house.name}>
          <ListItem house={house} />
        </div>
      ))}
    </div>
  );
};

export default List;
