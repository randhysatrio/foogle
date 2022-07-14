import SearchResultLink from './SearchResultLink';

interface SearchResult {
  results: SearchResultLink[];
  total: number;
  answers: string[];
  image_results: unknown[];
  ts: number;
  device_region: string;
  device_type: string;
}

export default SearchResult;
