import React from 'react';
import { useEffect, useState } from 'react';

import { IHouses, House } from '../types';
import List from './list/List';

const Layout = () => {
  const [houses, setHouses] = useState<House[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const basePage = 1;
  const baseDisplayNumber = 10;

  const fetchAllHouses = async (page: number, displayCount: number) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, displayCount }),
    };

    const response = await fetch('api/houses', options);
    const data: IHouses = await response.json();
    if (!data) return;
    setHouses(data.houses);
    setLoaded(data.status);
  };

  useEffect(() => {
    fetchAllHouses(basePage, baseDisplayNumber);
  }, []);

  return (
    <>
      {!loaded && 'Laddar'}
      {loaded && <List data={houses} />}
    </>
  );
};

export default Layout;
