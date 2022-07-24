import type { NextPage } from 'next';
import Head from 'next/head';

import Providers from '../providers/Providers';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Houses from Game of Thrones</title>
        <meta
          property="og:title"
          content="Code test to handle GOT house api from anapioficeandfire.com"
          key="title"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Providers />
    </>
  );
};

export default Home;
