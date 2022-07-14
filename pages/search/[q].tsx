import { GetServerSideProps, NextPage } from 'next';
import { APIfetcher } from '../../helpers/fetchAPI';

// INTERFACE
import SearchResult from '../../interfaces/SearchResult';

// COMPONENTS
import LayoutSearch from '../../components/LayoutSearch';
import SearchResultCard from '../../components/Search/SearchResultCard';

interface Props {
  data: SearchResult;
}

const SearchResult: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <LayoutSearch>
      <div className="min-h-screen flex flex-col py-3 lg:py-4 px-5 md:px-9 lg:px-11">
        <div className="pb-3 md:pb-2 lg:pb-3 flex items-center text-xs md:text-sm font-semibold text-gray-700">
          <span>About {data.total} results</span>
        </div>
        <div className="w-full flex flex-col items-center md:items-start gap-2">
          {data.results.map((result) => (
            <SearchResultCard key={result.title} result={result} />
          ))}
        </div>
      </div>
    </LayoutSearch>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const url = context.resolvedUrl;
    const path = url.split('/')[1];
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

export default SearchResult;
