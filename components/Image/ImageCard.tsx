import Image from 'next/image';
import ImageResults from '../../interfaces/Result/ImageResults';

interface Props {
  result: ImageResults;
}

const ImageCard: React.FC<Props> = ({ result }) => {
  return (
    <div
      onClick={() => window.open(result.link.href, '_blank')}
      className="col-span-3 lg:col-span-2 h-32 md:h-48 lg:h-60 border rounded-lg md:rounded-xl hover:rounded-md transition-all flex flex-col overflow-hidden cursor-pointer active:scale-95"
    >
      <div className="w-full h-2/3 md:h-3/4 relative flex items-center justify-center">
        <Image src={result.image.src} alt={result.image.alt} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full h-1/3 md:h-1/4 flex flex-col py-1 px-1 md:px-2">
        <span className="text-[10px] md:text-[13px] lg:text-[15px] font-semibold truncate hover:text-sky-500 active:scale-95 transition">
          {result.link.title}
        </span>
        <span className="text-[9px] md:text-[11px] lg:text-[13px] lg:font-semibold truncate text-gray-600">{result.link.domain}</span>
      </div>
    </div>
  );
};

export default ImageCard;
