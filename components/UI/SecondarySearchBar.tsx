import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const SecondarySearchBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname.split('/')[1];
  const [keyword, setKeyword] = useState<string>('');

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!keyword || keyword.trim() === '') {
          return;
        }

        router.push(`/${path}/${keyword}`);
      }}
    >
      <div className="relative rounded-full flex items-center bg-white hover:shadow-[0_0_10px_-4px_rgba(0,0,0,0.5)] focus:shadow-[0_0_10px_-4px_rgba(0,0,0,0.5)] transition">
        <button
          type="submit"
          disabled={!keyword || keyword.trim() === ''}
          className="absolute left-4 md:left-6 focus:outline-none active:scale-95 transition text-gray-600 hover:text-gray-500 disabled:hover:text-gray-600 disabled:active:scale-100 cursor-pointer"
        >
          <FaSearch className="text-sm md:text-lg" />
        </button>
        <input
          type="text"
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
          className="w-[270px] md:w-[500px] lg:w-[600px] h-9 md:h-12 px-11 md:px-14 rounded-full focus:outline-none border border-gray-300 cursor-pointer md:text-lg"
        />
        <span
          onClick={() => setKeyword('')}
          className={`${keyword ? 'opacity-100' : 'opacity-0'} absolute right-4 md:right-6 cursor-pointer transition-all duration-300`}
        >
          <IoMdClose className="text-gray-600 md:text-lg" />
        </span>
      </div>
    </form>
  );
};

export default SecondarySearchBar;
