import { GetServerSideProps, NextPage } from 'next';
import { APIfetcher } from '../../helpers/fetchAPI';

// INTERFACES
import Result from '../../interfaces/Result';

// COMPONENTS
import LayoutSearch from '../../components/LayoutSearch';
import ImageCard from '../../components/Image/ImageCard';

interface Props {
  data: Result;
}

const ImageResult: NextPage<Props> = ({ data }) => {
  return (
    <LayoutSearch>
      <div className="min-h-screen flex flex-col">
        <div className="w-full grid grid-cols-9 md:grid-cols-12 lg:grid-cols-10 gap-2 md:gap-4 py-3 md:py-5 px-3 md:px-10">
          {data.image_results.map((result, index) => (
            <ImageCard key={index} result={result} />
          ))}
        </div>
      </div>
    </LayoutSearch>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const url = context.resolvedUrl;
    const path = 'image';
    const query = url.split('/')[url.split('/').length - 1];

    const data = await APIfetcher({ path, query });

    return {
      props: { data },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};

export default ImageResult;
