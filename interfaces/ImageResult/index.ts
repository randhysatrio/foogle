import SearchResultLink from '../SearchResult/SearchResultLink';
import ImageResults from './ImageResults';

interface ImageResult {
  answers: string[] | unknown[];
  results: SearchResultLink[] | unknown[];
  total: number | null;
  image_results: ImageResults[];
  ts: number;
  device_region: string;
  device_type: string;
}

export default ImageResult;
