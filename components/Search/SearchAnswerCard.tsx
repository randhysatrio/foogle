import { FaCaretDown } from 'react-icons/fa';

interface Props {
  children: string;
}

const SearchAnswerCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-between border-b pb-1 md:pb-2 cursor-pointer">
      <span className="truncate md:text-lg">{children}</span>
      <FaCaretDown className="text-xs text-gray-600" />
    </div>
  );
};

export default SearchAnswerCard;
