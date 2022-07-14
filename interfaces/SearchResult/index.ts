import SearchResultLink from './SearchResultLink';
import ImageResults from '../ImageResult/ImageResults';

interface SearchResult {
  results: SearchResultLink[];
  total: number;
  answers: string[];
  image_results: unknown[] | ImageResults[];
  ts: number;
  device_region: string;
  device_type: string;
}

export default SearchResult;
