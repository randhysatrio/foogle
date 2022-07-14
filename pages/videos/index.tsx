import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import SecondarySearchBar from '../../components/UI/SecondarySearchBar';

const VideoMain: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div style={{ height: 'calc(100vh - 9rem)' }} className="flex flex-col items-center justify-center">
        <div onClick={() => router.push('/')} className="w-full flex justify-center gap-2 mb-6 md:mb-9">
          <span className="font-bold text-5xl md:text-7xl cursor-pointer">Foogle</span>
          <span className="font-bold text-sm md:text-base mt-auto">Videos</span>
        </div>
        <SecondarySearchBar />
      </div>
    </Layout>
  );
};

export default VideoMain;
