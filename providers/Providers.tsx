import React from 'react';

import Layout from '../components/Layout';
import { HousesProvider } from '../context/housesContext';

const Providers = () => {
  return (
    <>
      <HousesProvider>
        <Layout />
      </HousesProvider>
    </>
  );
};

export default Providers;
