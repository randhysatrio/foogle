import AdditionalLinkResult from '../../interfaces/Result/AdditionalLinkResult';
import SearchResultLink from '../../interfaces/Result/SearchResultLink';

interface RelatedProps {
  link: AdditionalLinkResult;
}

const RelatedResultLink: React.FC<RelatedProps> = ({ link }) => {
  return (
    <a href={link.href} target="_blank" className="w-5/6 flex flex-col">
      <span className="text-xs md:text-sm lg:text-md text-sky-500 truncate">{link.href}</span>
      <span className="py-[2px] font-semibold md:text-lg truncate">{link.text}</span>
    </a>
  );
};

interface Props {
  result: SearchResultLink;
}

const SearchResultCard: React.FC<Props> = ({ result }) => {
  return (
    <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col">
      <a href={result.link} target="_blank" className="w-full flex flex-col">
        <span className="text-xs md:text-sm lg:text-md text-sky-500 truncate">
          {result.cite?.domain ? result.cite?.domain : result.link}
        </span>
        <span className="py-[2px] font-semibold md:text-lg truncate">{result.title}</span>
        <span className="text-xs md:text-sm lg:text-md line-clamp-3 ">{result.description}</span>
      </a>
      <div className="w-full flex flex-col pl-2 pt-2">
        {result.additional_links.length ? result.additional_links.map((link) => <RelatedResultLink key={link.text} link={link} />) : null}
      </div>
    </div>
  );
};

export default SearchResultCard;
