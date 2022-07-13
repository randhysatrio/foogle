import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import MainButton from '../components/UI/MainButton';
import MainSearchBar from '../components/UI/MainSearchbar';

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <Layout>
      <div style={{ height: 'calc(100vh - 9rem)' }} className="flex flex-col items-center justify-center">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 lg:mb-10">Foogle</span>
        <MainSearchBar keyword={keyword} setKeyword={setKeyword} />
        <div className="flex items-center gap-2 mt-4 md:mt-5">
          <MainButton>Foogle Search</MainButton>
          <MainButton>Feeling Mega Lucky</MainButton>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
