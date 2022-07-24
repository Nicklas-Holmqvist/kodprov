import type { NextPage } from 'next';
import Head from 'next/head';

import Providers from '../providers/Providers';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Houses from Game of Thrones</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cinzel&family=Noto+Sans&display=swap');
        </style>
      </Head>
      <Providers />
    </>
  );
};

export default Home;
