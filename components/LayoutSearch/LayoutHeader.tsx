import { useRouter } from 'next/router';

import ResultSearchBar from './ResultSearchBar';
import { CgMenuGridO } from 'react-icons/cg';

interface ButtonProps {
  children: string;
  val: string;
}

const HeaderButton: React.FC<ButtonProps> = ({ children, val }) => {
  const router = useRouter();

  return (
    <button
      className={`h-10 w-16 md:w-20 lg:h-11 lg:w-24 focus:outline-none bg-whit text-sm lg:text-base font-semibold relative ${
        router.pathname.includes(val)
          ? 'after:h-[3px] after:w-full after:bg-sky-500 after:absolute after:bottom-0 after:left-0 text-black'
          : 'text-gray-700'
      } `}
    >
      {children}
    </button>
  );
};

const LayoutHeader: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col pt-4 md:pt-6 px-3 md:px-9 border-b">
      <div className="w-full flex items-center justify-between md:justify-start md:gap-6 pb-2">
        <span onClick={() => router.push('/')} className="text-xl md:text-3xl font-bold">
          Foogle
        </span>
        <ResultSearchBar />
        <span className="text-xl md:text-3xl md:ml-auto active:scale-95 transition cursor-pointer">
          <CgMenuGridO />
        </span>
      </div>

      <div className="w-full flex items-center justify-center md:justify-start md:pl-10 lg:pl-20">
        <HeaderButton val="search">All</HeaderButton>
        <HeaderButton val="image">Image</HeaderButton>
        <HeaderButton val="videos">Videos</HeaderButton>
        <HeaderButton val="news">News</HeaderButton>
      </div>
    </div>
  );
};

export default LayoutHeader;
