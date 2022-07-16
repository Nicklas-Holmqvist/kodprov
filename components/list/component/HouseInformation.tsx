import React from 'react';

import { House } from '../../../types';

const HouseInformation = (props: { house: House }) => {
  const house = props.house;
  return (
    <>
      <p>{house.name}</p>
      <p>{house.region}</p>
    </>
  );
};

export default HouseInformation;
