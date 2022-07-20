import React, { useState } from 'react';

import styles from '../../../styles/List.module.css';
import { House } from '../../../types';
import HouseInformation from './HouseInformation';

const ListItem = (props: { house: House }) => {
  const house = props.house;

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className={styles.listItem}>
        <div className={styles.itemTitle}>
          <h2>{house.name}</h2>
          <button onClick={() => setOpen(!open)}>
            {open ? 'Stäng mig' : 'Läs mer'}
          </button>
        </div>
        <div className={styles.itemContent}>
          {open && <HouseInformation house={house} />}
        </div>
      </div>
    </>
  );
};

export default ListItem;
