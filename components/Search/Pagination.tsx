interface ButtonProps {
  page: number;
}

const PaginationButton: React.FC<ButtonProps> = ({ page }) => {
  return (
    <div className="h-full flex flex-col items-center first-of-type:text-sky-600">
      <span className="h-1/2 font-bold pt-1">O</span>
      <span className="h-1/2 font-bold">{page}</span>
    </div>
  );
};

interface Props {
  total: number;
}

const Pagination: React.FC<Props> = ({ total }) => {
  const renderButton = (): JSX.Element[] => {
    const results = [];

    for (let i = 0; i < total; i++) {
      results.push(<PaginationButton key={i} page={i + 1} />);
    }

    return results;
  };

  return (
    <div className="w-full h-12 flex justify-center items-start">
      <div className="h-full flex text-sky-400">
        <span className="h-1/2 font-bold pt-1">F</span>
        {renderButton()}
        <span className="h-1/2 font-bold pt-1">{total > 1 ? 'GLE' : 'OGLE'}</span>
      </div>
    </div>
  );
};

export default Pagination;
