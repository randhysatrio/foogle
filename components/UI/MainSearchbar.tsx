import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

import { FaSearch, FaMicrophone } from 'react-icons/fa';

interface Props {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

const MainSearchBar: React.FC<Props> = ({ keyword, setKeyword }) => {
  const router = useRouter();

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!keyword || keyword.trim() === '') {
          return;
        }

        alert(keyword);
      }}
    >
      <div className="relative rounded-full flex items-center bg-white hover:shadow-[0_0_11px_-1px_rgba(0,0,0,0.5)] focus:shadow-[0_0_11px_-1px_rgba(0,0,0,0.5)] transition">
        <button
          type="submit"
          disabled={!keyword || keyword.trim() === ''}
          className="absolute left-4 md:left-6 focus:outline-none active:scale-95 transition text-gray-600 hover:text-gray-500 disabled:hover:text-gray-600 disabled:active:scale-100 cursor-pointer"
        >
          <FaSearch className="md:text-lg" />
        </button>
        <input
          type="text"
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
          className="w-[300px] md:w-[450px] lg:w-[600px] h-10 md:h-12 px-11 md:px-14 rounded-full focus:outline-none border cursor-pointer md:text-lg"
        />
        <span className="absolute right-4 md:right-6 cursor-pointer">
          <FaMicrophone className="text-gray-600 md:text-lg" />
        </span>
      </div>
    </form>
  );
};

export default MainSearchBar;
