import React, { useState } from 'react';

import { House } from '../../../types';
import HouseInformation from './HouseInformation';

const ListItem = (props: { house: House }) => {
  const house = props.house;

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <h2>{house.name}</h2>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Stäng mig' : 'Läs mer'}
      </button>
      {open && <HouseInformation house={house} />}
    </div>
  );
};

export default ListItem;
