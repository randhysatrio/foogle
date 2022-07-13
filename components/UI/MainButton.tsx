interface Props {
  children: string;
}

const MainButton: React.FC<Props> = ({ children }) => {
  return (
    <button className="w-32 md:w-36 lg:w-40 h-9 md:h-10 lg:h-11 bg-gray-50 rounded-lg focus:outline-none border active:scale-95 transition hover:shadow-[0_0_12px_-6px_rgba(0,0,0,0.5)] font-semibold text-xs md:text-md lg:text-[14px]">
      {children}
    </button>
  );
};

export default MainButton;
