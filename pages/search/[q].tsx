import { GetServerSideProps, NextPage } from 'next';
import { APIfetcher } from '../../helpers/fetchAPI';

// INTERFACE
import Result from '../../interfaces/Result';

// COMPONENTS
import LayoutSearch from '../../components/LayoutSearch';
import SearchResultCard from '../../components/Search/SearchResultCard';
import SearchAnswerCard from '../../components/Search/SearchAnswerCard';
import Pagination from '../../components/Search/Pagination';

interface Props {
  data: Result;
}

const SearchResult: NextPage<Props> = ({ data }) => {
  return (
    <LayoutSearch>
      <div className="min-h-screen flex flex-col py-3 lg:py-4 px-5 md:px-9 lg:px-20">
        <div className="pb-3 md:pb-2 lg:pb-3 flex items-center text-xs md:text-sm font-semibold text-gray-500 gap-1">
          <span>About {data.total} results</span>
          <span>({data.ts.toString().slice(0, 4)}) seconds</span>
        </div>
        {data.answers.length ? (
          <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col">
            <div className="w-full flex items-center pb-1 border-b">
              <span className="font-semibold md:text-lg">Fooglers also ask:</span>
            </div>
            <div className="w-full flex flex-col py-2 gap-1">
              {data.answers.map((answer, index) => (
                <SearchAnswerCard key={index}>{answer}</SearchAnswerCard>
              ))}
            </div>
          </div>
        ) : null}
        <div className="w-full flex flex-col items-center md:items-start gap-2 py-2">
          {data.results.map((result, index) => (
            <SearchResultCard key={index} result={result} />
          ))}
        </div>
        <Pagination total={data.total} />
      </div>
    </LayoutSearch>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const url = context.resolvedUrl;
    const path = 'search';
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
