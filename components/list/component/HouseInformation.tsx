import React from 'react';

import { House } from '../../../types';
import Line from '../../../utils/Line';

const HouseInformation = (props: { house: House }) => {
  const houseData = props.house;

  const house = [
    {
      title: 'House',
      data: houseData.name,
    },
    {
      title: 'Region',
      data: houseData.region,
    },
    {
      title: 'Coat of arms',
      data: houseData.coatOfArms,
    },
    {
      title: 'Words',
      data: houseData.words,
    },
    {
      title: 'Founded',
      data: houseData.founded,
    },
  ];

  return (
    <>
      {house.map((data, index) => (
        <p key={index}>
          <span>{data.title}: </span>
          {data.data !== '' ? data.data : 'No information'}
        </p>
      ))}
      <Line />
    </>
  );
};

export default HouseInformation;
